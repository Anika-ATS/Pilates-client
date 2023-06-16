// //  {
//   path:'addAclass',
//   element:<AddClass></AddClass>

// },
// {
//   path:'addAclass',
//   element:<AddClass></AddClass>
// },


// {
//   path:'MyCls',
  
//   element:<PrivateRoute> <MyClasses></MyClasses></PrivateRoute>        

// },
import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Teacher from "../Pages/Home/Teacher/Teacher";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
// import AddClass from "../Pages/InstructorClasses/AddClass";
// import MyClasses from "../Pages/InstructorClasses/MyClasses";
// import PrivateRoute from '../Routes/PrivateRoute';
import DashBoardS from "../Layout/DashBoardS";
import InsTructorDAShboard from "../Pages/Dashboard/InstructorDashboard/InsTructorDAShboard";
import NaddACls from "../Pages/Dashboard/InstructorDashboard/NaddACls";
import AdminDashBoard from "../Layout/AdminDashBoard";
import AdminClasses from "../Pages/Dashboard/AdminsDashboard/AdminClasses";
import AllCls from "../Pages/AllClasses/AllCls";
import StudentsDashboard from "../Layout/StudentsDashboard";
import MySClses from "../Pages/Dashboard/StudentsDasBoard/MySClses";
import DisplayEnrolledC from "../Pages/Dashboard/StudentsDasBoard/DisplayEnrolledC";


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
          path:'/Approved',
          element:<AllCls></AllCls>

      },
        {
          path:'/instructors',
          element:<Teacher></Teacher>

        },
        {
          path:'/login',
          element:<Login></Login>

        },
        {
          path:'register',
          element:<Register></Register>

        }
        
       
      
      ]
    },
    
    //admin panel
    {
      path: "/dashboard2",
      element:<AdminDashBoard></AdminDashBoard>,
      children:[
        {
           path:'adminCls',
           element:<AdminClasses></AdminClasses>
        }
      
      ]
    },
    //Instrustor panel
    {
      path: "/dashboard",
      element:<DashBoardS></DashBoardS>,
      children:[
        {
           path:'instructorD',
           element:<InsTructorDAShboard></InsTructorDAShboard>
        },
        {
          path:'NAddaClass',
          element:<NaddACls></NaddACls>
        }
        
       
        
       
      
      ]
    },
    //students panel
    {
      path: "/dashboard3",
      element:<StudentsDashboard></StudentsDashboard>,
      children:[
        {
           path:'StudentsCart',
           element:<MySClses></MySClses>
        },
        {
          path:'StudentsShowCart',
          element:<DisplayEnrolledC></DisplayEnrolledC>
        }

      
      ]
    },





  ]);