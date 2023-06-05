import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Login from './component/Pages/Login/Login.jsx';
import Home from './component/Pages/Home/Home.jsx';
import Register from './component/Pages/Register/Register.jsx';
import ErrorPage from './component/Pages/ErrorPage/ErrorPage.jsx';
import Blog from './component/Pages/Blog/Blog.jsx';
import AllToys from './component/Pages/AllToys/AllToys.jsx';
import ToyDetails from './component/Pages/ToyDetails/ToyDetails.jsx';
import AddToy from './component/Pages/AddToy/AddToy.jsx';

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
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/toys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/details/:id",
        element: <ToyDetails></ToyDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)

      },
      {
        path: "/add",
        element: <AddToy></AddToy>,
      }
      
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
   </React.StrictMode>

)
