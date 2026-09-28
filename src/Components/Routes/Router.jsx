import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import Movielist from "../MovieList/Movielist";



export const Router = createBrowserRouter([

    {
        path:"/",
        element:<Root/>,
        children: [
            {
                path:"/",
                element:<Home/> ,
            },
            {
                path:"/list",
                element:<Movielist/>
            },
        ],

    },
    
]);

