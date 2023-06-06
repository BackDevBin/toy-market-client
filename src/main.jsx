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
import AuthProvider from './component/AuthProvider/AuthProvider.jsx';
import PrivateRoute from './component/PrivateRoute/PrivateRoute.jsx';
import MyToy from './component/Pages/MyToy/MyToy.jsx';

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
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/toys/${params.id}`)

      },
      {
        path: "/add",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {
        path: "/mytoy",
        element: <PrivateRoute><MyToy></MyToy></PrivateRoute>,
        loader: () => fetch("http://localhost:5000/toys")
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
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider> 
    </AuthProvider>
   </React.StrictMode>

)
