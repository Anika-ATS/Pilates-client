
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Teacher from "../Pages/Home/Teacher/Teacher";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element:<Home></Home>

        },
        {
          path:'/instructors',
          element:<Teacher></Teacher>

      },
    
      
      ]
    },
  ]);