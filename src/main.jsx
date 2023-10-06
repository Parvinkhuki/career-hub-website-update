import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Jobs from './Components/Jobs';
import Applied from './Applied';
import Statistics from './Statistics';
import Blogs from './Blogs';
import HomePage from './Components/HomePage';
import DetailsShow from './Components/DetailsShow';
import ErrorPage from './ErrorPage';
import Login from './Components/Login';
import Register from './Components/Register';
import Authprovider from './Components/Authprovider';
import PrivateRoute from './Components/PrivateRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
     { path: "/",
      element: <HomePage></HomePage>
    },
      {
        path: "/jobs",
    element: <Jobs></Jobs>
      },
      {
        path:"/applied",
    element: <PrivateRoute><Applied></Applied></PrivateRoute>,
    loader:() => fetch('/jobs.json')
      },
      {
        path:"/statistics",
    element: <Statistics></Statistics>
      },
      {
        path:"/blogs",
    element: <Blogs></Blogs>
      },
      {
        path:"/details/:id",
    element: <PrivateRoute><DetailsShow></DetailsShow></PrivateRoute>,
    loader:() => fetch('/jobs.json')
      },
      {
        path: '/login',
        element:<Login></Login>
      },
      {
        path: '/register',
        element:<Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Authprovider>
     <RouterProvider router={router} />
     </Authprovider>
  </React.StrictMode>,
)
