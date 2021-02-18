import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'
import CommentForm from '../CommentDorm/CommentForm'
import styles from './post.css'

interface IPost {
    onClose?:()=> void
}
function Post(props:IPost) {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(()=>{
        function handleClick(event:MouseEvent){
            if(event.target instanceof Node && !ref.current?.contains(event.target))
           props.onClose?.()
            
        }
        document.addEventListener('click', handleClick)
        return ()=>{
            document.removeEventListener('click', handleClick)
        }
    },[])
    const node = document.querySelector('#modal_root')
    if(!node) return null
    return ReactDOM.createPortal((
        <div className={styles.Post} ref={ref}>
            <h1 >Открытый пост</h1>
            <p>jsdcniashcigsviudsv</p>
            <p>jsdcniashcigsviudsv</p>
            <p>jsdcniashcigsviudsv</p>
            <CommentForm/>
        </div>
    ), node)
}

export default Post
