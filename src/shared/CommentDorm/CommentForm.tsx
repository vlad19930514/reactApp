import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { commentContext } from '../Content/commentContext';

function CommentForm() {
 const {value, onChange} = useContext(commentContext)
   
    function handleChange(event:ChangeEvent<HTMLTextAreaElement>){
        onChange(event.target.value)
    }
    function handleSubmit(event:FormEvent){
        event.preventDefault()
       console.log(value);

    }
    return (
        <form onSubmit={handleSubmit}>
            <textarea value={value} onChange={handleChange}/>
            <button type="submit">комментировать</button>
            
        </form>
    )
}

export default CommentForm
