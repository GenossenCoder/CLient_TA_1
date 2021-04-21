import React,{ useState, useEffect} from 'react'
import {useQuery,gql} from '@apollo/client'
import styles from '.././styles/Comments.module.css'
const Comments = (props) => {
    const postId =props.ID
    const GET_POST_COMMENTS= gql`
    query($postId:String!){
        getPost(postId:$postId){
        Titel
        Author
        Content
        Comments{
            Author
            Content
        }
        }
    }
    `
    const {data,loading} = useQuery(GET_POST_COMMENTS,{
        variables:{postId}
    })
    if(loading){
        return (
            <div className={styles.DIV}>        
            Loading...
            </div>
        )
    }

    if(data.getPost.Comments[0]===undefined){
        return(<form className={styles.Form}>
            <h1 className={styles.CommentHeader}>Nothing in here</h1>
            </form>)
    }
    
    else{return data.getPost.Comments.map(({Author,Content}) => (
    <div><form className={styles.Form}>
        <h1 className={styles.CommentHeader}>From: {Author}</h1>
        <textarea className={styles.Content}  value={Content}></textarea>
        </form></div>
    ))}
    
    
    
}

export default Comments
