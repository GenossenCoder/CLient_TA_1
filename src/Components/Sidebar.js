import React from 'react'
import styles from '.././styles/Sidebar.module.css'
import MakePost from './MakePost.js'
import News from './News'

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
