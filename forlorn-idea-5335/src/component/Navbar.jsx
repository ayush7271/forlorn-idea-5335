import React from 'react'
import './Navbar.css'
// import { Button } from '@chakra-ui/react'
export const Navbar = () => {

    function abc(){

        return (
            <div className='button'></div>
        )
    }
  return (
<div className='navbar'> 
<div className='logo'>
   
</div>
<div className='right-menu'>
<div className='menu'>feacture</div>
<div className='dropdown-menu'>

<a href="#">a</a><a href="#">b</a><a href="#">c</a><a href="#">d</a>
</div>
</div>
<div className='button'>
    {/* <Button style={{background:"orange",height:"50px",width:"120px",margin:"auto",border:"2px solid green" }}>SIGN UP</Button> */}
    {/* <Button style={{background:"#109844",height:"50px",width:"120px",margin:"auto",border:"2px solid green" }}>SIGN IN</Button> */}
</div>



</div>
          
    
  )
}
