import Navbar from "../components/navbar"
import gym from "../assets/gym.jpg"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"

export default function Guides() {
    return(
        <div className="relative">
            <Navbar></Navbar>
            {/* The image and intro */}
            <div className="relative flex items-center w-screen h-screen bg-white">
                <div className="w-1/2">
                <img src={gym} className="scale-75 rounded-lg drop-shadow-md"  />
                </div>
                <div className="w-1/2 pl-6 pr-20">
                <h1 className="text-6xl font-medium text-gray-700">Working Out isn't <span className="">Difficult!</span></h1>
                <p className="w-5/6 mt-6 text-xl leading-relaxed font-extralight">Here, you can find guides on fitness knowledges 
                    for all levels. These 
                    guides will help you through your fitness journey! 
                </p>
                </div>
            </div>
            
            {/* List of Articles */}
            <div className="flex flex-col items-center w-screen min-h-screen bg-white">
                <h1 className="mt-12 text-6xl font-light tracking-wide text-gray-700">Guides</h1>
                <hr className="w-64 mt-3 border-4 border-gray-300"/>
                {/* List Component */}
                <Link to={"/starter"} className="flex justify-center w-full">
                <div className="flex items-center justify-between w-3/5 px-6 py-8 mt-10 transition bg-gray-100 rounded-xl hover:scale-110 active:bg-gray-200">
                    <h1 className="w-1/2 text-3xl tracking-wide text-gray-800 font-extralight">Creating a Workout Routine</h1>
                    <div className="flex space-x-2">
                        <div className="p-2 font-light text-gray-800 bg-blue-100 rounded-lg">Beginner</div>
                        <div className="p-2 font-light text-gray-800 bg-white rounded-lg">Gym</div>
                        
                    </div>
                </div>
                </Link>
                
                

                
            </div>
            
            
            
        </div>
    )
}