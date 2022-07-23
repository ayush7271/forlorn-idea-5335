import React, { useState, useEffect } from "react";

import axios from "axios";

import '../Food/Food.css'
 export const Food=()=> {

     const [posts, setPosts] = useState([]);
     const [searchTitle, setSearchTitle] = useState("");
     const [loading, setLoading] = useState(false);



  useEffect(() => {

    const getdata= async () => {
      setLoading(true);
      const res= await axios.get(
        "http://localhost:8000/posts"
      );

      setPosts(res.data);

      setLoading(false);
    };

    getdata();
  }, []);

  return (
    <div>
    <div >
      <h2>Search Food</h2>
      <div className="searchfood">
        <p>
        The most complete, accurate and up-to-date nutrition database in the English-speaking world. There are total 1,215,000 foods in the catalog. We add and verify about 900 foods every day. Type food or vendor name to see instant results.

E.g. Starbucks, McDonald's, apple or whole milk:
        </p>
      <input

style={{ width: "30%", height: "25px" }}
type="text"
placeholder="Search food"
onChange={(e) => setSearchTitle(e.target.value)}
/>
</div>
      {loading ? (

        <h4>Loading ...</h4>
      ) : (
        posts

          .filter((value) => {

            if (searchTitle === "") {

            } else if (
              value.title.toLowerCase().includes(searchTitle.toLowerCase())
              ) {
                  return value;
            }
          })

          .map((item) => 

          <div style={{display:"flex", justifyContent:"space-around", width:"50%",height:"50px",border:"1px solid black", background:"white",margin:"auto", marginBottom:"10px"}}>
              <div className="fooddiv1">
                <img style={{width:"100% "}} src={item.img} alt="" />
            </div>
            <div className="fooddiv2">
                <div style={{width:"100%",height:"50%",marginTop:"-19px"}}>
                    <h5 key={item.id}>{item.title}</h5>

                </div>
                <div style={{width:"100%",height:"50%",display:"flex",marginTop:"-20px"}}>
                    <p style={{marginRight:"10px"}}> carbs{item.carbs}</p>
                    <p style={{marginRight:"10px"}}> fat {item.fat}</p>
                    <p style={{marginRight:"10px"}}> protein{item.protein}</p>
                </div>

            </div>
            <div className="fooddiv3">

          <p>{item.calories}</p>
            </div>


          </div>
          
          
          )
          )}
    </div>

    <div className="apple">
        <img style={{width:"25%",marginLeft:"55%"}} src="https://s3.amazonaws.com/img.mynetdiary.com/images/food_search_empty-image_@2x.png" alt="" />
            <h1 style={{marginLeft:"55%", color:"#a1b5c5"}} >
                Food Analysis
                </h1>
                <div style={{width:"250px",marginLeft:"55%",color:"#a1b5c5"}}>

            <p style={{textAligh:"center"}}>
Find and analyze food you eat, get %Daily Value,
macronutrients and micronutrients.
            </p>
                </div>
    </div>
           </div>
  );
}
