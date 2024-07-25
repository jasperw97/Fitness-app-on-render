import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../components/AuthProvider";
import cancel from "../assets/x-circle.svg";

export default function CreateWorkout() {
  let old_exercises = JSON.parse(localStorage.getItem("old_exercises"));
  let old_title = localStorage.getItem("old_title");
  let workout_id = localStorage.getItem("workout_id");
  let [exercises, setExercises] = useState(
    old_exercises ? old_exercises : [{ name: "", sets: 0, reps: 0, load: 0.0 }]
  );
  let [title, setTitle] = useState(old_title ? old_title : "");
  let navigate = useNavigate();
  let { user, authTokens } = useContext(AuthContext);

  const handleExerciseChange = (i, event) => {
    const { name, value } = event.target;
    const temp = [...exercises];
    temp[i][name] = value;
    setExercises(temp);
  };

  const handleTitlechange = (event) => {
    const val = event.target.value;
    setTitle(val);
  };

  const handleAddField = () => {
    const temp = [...exercises];
    temp.push({ name: "", sets: 0, reps: 0, load: 0.0 });
    setExercises(temp);
  };

  const handleRemoveField = (i) => {
    const temp = [...exercises];
    temp.splice(i, 1);
    setExercises(temp);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (workout_id) {
      await fetch("http://127.0.0.1:8000/api/update-workout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          title: title,
          exercises: exercises,
          user: user.username,
          id: workout_id,
        }),
      });
      localStorage.removeItem("old_title");
      localStorage.removeItem("old_exercises");
      localStorage.removeItem("workout_id");
      navigate("/");
    } else {
      await fetch("http://127.0.0.1:8000/api/create-workout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: title,
          exercises: exercises,
          user: user.username,
        }),
      });
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-200">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-5/6 px-16 py-4 overflow-auto bg-white rounded-sm md:w-1/2 h-5/6 flex-nowrap"
      >
        {/* Workout Title */}
        <div className="my-6">
          <label
            htmlFor="title"
            className="block mb-2 text-3xl font-bold text-gray-600"
          >
            Workout Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => handleTitlechange(e)}
            className="p-2 font-light transition rounded-md outline-none bg-slate-100 focus:border focus:border-slate-400"
          />
        </div>
        <hr className="mb-4" />
        {/* Exercise name,,, sets, reps, load */}
        {exercises.map((exercise, index) => (
          <div key={index}>
            <div className="flex items-center mb-2">
              <div className="mr-6">
                <label
                  htmlFor="name"
                  className="block mb-2 text-xl font-medium text-gray-600"
                >
                  Exercise Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={exercise.name}
                  onChange={(e) => handleExerciseChange(index, e)}
                  className="p-2 text-sm font-light transition rounded-md outline-none bg-slate-100 focus:border focus:border-slate-400"
                />
              </div>
              <div className="mx-6">
                <label
                  htmlFor="sets"
                  className="block mb-2 text-xl font-medium text-gray-600"
                >
                  Sets
                </label>
                <input
                  type="number"
                  id="sets"
                  name="sets"
                  value={exercise.sets}
                  onChange={(e) => handleExerciseChange(index, e)}
                  className="w-12 p-2 font-light transition rounded-full outline-none bg-slate-100 focus:border focus:border-slate-400"
                />
              </div>
              <h1 className="mt-[34px] font-extralight text-sm">X</h1>
              <div className="mx-6">
                <label
                  htmlFor="reps"
                  className="block mb-2 text-xl font-medium text-gray-600"
                >
                  Reps
                </label>
                <input
                  type="number"
                  id="reps"
                  name="reps"
                  value={exercise.reps}
                  onChange={(e) => handleExerciseChange(index, e)}
                  className="w-12 p-2 font-light transition rounded-full outline-none bg-slate-100 focus:border focus:border-slate-400"
                />
              </div>
              <div className="ml-6 mr-3">
                <label
                  htmlFor="load"
                  className="block mb-2 text-xl font-medium text-gray-600"
                >
                  Load(Kg)
                </label>
                <input
                  type="number"
                  id="load"
                  name="load"
                  value={exercise.load}
                  onChange={(e) => handleExerciseChange(index, e)}
                  className="w-16 p-2 font-light transition rounded-full outline-none bg-slate-100 focus:border focus:border-slate-400"
                />
              </div>
              <button
                type="button"
                onClick={() => handleRemoveField(index)}
                className="px-2 py-1 mx-2 bg-red-200 rounded-md hover:bg-red-300"
              >
                <i className="bi bi-x-lg"></i>
              </button>
            </div>
            {/* Description */}
            <div className="mb-10">
              <label
                htmlFor="description"
                className="block mb-2 text-xl font-medium text-gray-600"
              >
                Description
              </label>
              <textarea
                name="description"
                id="description"
                className="p-3 text-sm font-light transition rounded-md outline-none bg-slate-100 focus:border focus:border-slate-400"
              ></textarea>
            </div>
            <hr className="mb-10" />
          </div>
        ))}
        {/* Buttons */}
        <div className="flex justify-between w-full flex-nowrap">
          <button
            onClick={handleAddField}
            type="button"
            className="p-4 text-sm font-light transition rounded-md bg-slate-200 hover:bg-slate-400"
          >
            Add Exercise
          </button>
          <button className="p-4 text-sm font-light transition bg-blue-200 rounded-md hover:bg-blue-400">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
