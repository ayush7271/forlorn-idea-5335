import React from 'react'
import { useState } from 'react'
import { Authcontext } from './Authcontext'
import { useContext } from 'react'
 
export const Login = () => {
 
    const[username,setusername]=useState()
    const[password, setpassword]=useState()
    const {handelSignin}= useContext(Authcontext)
    const handelSubmit=(e)=>{
        e.preventDefault()
        console.log("username",username)
        console.log("pass",password);
        handelSignin({username,password})
    }
 
  return (
    <>

    <div className='ragister'>
        <div >

        <a href="/">
            <img style={{width:"200px",height:"30px"}}  src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-dark.svg" alt="" />
            </a>
        </div>
            <div className='div2'>

   <form onSubmit={handelSubmit}>
    <div>
        enter email:
       <input style={{width:"400px",marginTop:"50px", outline:"none" ,borderBottom:"1px solid black"}} type="text" placeholder='email' onChange={(e)=>setusername(e.target.value)}/>
    </div>
    <div>
        password:
       <input style={{width:"400px",marginTop:"50px", outline:"none" ,borderBottom:"1px solid black"}} type="text" placeholder='password' onChange={(e)=>setpassword(e.target.value)}/>
    </div>
       <input style={{width:"100px",height:"30px",marginTop:"50px",background:"blue"}} type="submit"/>
       
   </form>
            </div>
    </div>
    </>
  )
}
 


