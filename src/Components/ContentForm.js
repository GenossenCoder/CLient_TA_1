import { useQuery } from '@apollo/client'
import React, {useEffect, useState} from 'react'
import styles from '.././styles/ContentForm.module.css'
import styles1 from '.././styles/Comments.module.css'
import {GET_Posts} from '../GraphQL/QueryPosts'
import Comments from './Comments'
import CreateComment from './CreateComment'
const ContentForm = (props) => {

    const parser = props.Parse

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
    if (parser !== null && parser !== undefined && parser.searchPost !== null && parser.searchPost !== undefined) {
        console.log()
        return (<div className={styles.DIV}>        
             <form className={styles.Form}>
                 <h1 className={styles.Titel}>{parser.searchPost.Titel}</h1> 
                 <h2 className={styles.Date}>{parser.searchPost.Date}</h2>
                 <h3 className={styles.Name}>{parser.searchPost.Author}</h3> 
                <textarea className={styles.Text} disabled value={parser.searchPost.Content}></textarea>
                 <button className={styles.CommentButtons} onClick={(e)=>{e.preventDefault(); onSubmit(parser.searchPost.id,parser.searchPost.Titel)}}>Comments</button>
             </form>
         </div>)
     }


    if(loadcomments){
        return(
            <div>
            <button className={styles1.Back} onClick={(e)=>{LoadComments(!loadcomments)}}>Back</button>
            <h1 className={styles1.Header}>Post: {titel1}
            <CreateComment ID={id}/>
            <Comments ID={id} Name={titel1}/>
            </h1>
            </div>
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


