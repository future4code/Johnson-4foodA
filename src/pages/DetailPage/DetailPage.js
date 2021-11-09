import axios from "axios";
import { useEffect } from "react";
import React from "react"
import CardRestaurantDetails from "../../Components/CardRestaurantDetails/CardRestaurantDetails";
import CardItem from "../../Components/CardRestaurantDetails/CardItem";


export const DetailPage = () => {
  
  useEffect(() => {
    const token = localStorage.getItem("token")
   axios.get("https://us-central1-missao-newton.cloudfunctions.net/fourFoodA/restaurants/CnKdjU6CyKakQDGHzNln", {
      headers:{
        auth: token

        
      }
   })
    .then((response)=>{
      console.log(response.data.token)
      localStorage.setItem("token", response.data.token)
    })
    .catch((erro)=>{
      console.log("Deu erro", erro.response)
    })
  }, [])

  return(
    <div>
      <CardRestaurantDetails/>
      <CardItem/>
      </div>
  )
}

