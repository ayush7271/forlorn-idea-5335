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
                <img style={{width:"60%",marginLeft:"80px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-Illustration-1@2x.png" alt="" />
                <p style={{fontSize:"35px",fontWeight:"bold", color:"#268fd0"}}>Find your Diet</p>
                <div className='find-out'>
                Find a diet that fits your lifestyle: Calorie Counting, Low-Carb, Keto, Vegan, Vegetarian and more.
                </div>
            </div>
            <div className='find-your-diet-2'>
            <img style={{width:"60%",marginLeft:"80px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-Illustration-2@2x.png" alt="" />
                <p style={{fontSize:"35px",fontWeight:"bold",color:"#268fd0",marginTop:"40px"}}>Set Your Targets</p>
                <div className="find-out">Choose your desired weekly weight loss rate, target date, and source of calories like fat, carbs, and proteins.</div>
            </div>
        </div>

        <div className='find-your-diet'>
            <div className='find-your-diet-1'>
                <img style={{width:"60%",marginLeft:"80px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-Illustration-3@2x.png" alt="" />
                <p style={{fontSize:"35px",fontWeight:"bold", color:"#268fd0"}}>Log Your Meals & Exercise</p>
                <div className='find-out'>
                Use the App to track your food, physical activities, and nutrients. Use the barcode scanner. Log ahead of time for better planning and scheduling.
                </div>
            </div>
            <div className='find-your-diet-2'>
            <img style={{width:"60%",marginLeft:"80px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-Illustration-4@2x.png" alt="" />
                <p style={{fontSize:"35px",fontWeight:"bold",color:"#268fd0",marginTop:"40px"}}>Reach Your Goals</p>
                <div className="find-out">Monitor your daily progress, check your weight loss forecast, and receive ongoing advice and feedback. Learn more about nutrients in your diet and make better choices.</div>
            </div>
        </div>
    </div>
  )
}
