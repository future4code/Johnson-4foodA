import axios from "axios";
import { useEffect } from "react";

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
      <h1>Detalhes</h1>
      </div>
  )
}

