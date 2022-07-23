import React from 'react'
import {Link, Navigate} from 'react-router-dom'
import { useState } from 'react'
import './Navbar.css'



export const Navbar = () => {
  // const [state,setstate]=useState(false)
  const register=()=>{
    <Navigate to="/ragistration"/>
    console.log("as")
  }


  // a.onmouseover={onOpen}
  const abc=()=>{
  
   
    
      let a=document.getElementById("features").style.display="block"

  }
  const ab=()=>{
    
    let a=document.getElementById("features").style.display="none"
    
  }

  const dietenter=()=>{
    
    let a=document.getElementById("Diet").style.display="block"
    
  
  }
  const dietleave=()=>{
    
    let a=document.getElementById("Diet").style.display="none"
    
  }
  const librarytenter=()=>{
    
    let a=document.getElementById("library").style.display="block"
    
  
  }
  const libraryleave=()=>{
    
    let a=document.getElementById("library").style.display="none"
    
  }
  const foodenter=()=>{
    
    let a=document.getElementById("food").style.display="block"
    
  
  }
  const foodleave=()=>{
    
    let a=document.getElementById("food").style.display="none"
    
  }
  const businessenter=()=>{
    
    let a=document.getElementById("business").style.display="block"
    
  
  }
  const businessleave=()=>{
    
    let a=document.getElementById("business").style.display="none"
    
  }
  
  

    
  return (
    <>
<div className='navbar'> 
<div className='logo'>
  <Link to="/">
  <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-dark.svg" alt="" />
  </Link> 
</div>






<div className='right-menu'>
<div className='menu'>
  <div onMouseOver={abc}  onMouseLeave={ab}>Features 
  <div id="features">
       <ul>
        <li>Iphone & ipad app</li>
        <li>Android app</li>
        <li>User Reviews</li>
        <li>MyNetDairy vs MyFitnessPal</li>
       </ul>
    </div>
  
  </div>
   
 

  
  
  </div>
<div className='diet' onMouseEnter={dietenter} onMouseLeave={dietleave} >Diets
<div id="Diet" >
       <ul>
        <li>Calorie Counting</li>
        <li>Low-Carb</li>
        <li>Keto</li>
        <li>Hign-Protein</li>
        <li>Low-Fat</li>
        <li>Mediterranean</li>
        <li>Vegetarian</li>
        <li>Vegan</li>
       </ul>
    </div>
</div>
<div className='library' onMouseEnter={librarytenter} onMouseLeave={libraryleave}>Library
<div id="library" >
       <ul>
        <li>Weight Loss Blog</li>
        <li>Diet Library</li>
        <li>Dietitian team</li>
        
       </ul>
    </div>





</div>
<div className='food' onMouseEnter={foodenter} onMouseLeave={foodleave}>Food
<div id="food" >
       <ul>
        <li>Food Search</li>
        <li>Database Licensing & API</li>
     
        
       </ul>
    </div>    


</div>
<div className='business' onMouseEnter={businessenter} onMouseLeave={businessleave}>Business
<div id="business" >
       <ul>
        <li>Find Health Professionals</li>
        <li>For Healthcare Professionals</li>
        <li>For Trainers and Clubs</li>
        <li>MyNetDairy vs MyFitenssPal</li>
        <li>Food Database Licensing</li>
     
        
       </ul>
    </div> 



</div>


</div>
<div className='lbutton'>
   <Link to='/signup'>
    <button style={{background:"orange",height:"50px",width:"120px",borderRadius:"30px",border:"2px solid orange" }}>SIGN UP</button>
    </Link> 

    <Link to="/login">

    <button style={{background:"#109844",height:"50px",width:"120px",borderRadius:"30px",border:"2px solid green" }}>SIGN IN</button>
    </Link>
</div>



</div>

    </>
          
    
  )
}
