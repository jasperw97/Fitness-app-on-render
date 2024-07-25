import { useState, useEffect, useContext } from "react";
import WorkoutComponent from "../components/WorkoutComponent";
import SearchContext from "../context/SearchProvider";


export default function Workouts(props) {
    let [workouts, setWorkouts] = useState([]) 
    let [filteredworkouts, setFilteredWorkouts] = useState([])
    let {query} = useContext(SearchContext)
    
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
        let response = await fetch(`http://127.0.0.1:8000/api/workouts`)
        let data = await response.json()
        setWorkouts(data)
    }

    return(
        <div className="flex flex-col items-center w-full pt-16 pb-24">
            {filteredworkouts.map((workout, index)=>
                    <WorkoutComponent key={index} workout={workout}></WorkoutComponent>
                   
            )}
        </div>

    );
}