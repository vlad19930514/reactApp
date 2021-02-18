import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { TokenContext } from '../shared/context/TokenContext'
interface IUserData {
    name?: string;
    iconImg?: string;
}

export function useUserData(){
    const [data, setData]= useState<IUserData>({}) 
    const token =useContext(TokenContext)
    useEffect(()=>{
axios.get('https://oauth.reddit.com/api/v1/me', {
    headers:{Authorization:`bearer ${token}`}
}).then((resp)=>{
    const userData = resp.data;
    setData({name:userData.name, iconImg:userData.icon_img})
    console.log(resp)
})
.catch(console.log)
    },[token])
    return [data]
}