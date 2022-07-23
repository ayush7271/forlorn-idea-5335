import React from 'react'
import './Premium.css'
export const Premium = () => {
  return (
    <div>
        <div className='container'>
        <div className='all-picture-div'>
                <div className='all-picture-div-1'>
                    <div className='all-picture-div-1-image'>
                        <img style={{width:"100%",height:"100%",borderRadius:"30px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/keto/cover-premium-keto-recipes@2x.jpg" alt="" />
                    </div>
                    <div className='all-picture-div-1-discription'>
                        <div className='all-picture-div-1-discription-title'>
                            <h1>
                            Premium Recipes
                            </h1>
                        </div>
                        <div className='all-picture-div-1-discription-para'>
                                <h1>Hundreds of easy recipes, with great variety, carefully crafted for great taste by a team of Registered Dietitians.</h1>
                        </div>
                    </div>
                </div>


                <div className='all-picture-div-2'>
                <div className='all-picture-div-2-image'>
                <img style={{width:"100%",height:"100%",borderRadius:"30px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-easy-tracking-premium@2x.png" alt="" />
                </div>
                <div className='all-picture-div-1-discription'>
                <div className='all-picture-div-1-discription-title'>
                    <h1>Easy
Tracking</h1>
                </div>
                        <div className='all-picture-div-1-discription-para'>
                        Massive food catalog, fastest barcode scanner, quickest food lookup making food tracking a breeze
                        </div>
                </div>
                </div>


                <div className='all-picture-div-3'>
                <div className='all-picture-div-3-image'>
                <img style={{width:"100%",height:"100%",borderRadius:"30px"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/cover-insights-and-guidance-keto@2x.png" alt="" />
                </div>
                <div className='all-picture-div-1-discription'>
                <div className='all-picture-div-1-discription-title'>
                    <h1>Insights and
Guidance</h1>
                </div>
                        <div className='all-picture-div-1-discription-para'>
                        Encouraging and supportive feedback, guiding you to your goal.
                        </div>
                </div>
                </div>
            
            </div>

              <div className='more'>
                <button className='morefeature'>MORE FEATURES</button>
             </div>
       
        </div> 
    </div>
  )
}
