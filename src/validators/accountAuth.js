import React from 'react'
import API from '../API/API'
import Account from '../components/Account/Account'
import { useState,useEffect } from 'react'
import { Redirect } from 'react-router'
export default function AccountAuth() {
  const [ accountPrivateRoute, setPrivate] = useState(<></>)
  useEffect(() => {
    API.get('/isAuth')
    .then((res)=>{
        if(res.data.success) 
        {
            setPrivate(<Account />)
        }
    })
    .catch((error)=>{
        setPrivate(<Redirect to="/login" />)
         
    })
  }, [])
  
  return accountPrivateRoute

       
}

