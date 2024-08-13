import { useState, useEffect, useContext } from "react";
import WorkoutComponent from "../components/WorkoutComponent";
import SearchContext from "../context/SearchProvider";
import CardSkeleton from "./CardSkeleton";

export default function Workouts(props) {
    let [workouts, setWorkouts] = useState([]) 
    let [filteredworkouts, setFilteredWorkouts] = useState([])
    let {query} = useContext(SearchContext)
    let [loading, setLoading] = useState(false)
    
    const filterWorkouts = () => {
        if (query !== "") {
            const filtered = workouts.filter(workout => {
                return(workout.user.includes(query)||workout.title.toLowerCase().includes(query))
            });
            setFilteredWorkouts(filtered);
        } else {
            setFilteredWorkouts(workouts); // Reset to original workouts if query is empty
        }
    };

    useEffect(() => {
        getWorkouts()
    }, [])

    useEffect(() => {
        filterWorkouts(); // Initial filter
    
    }, [query, workouts]);

    

    async function getWorkouts() {
        setLoading(true)
        let response = await fetch(`https://fitness-app-on-render.onrender.com/api/workouts`)
        let data = await response.json()
        console.log(data)
        setWorkouts(data)
        setLoading(false)
    }

    return(
        <div className="flex flex-col items-center w-full pt-16 pb-24">
            {loading && (
                <CardSkeleton cards={4}></CardSkeleton>
                )}
            
            {filteredworkouts.map((workout, index)=>
                    <WorkoutComponent key={index} workout={workout}></WorkoutComponent>     
            )}
        </div>

    );
}