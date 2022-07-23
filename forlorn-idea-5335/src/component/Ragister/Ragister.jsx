import React from 'react'
import './Ragister.css'
import { Link } from 'react-router-dom'
export const Ragister = () => {
  return (
    <>
    <div className='ragister'>
        <div className='div1'>

            <h1>    Sign Up: Your Weight plan</h1>
            <div>

            <input style={{width:"400px",marginTop:"50px",outline:"none",borderBottom:"1px solid black"}} type="text" placeholder='How much do you weigh?' />
            </div>

            <div>

            <input style={{width:"400px",marginTop:"70px",outline:"none",borderBottom:"1px solid black",marginBottom:"50px"}} type="text" name="" id="" placeholder='What is your target weight?   '/>
</div>

    <a href=""> Switch to metric units (kg, cm)</a>


    <h5 style={{marginLeft:"-400px",marginTop:"50px"}}>your desired progress</h5>
    <div style={{marginLeft:"-400px",marginTop:"50px"}} >

    <div>

    <input type="radio" /> Lose 1 lb/week
    </div>
    <div>
    <input style={{marginLeft:"10px"}} type="radio"  />Lose 1½ lb/week

    </div>
    <div>
    <input type="radio" />
    Lose 2 lbs/week

    </div>
    </div>

                    <Link to="/sign">
                        <button>Next</button>
                        </Link>
        </div>
     
    
    
    
    </div>
    </>
  )
}
