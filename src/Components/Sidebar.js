import React from 'react'
import styles from '.././styles/Sidebar.module.css'
import MakePost from './MakePost.js'

const Sidebar = (props) => {
    return (
        <div className={styles.Sidebar}>
            <MakePost/>
            <form className={styles.News}>
            </form>
        </div>
    )
}

export default Sidebar
