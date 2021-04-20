import React,{ useState } from 'react'
import styles from '.././styles/MakePost.module.css'
import {useMutation,gql} from '@apollo/client'
import "react-toastify/dist/ReactToastify.css";

function MakePost() {
    const CREATE_POST_MUTATION = gql`
    mutation createPost(
        $Content:String! 
        $Titel:String! 
        $Author:String){
        createPost(
            Content:$Content 
            Titel:$Titel 
            Author:$Author
            ){
            id
        }
    }
    `

    const [Name, setName] = useState("");
    const [Titel, setTitel] = useState("");
    const [Text, setText] = useState("");
    const [createPost] = useMutation(CREATE_POST_MUTATION)
    const addPost = ()=>{
        if(Name===""||Titel===""||Text===""){
            return(<h1>...Error</h1>)
        }
        createPost({
            variables:{
               Content: Text,
               Titel: Titel,
               Author: Name,
            },
        })
    }
    return (
        <div className={styles.PostInput}>
            <h1 className={styles.Header}>Design the future</h1>
            <li ><input className={styles.PostShort} type="text" placeholder="Name" name="name" onChange={(e)=>{setName(e.target.value)}}></input></li>
            <li ><input className={styles.PostShort} type="text" placeholder="Title" name="title" onChange={(e)=>{setTitel(e.target.value)}}></input></li>
            <li ><textarea className={styles.PostText} type="text" placeholder="Inhalt" name="text" onChange={(e)=>{setText(e.target.value)}}></textarea></li>
            <li><button className={styles.PostButton} onClick={addPost}>Send</button></li> 
        </div>
    )
}

export default MakePost
