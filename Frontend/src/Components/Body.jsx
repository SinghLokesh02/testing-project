import React, { useEffect } from 'react'
import axios from 'axios'

const Body = () => {
    useEffect(()=>{
        fetchCardData();
    },[])

    const fetchCardData = async () => {
        try {
            const response = await axios.get("https://testing-project-9g3u.onrender.com/card/getcards");
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }
  return (
    <div>
      
    </div>
  )
}

export default Body
