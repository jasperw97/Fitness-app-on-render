import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/home';
import CreateWorkout from './pages/create_workout';
import Login from './pages/Login';
import { AuthProvider } from './components/AuthProvider';
import Register from './pages/register';
import UserProfile from './pages/user_profile';
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import { SearchProvider } from './context/SearchProvider';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/create",
    element: <CreateWorkout></CreateWorkout>
  },
  {
    path: "/login",
    element: <Login></Login>
  },
  {
    path:"/register",
    element: <Register></Register>
  },
  {
    path:"/profile/:profileId",
    element: <UserProfile></UserProfile>
  }
  

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <SearchProvider>
   <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
   </SearchProvider>
    

    
  </React.StrictMode>,
)
