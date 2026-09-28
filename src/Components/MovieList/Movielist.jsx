import { useEffect, useState } from "react"

export default function Movielist(){


  const [loader, setLoader] = useState(true)


  useEffect( ()=>  {

    const timer = setTimeout( () => {
        setLoader(false);
    },2000);

    return () => clearTimeout(timer);




  }, []);

















    return <>
    
    
    {
        loader ?  <span className="loading loading-spinner loading-xl"></span> : <p>done </p>

    }
    
    </>
}