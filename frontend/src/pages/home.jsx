import Workouts from "../components/Workouts";
import { Link } from "react-router-dom";
import { useContext, useEffect, createContext, useState } from "react";
import AuthContext from "../components/AuthProvider";
import SearchContext from "../context/SearchProvider";
import searchImage from "../assets/search.png";
import addImage from "../assets/add.png";
import logoutImage from "../assets/logout.png";
import loginImage from "../assets/login.png";

export default function Home() {
  let { user, logoutUser } = useContext(AuthContext);
  let { query, setQuery } = useContext(SearchContext);
  let [navbar, setNavbar] = useState(false);
  let [searchbar, setSearchbar] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(e.target.search.value);
  };

  useEffect(() => {
    localStorage.removeItem("old_title");
    localStorage.removeItem("old_exercises");
    localStorage.removeItem("workout_id");
    setQuery("");
  }, []);
  return (
    <div className="relative w-screen min-h-screen bg-slate-200">
      <nav className="fixed z-10 w-full bg-white shadow md:justify-between md:flex md:items-center">
        <div className="flex items-center justify-between w-full px-8 py-5">
          <Link to={"/"}>
            <span
              className="text-2xl text-center"
              onClick={() => window.location.reload()}
            >
              Home
            </span>
          </Link>
          <span
            className="scale-150 cursor-pointer md:hidden"
            onClick={() => setNavbar(!navbar)}
          >
            <i className={navbar ? "bi bi-x-lg" : "bi bi-list"}></i>
          </span>
        </div>
        <ul
          className={`w-full ${
            navbar ? "opacity-100" : "-translate-y-96"
          } transition duration-500 bg-white md:w-auto md:flex md:items-center md:z-auto md:static md:opacity-100 md:translate-y-0 absolute`}
        >
          <li
            className={`mx-8 my-6 font-medium transition hover:text-gray-500 hover:cursor-pointer`}
          >
            ABOUT
          </li>
          <li
            className={`mx-8 my-6 font-medium transition hover:text-gray-500 hover:cursor-pointer`}
          >
            GUIDES
          </li>
          <Link to={"/create"}>
            <li
              className={`mx-8 font-medium transition hover:text-gray-500 hover:cursor-pointer whitespace-nowrap bg-green-100 p-4 rounded-md ${
                user ? "block" : "hidden"
              }`}
            >
              CREATE WORKOUT
            </li>
          </Link>
          <Link to={"/login"}>
            <li
              className={`mx-8 my-6 font-medium transition hover:text-gray-500 hover:cursor-pointer ${
                user ? "hidden" : "block"
              }`}
            >
              LOGIN
            </li>
          </Link>
          <li
            onClick={logoutUser}
            className={`mx-8 my-6 font-medium transition hover:text-gray-500 hover:cursor-pointer ${
              user ? "block" : "hidden"
            }`}
          >
            LOGOUT
          </li>
          <i
            className={`hidden md:block mx-8 my-6 font-medium transition ${
              searchbar ? "bi bi-x-lg" : "bi bi-search"
            } hover:text-gray-500 hover:cursor-pointer`}
            onClick={() => setSearchbar(!searchbar)}
          ></i>
          <form
            onSubmit={handleSearch}
            className={`md:absolute md:m-0 mx-6 my-6 flex items-stretch h-12 md:right-3 md:top-20 transition duration-500 ${
              searchbar ? "md:opacity-100" : "md:-translate-y-96 md:opacity-0"
            }`}
          >
            <input
              type="text"
              name="search"
              className="w-64 p-4 font-thin outline-none md:bg-white bg-slate-100"
              placeholder="Search Users.."
            />
            <button className="flex items-center justify-center p-4 md:bg-white bg-slate-100">
              <i className="font-medium transition bi bi-search hover:text-gray-500 hover:cursor-pointer"></i>
            </button>
          </form>
        </ul>
      </nav>
      {/* <div className="flex flex-col items-center w-full pt-16 pb-24"> */}
      {/* <div className="w-2/3 pb-8 my-8 bg-white rounded-md md:w-1/3">
        <div className="flex items-center w-full p-2 py-4 text-xl font-light text-gray-700 bg-slate-300 rounded-t-md"><i className="mx-4 text-3xl bi bi-person-circle"></i>@jasperwei</div>
        <div className="grid justify-between grid-cols-2 m-4">
          <h1 className="text-xl font-medium text-blue-950">Bench Press</h1>
          <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">3x5 50kg</p>
          <p className="mt-2 text-sm font-extralight">This is just my normal execise of the day you know what im sayin</p>
        </div>
        <hr className="mx-4" />
        <div className="grid justify-between grid-cols-2 m-4">
          <h1 className="text-xl font-medium text-blue-950">Bench Press</h1>
          <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">3x5 50kg</p>
          <p className="mt-2 text-sm font-extralight">This is just my normal execise of the day you know what im sayin</p>
        </div>
        <hr className="mx-4" />
        <div className="grid justify-between grid-cols-2 m-4">
          <h1 className="text-xl font-medium text-blue-950">Bench Press</h1>
          <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">3x5 50kg</p>
          <p className="mt-2 text-sm font-extralight"></p>
        </div>
        <hr className="mx-4" />
        </div>
        <div className="w-2/3 pb-8 my-8 bg-white rounded-md md:w-1/3">
        <div className="flex items-center w-full p-2 py-4 text-xl font-light text-gray-700 bg-slate-300 rounded-t-md"><i className="mx-4 text-3xl bi bi-person-circle"></i>@jasperwei</div>
        <div className="grid justify-between grid-cols-2 m-4">
          <h1 className="text-xl font-medium text-blue-950">Bench Press</h1>
          <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">3x5 50kg</p>
          <p className="mt-2 text-sm font-extralight">This is just my normal execise of the day you know what im sayin</p>
        </div>
        <hr className="mx-4" />
        <div className="grid justify-between grid-cols-2 m-4">
          <h1 className="text-xl font-medium text-blue-950">Bench Press</h1>
          <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">3x5 50kg</p>
          <p className="mt-2 text-sm font-extralight">This is just my normal execise of the day you know what im sayin</p>
        </div>
        <hr className="mx-4" />
        <div className="grid justify-between grid-cols-2 m-4">
          <h1 className="text-xl font-medium text-blue-950">Bench Press</h1>
          <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">3x5 50kg</p>
          <p className="mt-2 text-sm font-extralight"></p>
        </div>
        <hr className="mx-4" />
        </div>
        <div className="w-2/3 pb-8 my-8 bg-white rounded-md md:w-1/3">
        <div className="flex items-center w-full p-2 py-4 text-xl font-light text-gray-700 bg-slate-300 rounded-t-md"><i className="mx-4 text-3xl bi bi-person-circle"></i>@jasperwei</div>
        <div className="grid justify-between grid-cols-2 m-4">
          <h1 className="text-xl font-medium text-blue-950">Bench Press</h1>
          <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">3x5 50kg</p>
          <p className="mt-2 text-sm font-extralight">This is just my normal execise of the day you know what im sayin</p>
        </div>
        <hr className="mx-4" />
        <div className="grid justify-between grid-cols-2 m-4">
          <h1 className="text-xl font-medium text-blue-950">Bench Press</h1>
          <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">3x5 50kg</p>
          <p className="mt-2 text-sm font-extralight">This is just my normal execise of the day you know what im sayin</p>
        </div>
        <hr className="mx-4" />
        <div className="grid justify-between grid-cols-2 m-4">
          <h1 className="text-xl font-medium text-blue-950">Bench Press</h1>
          <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">3x5 50kg</p>
          <p className="mt-2 text-sm font-extralight"></p>
        </div>
        <hr className="mx-4" />
        </div> */}
      <Workouts></Workouts>

      {/* </div> */}
    </div>
  );
}
