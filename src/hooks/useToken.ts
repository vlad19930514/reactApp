import React, { useEffect, useState } from 'react'

export const useToken=()=>{
    const [token, setToken] =useState('');
    useEffect(()=>{
if(window.__token__){
setToken(window.__token__)
}
    },[]) 

    return [token]
}



