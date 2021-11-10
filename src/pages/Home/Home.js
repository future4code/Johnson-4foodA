import React, {useEffect, useState} from "react";
import axios from "axios";


const Home = () =>{
    useEffect(()=>{
     
        axios.get("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants", {
            headers:{
                auth:localStorage.getItem("token")
            }
        })
        .then((response)=>{
            console.log(response.data.restaurants)
        })
        .catch((err)=>{
            console.log(err)
        })
    },[])


    return(
        <div>
            <h1>HomePage</h1>
        </div>
    )
}

export default Home;