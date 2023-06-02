import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './component/Pages/Login/Login.jsx';
import Home from './component/Pages/Home/Home.jsx';
import Register from './component/Pages/Register/Register.jsx';
import ErrorPage from './component/Pages/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  }
  
  
]);


ReactDOM.createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
    <RouterProvider router={router}></RouterProvider> 
   </React.StrictMode>,

)
