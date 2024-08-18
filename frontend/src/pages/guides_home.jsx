import Navbar from "../components/navbar"
import gym from "../assets/gym.jpg"
import { Link } from "react-router-dom"
import Skeleton from "react-loading-skeleton"
import { useTranslation } from "react-i18next"

export default function Guides() {

    const {t} = useTranslation()
    return(
        <div className="relative">
            <Navbar></Navbar>
            {/* The image and intro */}
            <div className="flex flex-col items-center w-screen min-h-screen bg-white md:flex-row">
                <div className="w-full mx-4 mt-24 md:w-1/2 md:-mt-0">
                <img src={gym} className="scale-75 rounded-lg drop-shadow-md"  />
                </div>
                <div className="w-full md:w-1/2 md:pl-6 md:pr-20">
                <h1 className="text-3xl font-medium text-center text-gray-700 md:text-start md:text-6xl">{t("guideintro")}</h1>
                <p className="mx-4 mt-6 text-base leading-relaxed md:mx-0 md:text-xl md:w-5/6 font-extralight">
                {t("guideintrop")}
                </p>
                </div>
            </div>
            
            {/* List of Articles */}
            <div className="flex flex-col items-center w-screen min-h-screen bg-white">
                <h1 className="mt-12 text-3xl font-light tracking-wide text-gray-700 md:text-6xl">{t("guides")}</h1>
                <hr className="w-64 mt-3 border-4 border-gray-300"/>
                {/* List Component */}
                <Link to={"/starter"} className="flex justify-center w-full">
                <div className="flex items-center justify-between w-full px-3 py-4 mx-4 mt-10 transition bg-gray-100 md:px-6 md:py-8 md:mx-0 md:w-3/5 rounded-xl hover:scale-105 active:bg-gray-200">
                    <h1 className="w-1/2 text-lg tracking-wide text-gray-800 md:text-2xl font-extralight">Getting Started</h1>
                    <div className="flex justify-end w-1/2 space-x-2">
                        <div className="p-2 text-xs font-light text-gray-800 bg-blue-100 rounded-lg md:text-base">Beginner</div>
                        <div className="p-2 text-xs font-light text-gray-800 bg-white rounded-lg md:text-base">Gym</div> 
                    </div>
                </div>
                </Link>

                <Link to={"/guide2"} className="flex justify-center w-full">
                <div className="flex items-center justify-between w-full px-3 py-4 mx-4 mt-10 transition bg-gray-100 md:px-6 md:py-8 md:mx-0 md:w-3/5 rounded-xl hover:scale-105 active:bg-gray-200">
                    <h1 className="w-1/2 text-lg tracking-wide text-gray-800 md:text-2xl font-extralight">Creating your Workout Schedule</h1>
                    <div className="flex justify-end w-1/2 space-x-2">
                        <div className="p-2 text-xs font-light text-gray-800 bg-green-100 rounded-lg md:text-base">All Levels</div>
                        <div className="p-2 text-xs font-light text-gray-800 bg-white rounded-lg md:text-base">Gym</div>  
                    </div>
                </div>
                </Link>
                
                

                
            </div>
            
            
            
        </div>
    )
}