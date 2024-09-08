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
import Guides from './pages/guides_home';
import StarterGuide from './pages/guides/starter';
import About from './pages/about';
import './utils/i18n';
import WorkoutSchedule from './pages/guides/workout_schedule';
import LowerHomeWorkout from './pages/guides/lower_home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <About></About>,
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
  },
  {
    path:"/guides",
    element: <Guides></Guides>
  },
  {
    path:"/starter",
    element: <StarterGuide></StarterGuide>
  },
  {
    path:"/workouts",
    element: <Home></Home>
  },
  {
    path:"/guide2",
    element: <WorkoutSchedule></WorkoutSchedule>
  },
  {
    path:"/guide3",
    element: <LowerHomeWorkout></LowerHomeWorkout>
  },

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
