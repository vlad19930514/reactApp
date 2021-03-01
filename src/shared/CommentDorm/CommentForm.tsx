import React, { ChangeEvent, FormEvent, useContext, useState } from 'react'
import { useStore } from 'react-redux';

import { commentContext } from '../Content/commentContext';

export function CommentForm() { 
    const store = useStore()
  store.getState()
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


