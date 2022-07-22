import React from 'react'
import '../footer/Footer.css'

export const Footer = () => {
  return (
    <div>

    <div className='footer'>
            <div className='mynet'>

                <div className='flogo'>
                    <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-dark.svg" alt="" />
                </div>
                <div className='download'>
                    <img style={{width:"45%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/app-store-badge.svg" alt="" />
                    <img style={{width:"45%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/google-play-badge.svg" alt="" />
                </div>
                <div className='rating'>
                    <div style={{display:"flex"}}>

                    <img style={{width:"25px",height:"20px",marginTop:"5px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                    <img style={{width:"25px",height:"20px",marginTop:"5px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                    <img style={{width:"25px",height:"20px",marginTop:"5px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                    <img style={{width:"25px",height:"20px",marginTop:"5px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                    <img style={{width:"25px",height:"20px",marginTop:"5px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-4.7.png" alt="" />
                   
                    <h1 style={{fontSize:"20px",color:"grey",marginLeft:"5px",marginTop:"-.5px"}}>4.8</h1>
                    
                        <li style={{fontSize:"18px",marginTop:"2px",marginLeft:"20px"}}> 61,383 Ratings</li>
                    
                    </div>
                </div>
                <div className='socialmedia'>
                    <div className='insta'>
                        <img style={{width:"100%"}} src="https://cdn-icons-png.flaticon.com/128/1362/1362857.png" alt="" />
                    </div>
                    <div className='facebook'>
                        <img  style={{width:"100%"}} src="https://cdn-icons-png.flaticon.com/128/4406/4406234.png" alt="" />
                    </div>
                    <div className='twit'>
                        <img  style={{width:"100%"}} src="https://cdn-icons.flaticon.com/png/128/4628/premium/4628695.png?token=exp=1658367720~hmac=f29c34d62f183d35d52bde5cd5a9aee6" alt="" />
                    </div>
                    <div className='youtube'>
                        <img  style={{width:"100%"}} src="https://cdn-icons.flaticon.com/png/128/4628/premium/4628711.png?token=exp=1658367751~hmac=fc6548f588a3ade2388b4d9c9cf14a69" alt="" />
                    </div>
                    <div className='pin'>
                        <img  style={{width:"100%"}} src="https://cdn-icons.flaticon.com/png/128/665/premium/665213.png?token=exp=1658367786~hmac=f51b8a2450c1aea303cf5dd0f426ae2a" alt="" />
                    </div>
                </div>



            </div>
            <div className='APPFEATURES'>
                <h1>APP FEATURES</h1>
                <ul>
                    <li><a href="#">iPhone & iPad app</a></li>
                    <li><a href="#">Android app</a></li>
                    <li><a href='#'> Keto Diet</a></li>
                    <li><a href="#">Low-Carb Diet</a></li>
                    <li><a href="#">Premium Calorie Counting</a></li>
                    <li><a href="#">MyNetDiary vs MyFitnessPal</a></li>
                </ul>
            </div>
            <div className='WEIGHTLOSSSCIENCE'>
                <h1>WEIGHT LOSS SCIENCE</h1>
                <ul>
                <li><a href="#">Weight Loss Blog</a></li>
                    <li><a href="#">Diet Library</a></li>
                    <li><a href='#'>Dietitian Team</a></li>
                </ul>
            </div>
            <div className='BUSINESS'>
            <h1>BUSINESS</h1>
                <ul>
                <li><a href="#">Gift cards & Group discounts</a></li>
                    <li><a href="#">For trainers</a></li>
                    <li><a href='#'> For healthcare professionals</a></li>
                    <li><a href="#">For families</a></li>
                    <li><a href="#">Food database licensing</a></li>



                </ul>
                
                 </div>
            <div className='COMPANY'>
                    <h1>COMPANY</h1>
                    <ul>
                    <li><a href="#">About MyNetDiary</a></li>
                    <li><a href="#">In the News</a></li>
                    <li><a href='#'> Press Releases</a></li>
                    <li><a href="#">Press Kit</a></li>
    



                    </ul>


            </div>
    </div>
    <div className='foot'>
        <div className='copyright'>
            <p>Copyright © 2022 MyNetDiary Inc. All rights reserved.</p>
        </div>
        <div className='contact'>
            <a href="#">Contact Us |</a><a href="#">FAQ |</a><a href="#">Privacy |</a><a href="#">Terms of Use</a>
        </div>
    </div>
    </div>
    
  )
}
