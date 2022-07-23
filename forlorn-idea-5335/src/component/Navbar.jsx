import React from 'react'
import './Navbar.css'
import { Button } from '@chakra-ui/react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/react'


export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  // a.onmouseover={onOpen}
  const abc=()=>{
    
    let a=document.getElementById("a").style.display="block"
    
  
  }
  const ab=()=>{
    
    let a=document.getElementById("a").style.display="none"
    
  
  }

    
  return (
    <>
<div className='navbar'> 
<div className='logo'>
   <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-dark.svg" alt="" />
</div>






<div className='right-menu'>
<div className='menu'>
  <div onMouseEnter={abc} onMouseLeave={ab}>Features </div>
   
 

  
  
  </div>
<div className='diet'>Diets</div>
<div className='library'>Library</div>
<div className='food'>Food</div>
<div className='business'>Business</div>
<div></div>
{/* <div className='dropdown-menu'>

<a href="#">a</a><a href="#">b</a><a href="#">c</a><a href="#">d</a>
</div> */}
</div>
<div className='lbutton'>
    <Button style={{background:"orange",height:"50px",width:"120px",borderRadius:"30px",border:"2px solid orange" }}>SIGN UP</Button>
    <Button style={{background:"#109844",height:"50px",width:"120px",borderRadius:"30px",border:"2px solid green" }}>SIGN IN</Button>
</div>



</div>
<div id="a">
        <p>wdsef</p>
        <p>qwsedf</p>
    </div>
    </>
          
    
  )
}
