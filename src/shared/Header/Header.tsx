import React, { useContext } from 'react'
import SearchBlock from './SearchBlock/SearchBlock'
import SortBlock from './SortBlock/SortBlock'
import ThreadTitle from './ThreadTitle/ThreadTitle'
import styles from './header.css'
import UserBlock from './UserBlock/UserBlock'


function Header() {
  
  
    return (
        <header className={styles.header}>
            
                <SearchBlock />
           
            
            <ThreadTitle/>
            <SortBlock/>
            
        </header>
    )
}

export default Header
