import axios from 'axios';
import React, { useState, useEffect } from 'react'

const Photos = () => {

    
  const [data, setData] = useState([])

  

  useEffect(() => {
    const fetchData = async () =>{
        let token = "c30f065f697b060"
      try {
        const {data: response} = await axios.get('https://api.imgur.com/3/gallery/top/viral/month',  { headers: {"Authorization" : `Client-ID ${token}`} });
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      
    }

    fetchData();
  }, []);

  return (
    <div>
  
     
      <div>
        <h2>Doing stuff with data</h2>
        {data.map(item => (<span>{item.id}</span>))}
      </div>
    
    </div>
  )
}

export default Photos

