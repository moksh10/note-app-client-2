import React from 'react'
import API from '../API/API'
import NoteApp from '../components/NoteApp/NoteApp'
import { useState,useEffect } from 'react'
import { Redirect } from 'react-router'
export default function NoteAuth() {
  const [ notePrivateRoute, setPrivate] = useState(<></>)
  useEffect(() => {
    API.get('/isAuth')
    .then((res)=>{
        if(res.data.success)
        {
            setPrivate(<NoteApp />)
        }
    })
    .catch((error)=>{
        setPrivate(<Redirect to="/login"/>)   
    })
  }, [])
  
  return notePrivateRoute

       
}

