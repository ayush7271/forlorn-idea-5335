import React from 'react'




    import { useState,useEffect,useRef } from 'react'

    const images = [
        "https://s3.amazonaws.com/img.mynetdiary.com/images/success-story-julie@1x.png",
        "https://img.gkbcdn.com/s3/bn/2205/1090x422-627102d02b40c930d0c34570.jpg",
        "https://img.gkbcdn.com/s3/bn/2205/1090x422-627095d62b40c92fe444d3aa.jpg",
        "https://img.gkbcdn.com/s3/bn/2205/1090x422-627097f82b40c92fe444d3ac.jpg",
        "https://img.gkbcdn.com/s3/bn/2204/1090x4221-626bc0cc2b40c92588165461.jpg",
        "https://img.gkbcdn.com/s3/bn/2204/1090x422-62593b442b40c918c04b0691.jpg"
        
      ];
      
    export const Slideshow = () => {
        const [imgInd, setImgInd] = useState(0);
        const timeoutRef = useRef(null);
      
        function resetTimeout() {
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
        }
      
        useEffect(() => {
          resetTimeout();
          timeoutRef.current = setTimeout(
            () => setImgInd((prevIndex) => (prevIndex + 1) % images.length),
            4000
          );
      
          return () => {
            resetTimeout();
          };
        }, [imgInd]);
    
            return(

                <div className='reddiv'>
                <div className='slideshow'>
               <a href='./mobile'>
                   <img src={images[imgInd]} alt={imgInd} />
                   </a> 
              <div className="slider">
                {images.map((_, ind) => (
                  <div
                    onClick={() => setImgInd(ind)}
                    className={imgInd === ind ? "active" : ""}
                  />
                ))}
              </div>
                </div>
                <div style={{height:"560px",width:"100%",background:"#0b893b"}}>
                <img src="https://s3.amazonaws.com/img.mynetdiary.com/images/logo-dark.svg" alt="ascdvfbgnhj" />
                </div>
                </div>

            )



    }





