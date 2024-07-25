import Workouts from "../components/Workouts"
import { useParams } from "react-router-dom"
import { useEffect, useContext, useState } from "react"
import SearchContext from "../context/SearchProvider"

export default function UserProfile () {

    const params = useParams()
    let {query, setQuery} = useContext(SearchContext)
    let [bio, setBio] = useState()


    const getProfile = async() => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/api/userinfo/${params.profileId}`)
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
        <div className="flex flex-col items-center justify-center">
            
            <div className="w-1/3  mt-8 bg-[#DAF17F] flex flex-col items-center rounded-lg">
                <div className="bg-[#D9D9D9] w-full h-1/3 flex flex-col items-center rounded-t-lg">
                <div className="bg-[#F3F3F3] size-12 rounded-full mt-4"></div>
                <h1 className="my-4 text-xl font-extralight tracking-wider text-stone-700">@{params.profileId}</h1>
                </div>

                <div className="w-full">
                {bio ? (
                    <h1 className="text-start my-4 mx-6 font-mono">{bio}</h1>
                ) : (
                    <h1 className="text-start my-4 mx-6 font-mono">This user currently doesn't have a bio</h1>
                )}
                
                </div>
                
            
            </div>
            
            <Workouts></Workouts>
        </div>
    )
}