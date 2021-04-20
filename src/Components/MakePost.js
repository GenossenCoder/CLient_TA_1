import React,{ useState } from 'react'
import styles from '.././styles/MakePost.module.css'
import {useMutation,gql} from '@apollo/client'
import "react-toastify/dist/ReactToastify.css";

function MakePost() {
    const CREATE_POST_MUTATION = gql`
    mutation createPost(
        $Titel:String!
        $Content:String!  
        $Author:String){
        createPost(
            Titel:$Titel
            Content:$Content  
            Author:$Author
            ){
            id
        }
    }
    `

    const [Name, setName] = useState("");
    const [Titel, setTitel] = useState("");
    const [Text, setText] = useState("");
    const [createPost,{data}] = useMutation(CREATE_POST_MUTATION,{
            variables:{
                Titel: Titel,
               Content: Text,
               Author: Name,
            },
    })
    return (
        <form className={styles.PostInput} onSubmit={(e) => {
            e.preventDefault();
            createPost();
          }}>
            <h1 className={styles.Header}>Design the future</h1>
            <li ><input className={styles.PostShort} type="text" placeholder="Name" name="name" onChange={(e)=>{setName(e.target.value)}}></input></li>
            <li ><input className={styles.PostShort} type="text" placeholder="Title" name="title" onChange={(e)=>{setTitel(e.target.value)}}></input></li>
            <li ><textarea className={styles.PostText} type="text" placeholder="Inhalt" name="text" onChange={(e)=>{setText(e.target.value)}}></textarea></li>
            <li><button className={styles.PostButton}>Send</button></li> 
        </form>
    )
}

export default MakePost
