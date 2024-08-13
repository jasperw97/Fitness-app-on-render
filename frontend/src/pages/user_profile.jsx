import Workouts from "../components/Workouts"
import { useParams } from "react-router-dom"
import { useEffect, useContext, useState } from "react"
import SearchContext from "../context/SearchProvider"
import Navbar from "../components/navbar"

export default function UserProfile () {

    const params = useParams()
    let {query, setQuery} = useContext(SearchContext)
    let [bio, setBio] = useState()


    const getProfile = async() => {
        try {
            const response = await fetch(`https://fitness-app-on-render.onrender.com/api/userinfo/${params.profileId}`)
            const data = await response.json()
            setBio(data.bio)
        } catch(error){
            alert("An Error Occurred!")
            console.log(error)
        }
    }

    useEffect(() => {
        setQuery(params.profileId)
        getProfile()
    }, [])
    return(
        <div className="relative flex flex-col items-center min-h-screen bg-slate-200">
            <Navbar></Navbar>
            <div className="w-2/3 mt-24 bg-white rounded-md">
                <div className="flex flex-col items-center p-4">
                    <i className="mb-3 text-gray-800 text-7xl bi bi-person-circle"></i>
                    <p className="mb-3 text-xl">@{params.profileId}</p>
                    <p className="font-mono font-light">{bio ? (bio) : ""}</p>
                </div>
                <hr  className="mx-1 border-2 border-gray-100 rounded-md"/>
                
                
                
            </div>
            <Workouts></Workouts>
        </div>
    )
}