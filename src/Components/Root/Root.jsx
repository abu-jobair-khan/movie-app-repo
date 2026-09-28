import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

export default function Root(){


    return <>
    
    <div className=" ">
        <div>
        <Navbar/>
    </div>

    <div>
        <Outlet/>
    </div>
      
    <div>
        <Footer/>
    </div>
    
    </div>
    
    </>
}

