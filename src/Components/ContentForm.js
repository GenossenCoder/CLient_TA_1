import { useQuery } from '@apollo/client'
import React, {useEffect, useState} from 'react'
import styles from '.././styles/ContentForm.module.css'
import {GET_Posts} from '../GraphQL/QueryPosts'
const ContentForm = () => {
    const { loading, data} =useQuery(GET_Posts)
    const[Post, setPosts] =useState([]);
    useEffect(() =>{
        if (data){
            setPosts(data.Post)
        }
    }, [data])
    if (loading){
        return <div>Loading...</div>
    }
    return Post.map(({Author,Titel,Content,Date}) => (
    <div className={styles.DIV}>        
        <form className={styles.Form}>
            <h1 className={styles.Titel}>{Titel}</h1> 
            <h2 className={styles.Date}>{Date}</h2>
            <h3 className={styles.Name}>{Author}</h3> 
            <textarea className={styles.Text} disabled value={Content}></textarea>
        </form>
    </div>
    ));

}
                
export default ContentForm


