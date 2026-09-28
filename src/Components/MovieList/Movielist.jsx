import { useEffect, useState } from "react"
import Card from "../Cards/Card"

export default function Movielist(){


  
  const [data , setdata] = useState([])
  const [error , setError] = useState("")

    useEffect( ()=> {
      const fetchData = async() => {
        try{
          
          const res = await fetch("https://api.tvmaze.com/shows");
          // console.log(res)
          const result = await res.json();
          // console.log(result)
          setdata(result)
        } catch(err) {
          console.log(err.message)
        } finally {
        
        }
      } ;

      fetchData();


    },[])

    console.log(data)

    

    return <>

  <div className=" ml-[3vw] mt-[5vh] grid grid-cols-4 gap-4">
    {
      data.map( (x)=>  <Card   props={x}/> )
    }
  
  </div>  
    
  
    
    </>
}