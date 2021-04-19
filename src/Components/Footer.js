import React from 'react'
import styles from '.././styles/Footer.module.css'
import { AiOutlinePlusCircle } from 'react-icons/ai'
const Footer = () => {
    return (
        <footer className={styles.Footer}>
           <button classNames={styles.Button}>Show More...<AiOutlinePlusCircle/></button>
        </footer>
    )
}

export default Footer
