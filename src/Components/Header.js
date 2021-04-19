import React from 'react'
import logo from '.././pngs/logo.png'
import styles from '.././styles/Header.module.css'

const Header = (props) => {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt="Logo"/>
            <input className={styles.input} placeholder="Search..."></input>
        </header>
    )
}

export default Header
