import React from 'react'
import '../Home/Taketosucceed.css'
export const Taketosucceed = () => {
  return (
    <div className='taketosucceed'>
        <div className='what-it-take'>
            <p>What it takes to succeed</p>
        </div>
        <div className='find-your-diet'>
            <div className='find-your-diet-1'>
                <img style={{width:"70%",marginLeft:"60px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-Illustration-1@2x.png" alt="" />
                <p style={{fontSize:"35px",fontWeight:"bold", color:"#268fd0"}}>Find your Diet</p>
                <div className='find-out'>
                Find a diet that fits your lifestyle: Calorie Counting, Low-Carb, Keto, Vegan, Vegetarian and more.
                </div>
            </div>
            <div className='find-your-diet-2'>
            <img style={{width:"80%",marginLeft:"60px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-Illustration-2@2x.png" alt="" />
                <p style={{fontSize:"35px",fontWeight:"bold",color:"#268fd0"}}>Set Your Targets</p>
            </div>
        </div>
    </div>
  )
}
