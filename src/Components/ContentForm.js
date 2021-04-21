import { useQuery } from '@apollo/client'
import React, {useEffect, useState} from 'react'
import styles from '.././styles/ContentForm.module.css'
import styles1 from '.././styles/Comments.module.css'
import {GET_Posts} from '../GraphQL/QueryPosts'
import Comments from './Comments'
import CreateComment from './CreateComment'
const ContentForm = () => {
    const { loading, data} =useQuery(GET_Posts)
    const[Post, setPosts] =useState([]);
    const [loadcomments, LoadComments] = useState(false)
    const [id, setid] = useState("")
    const [titel1, setTitel] = useState("")
    useEffect(() =>{
        if (data){
            setPosts(data.Post)
            
            
        }
    }, [data])
    const onSubmit=(id,Titel)=> {
        LoadComments(!loadcomments)
        setid(id)
        setTitel(Titel)
    }
    if (loading){
        return <div className={styles.DIV}>Loading...</div>
    } 









    if(loadcomments){
        return(
            <h1 className={styles1.Header}>Post: {titel1}
            <CreateComment ID={id}/>
            <Comments ID={id} Name={titel1}/>
            </h1>
            )
    }  
    else{return Post.map(({Author,Titel,Content,Date,id}) => (
        <div className={styles.DIV}>        
            <form className={styles.Form}>
                <h1 className={styles.Titel}>{Titel}</h1> 
                <h2 className={styles.Date}>{Date}</h2>
                <h3 className={styles.Name}>{Author}</h3> 
                <textarea className={styles.Text} disabled value={Content}></textarea>
                <button className={styles.CommentButtons} onClick={(e)=>{e.preventDefault(); onSubmit(id,Titel)}}>Comments</button>
            </form>
        </div>
        ));}


}

                
export default ContentForm


