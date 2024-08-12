import { useContext, createContext } from "react";
import AuthContext from "./AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { formatDistanceToNow } from 'date-fns';

export const WorkoutContext = createContext();

export default function WorkoutComponent(props) {
  let { user, authTokens } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleDelete = async (pk) => {
    console.log(authTokens.access);
    const response = await fetch(
      `http://127.0.0.1:8000/api/delete-workout/${pk}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    if (!response.ok) {
      throw new Error("Failed to delete workout, try loggin in again!");
    } else {
      window.location.reload();
    }
  };

  const handleEdit = () => {
    localStorage.setItem("workout_id", props.workout.id);
    localStorage.setItem("old_title", props.workout.title);
    localStorage.setItem(
      "old_exercises",
      JSON.stringify(
        props.workout.exercises.map((exercise) => ({
          name: exercise.name,
          reps: exercise.reps,
          sets: exercise.sets,
          load: exercise.load,
          description: exercise.description
        }))
      )
    );
    navigate("/create");
  };

  return (
    <div className="w-2/3 pb-3 my-8 bg-white border border-gray-400 rounded-md md:w-1/3">
      <Link to={`/profile/${props.workout.user}`}><div className="flex items-center justify-between w-full p-2 py-3 bg-slate-100 rounded-t-md">
        
        {/* <i className="mx-4 text-3xl bi bi-person-circle"></i> */}
        
        <span className="mx-4 text-base text-gray-700">@{props.workout.user}</span>
        <span className="mx-4 text-sm font-light">{props.workout.title}</span>
        
      </div></Link>
      
      {props.workout.exercises.map((exercise, index) => (
        <div key={index}>
          <div className="grid justify-between grid-cols-2 m-6">
            <h1 className={`text-xl font-medium text-blue-950 ${exercise.sets != 0 ? "col-span-1" : "col-span-2"}`}>
              {exercise.name}
            </h1>
            {exercise.sets != 0 && (
              <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">
              {exercise.sets}x{exercise.reps} {exercise.load}kg
            </p>
            )}
            
            <p className="mt-2 text-sm font-extralight">
              {exercise.description}
            </p>
          </div>
          <hr className="mx-4" />
        </div>
      ))}
      {user ? (
        user.username === props.workout.user ? (
          <div className="flex justify-end mx-4 mt-4 -mb-4 space-x-2">
            <button
              onClick={handleEdit}
              className="p-1 px-2 text-sm bg-blue-200 rounded-md hover:scale-105"
            >
              <i className="bi bi-pencil"></i>
            </button>
            <button
              onClick={() => handleDelete(props.workout.id)}
              className="p-1 px-2 text-sm bg-red-200 rounded-md hover:scale-105"
            >
              <i className="bi bi-trash"></i>
            </button>
          </div>
        ) : null
      ) : null}
      <div className="flex justify-end mx-4 mt-6 text-sm font-thin text-gray-600">{formatDistanceToNow(new Date(props.workout.created), { addSuffix: true })}</div>
    </div>
  );
}
