import React from 'react'
import axios from '../utils/axios'
import { useEffect } from 'react'

const Home = () => {


  const fetchdata = async()=>{
    try {
      const {data}= await axios.get("/products/1");
      console.log(data);
    } catch (error) {
      console.log(error);
      
      
    }
  }



useEffect(() => {
    console.log("Home component mounted");


    return () => {    
        console.log("Home component unmounted");
    }
}, )

  return (
    <div>
      <h1 className='text-5xl font-black'>Home</h1>
      <button onClick={fetchdata} className='bg-blue-500 text-white px-4 py-2 rounded'>Fetch Data</button>
    </div>
  )
}

export default Home
