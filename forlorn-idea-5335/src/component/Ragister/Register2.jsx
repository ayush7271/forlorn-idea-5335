import React from 'react'
import { useContext ,useState} from 'react'
import { Authcontext } from '../Authcontext'
export const Ragister2 = () => {

    const[admin,setadmin]=useState("")
    const[password,setpassword]=useState("")
    const {handelsubmit}=useContext(Authcontext)

    const handelclick=()=>{
        handelsubmit(admin,password)
    }
  return (
    <div className='ragister'>
        <div className='div1'>
        <div>Name:

<input style={{width:"400px",marginTop:"50px",outline:"none",borderBottom:"1px solid black"}} type="text" placeholder='Enter name'
 />
</div>

<div>Email:

<input style={{width:"400px",marginTop:"50px",outline:"none",borderBottom:"1px solid black",marginBottom:"50px"}} type="gmail" name="" id="" placeholder='Enter email'
onChange={(e)=>setadmin(e.target.value)} />
</div>
<div>Password:

<input style={{width:"400px",marginTop:"0px",outline:"none",borderBottom:"1px solid black",marginBottom:"50px"}} type="password" name="" id="" placeholder='Enter password'
onChange={(e)=>setpassword(e.target.value)} />
</div>

<input onClick={handelclick} type="submit" />
        </div>


    </div>
  )
}
