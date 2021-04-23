import React, { useState } from 'react'
import styles1 from '.././styles/Comments.module.css'
import {useMutation,gql} from '@apollo/client'
import styles from '.././styles/MakePost.module.css'
const CreateComment = (props) => {
    const ID = props.ID
    const [Name, setName]=useState("")
    const [Content,setContent] = useState("")
    const [Error, setError] = useState("")
    const [Success, setSuccess] = useState("")
    const CREATE_POST_MUTATION = gql`
    mutation createComments(
        $PostID:String!
        $Content:String!  
        $Author:String){
        createComments(
            PostID:$PostID
            Content:$Content  
            Author:$Author
            ){
            Comments{Content}
        }
    }
    `
    const [createComments] = useMutation(CREATE_POST_MUTATION,{
            variables:{
                PostID: ID,
               Content: Content,
               Author: Name
            },
    })
    const Validate = ()=>{
        if(ID==="" || Content==="" || Name===""){
            setError("You have to fill all fields")
        }
        else{
            createComments();
            setSuccess("You will be redirected soon")
            setTimeout(()=>{
               window.location.reload(true);
            },2000)
        }
    }
    return (
        <form onSubmit={(e) => {
            e.preventDefault();
            Validate();
          }}>
        {Error && <li className={styles.Error}>{Error}</li>}
        {Success && <li className={styles.Success}> {Success}</li>}
        <h1 className={styles1.InputHeader}>Comment:</h1>
        <input className={styles1.InputName} placeholder="Name..." onChange={(e)=>{setName(e.target.value)}}></input>
        <div className={styles1.InputDIV}>
        <textarea className={styles1.InputText} placeholder="Text..."onChange={(e)=>{setContent(e.target.value)}}></textarea>
        </div>
        <div className={styles1.InputDIV}>
            <button className={styles1.InputButton}>Send</button>
        </div>
        </form>
    )
}

export default CreateComment
