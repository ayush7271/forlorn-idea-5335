import React from 'react'
import './Home.css'
export const Home = () => {
  return (
    <>
        <div className='fronttitle'>
            <div className='fronting1'>
              <img style={{marginTop:"70px",width:"15%" ,marginLeft:"20px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/bg-start-left@1x.png" alt="" />
                
                <div className='fronttitle1_box'>
                  <div>
                    <p style={{fontSize:"60px",color:"white",fontWeight:"bold"}}>Be Healthy For Life!</p>
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
            
            <div className='toprating'>
              <h1>Top Rated: 61,383 reviews & counting</h1>

              <div style={{display:"flex"}}>

              <div className='applerating'>
                <img style={{width:"14%"}} src="https://cdn-icons-png.flaticon.com/128/270/270781.png" alt="" />
                <img style={{width:"10%",marginLeft:"10px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                <img style={{width:"10%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                <img style={{width:"10%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                <img style={{width:"10%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                <img style={{width:"10%",marginRight:"10px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-4.7.png" alt="" />
                <h1>4.8</h1>
                 </div>
              <div className='androidrating'>
              <img style={{width:"14%"}} src="https://cdn-icons-png.flaticon.com/128/888/888839.png" alt="" />
                <img style={{width:"10%",marginLeft:"10px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                <img style={{width:"10%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                <img style={{width:"10%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                <img style={{width:"10%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-full.png" alt="" />
                <img style={{width:"10%",marginRight:"10px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/rating-star-4.7.png" alt="" />
                <h1>4.6</h1>
              </div>
              </div>


               </div>
              <div className='womenhealth'>
                <p style={{marginTop:"150px"}}>“You really can't go wrong with MyNetDiary</p>
                <p style={{marginLeft:"0px"}}>as a scientifically-proven way to help you lose weight”</p>
                <p style={{fontSize:"50px",color:"red"}}>Women's Health</p>


              </div>
                <div className='hidebox'>

              <div className='usatoday'>
                <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-usa-today.png" alt="" />
              </div>
              <div className='abcnews'>
                <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-abc-news.svg" alt="" />
              </div>
              <div className='fox'>
                <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-fox.svg" alt="" />
              </div>
              <div className='t'>
                <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-times.svg" alt="" />
              </div>
              <div className='cr'>
                <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-consumer-reports.svg" alt="" />
              </div>
              <div className='wsj'>
                <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-wsj.svg" alt="" />
              </div>
              <div className='ct'>
                <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-chicago-tribune.svg" alt="" />
              </div>
                </div>
               


    </>



  )
}
