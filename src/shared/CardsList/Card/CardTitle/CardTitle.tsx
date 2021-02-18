import React, { useState } from 'react'
import styles from '../card.css'
import Post from '../../../Post/Post'

function CardTitle() {
    
    const [isModalOpened, setIsModalOpened] = useState(false)
    return (
        <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink} onClick={()=>setIsModalOpened(true)}>
            Следует отметить, что новая модель организационной деятельности Следует
        </a>
        
        {isModalOpened && (<div><Post onClose={()=>{setIsModalOpened(false)}}/></div>)}
    </h2>
    )
    
}

export default CardTitle
