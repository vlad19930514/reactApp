import React, { useContext, useEffect, useState } from 'react'
import UserBlock from '../UserBlock/UserBlock'
import styles from './searchblock.css'
import axios from 'axios'

import { userContext } from '../../context/userContext'


function SearchBlock() {

   const {iconImg, name} = useContext(userContext)
   
    return (
        <div className={styles.searchBlock}>
           <UserBlock avatarSrc={iconImg} username={name}/>
        </div> 
    )
}

export default SearchBlock
