import React from 'react'
import './Home.css'
export const Home = () => {
  return (
    
        <div className='fronttitle'>
            <div className='fronting1'>
              <img style={{marginTop:"150px",width:"15%" ,marginLeft:"20px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-left@1x.png" alt="" />
                
                <div className='fronttitle1_box'>
                  <div>
                    <p style={{fontSize:"75px",color:"white",fontWeight:"bold"}}>Be Healthy For Life!</p>
                    <p style={{fontSize:"25px",fontWeight:"bold",marginTop:"-10px",color:"#ecde5b"}}>Your weight loss, diet, and
nutrition assistant.</p>
                  </div>
                  <div style={{display:"flex",width:"100%",height:"80px",marginLeft:"-50px",gap:"20px"}}>
                        <img style={{width:"50%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/app-store-badge.svg" alt="" />
                        <img style={{width:"50%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/google-play-badge.svg" alt="" />
                  </div>
                </div>


            </div>
            <div className='fronting'>
              <img className='frontingimg1' src="https://s3.amazonaws.com/img.mynetdiary.com/images/iphonex@1x.png" alt="" />
              <img className='frontingimg2' src="https://s3.amazonaws.com/img.mynetdiary.com/images/iwatch@1x.png" alt="" />  
              <img className='frontingimg3' src="https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-right@1x.png" alt="" />
            </div>

        </div>
  
  )
}
