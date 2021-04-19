import React,{ useState } from 'react'
import styles from '.././styles/MakePost.module.css'
import {CREATE_POST_MUTATION} from '../GraphQL/MutationPost'
import {useMutation} from '@apollo/client'
import {ToastContainer,toast} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

function MakePost() {
    const [Name, setName] = useState("");
    const [Titel, setTitel] = useState("");
    const [Text, setText] = useState("");
    const [createPost,{error}] = useMutation(CREATE_POST_MUTATION)
    const addUser = ()=>{
        toast.error("An error has occurred")
        if(Name===""||Titel===""||Text===""){
            return(<ToastContainer/>)
        }
        createPost({
            variables:{
               Content: Text,
               Titel: Titel,
               Author: Name,
            }
        })
        if(error){
            console.log(error)
        }
    }
    return (
        <div className={styles.PostInput}>
            <h1 className={styles.Header}>Design the future</h1>
            <li ><input className={styles.PostShort} type="text" placeholder="Name" name="name" onChange={(e)=>{setName(e.target.value)}}></input></li>
            <li ><input className={styles.PostShort} type="text" placeholder="Title" name="title" onChange={(e)=>{setTitel(e.target.value)}}></input></li>
            <li ><textarea className={styles.PostText} type="text" placeholder="Inhalt" name="text" onChange={(e)=>{setText(e.target.value)}}></textarea></li>
            <li><button className={styles.PostButton} onClick={addUser}>Send</button></li> 
        </div>
    )
}

export default MakePost
