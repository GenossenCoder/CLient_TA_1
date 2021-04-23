import React,{useState,useEffect} from 'react'
import logo from '.././pngs/logo.png'
import styles from '.././styles/Header.module.css'
import {useQuery,gql} from '@apollo/client'
const Header = (props) => {
    const [Search,setSearch] =useState("")
    const [Parse,setParse]= useState("")
    const GET_POST_COMMENTS= gql`
    query($Titel:String!){
        searchPost(Titel:$Titel){
        Titel
        Author
        Content
        Date
        id
        }
    }
    `
    const {data} = useQuery(GET_POST_COMMENTS,{
      variables:{Titel:Search}
    })
    useEffect(() =>{
      if (data){
          setParse(data)     
      }
  }, [data])
    const Go = ()=>{props.changedata(Parse)}
    Go()
  
    const handleSubmit = (event) => {
      if(event.keyCode === 13) {
        setSearch(event.target.value)
      }
  }
    return (
        <header className={styles.header}>
            <input className={styles.headerinput} onKeyDown={handleSubmit} placeholder="Search..." on></input>
            <img className={styles.logo} src={logo} alt="Logo"/>
            
        </header>
    )
}

export default Header
