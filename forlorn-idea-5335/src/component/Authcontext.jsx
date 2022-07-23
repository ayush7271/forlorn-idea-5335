import React, { createContext } from 'react'
import { useContext,useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const Authcontext=createContext()
export const AuthcontextProvider= ({children}) => {
   const[user,setuser]=useState("")
   const[pass,setpass]=useState("")


    const handelsubmit=(a,b)=>{
                setuser(a)
                setpass(b)
    }
console.log(user)
console.log(pass)
   
     const navigate=useNavigate()
   
   const[isAuth,setIsAuth]= useState(false)
   const handelSignin=({username,password})=>{
       if(username===user && password===pass)
       {
           setIsAuth(true)
           
           navigate("/food")
           alert("login successful")
 
       }
       else{
           alert("wrong password")
           navigate("/sign")
       }
 
   }
   const handelSignout=()=>{
       setIsAuth(false)
   }
const value={isAuth,handelSignin,handelSignout,handelsubmit}
  return (
      <Authcontext.Provider value={value}>{children}</Authcontext.Provider>
   
  )
}
 
