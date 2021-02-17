import React from 'react'
import Card from './Card/Card'
import styles from './cardsList.css'

function CardsList() {
    return (
        <ul className={styles.cardsList}>
            <Card/>
        </ul>
    )
}

export default CardsList
