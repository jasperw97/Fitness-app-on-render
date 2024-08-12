import { Link } from "react-router-dom"
import AuthContext from "../components/AuthProvider";
import SearchContext from "../context/SearchProvider";
import { useContext, useState } from "react";
import { useTranslation } from "react-i18next";


export default function Navbar() {
    let [navbar, setNavbar] = useState(false);
    let [searchbar, setSearchbar] = useState(false);
    let { user, logoutUser } = useContext(AuthContext);
    let { query, setQuery } = useContext(SearchContext);

    const {t} = useTranslation()

    const handleSearch = (e) => {
        e.preventDefault();
        setQuery(e.target.search.value);
      };
    return(
        <nav className="fixed z-20 w-full bg-white shadow-sm md:justify-between md:flex md:items-center">
        <div className="flex items-center justify-between w-full px-8 py-5">
          <Link to={"/"}>
            <span
              className="text-3xl text-center"
            >
              <i className="bi bi-house"></i>
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
          <Link to={"/workouts"}>
          <li
            className={`mx-8 my-6 font-medium whitespace-nowrap transition hover:text-gray-500 hover:cursor-pointer`}
          >
            {t("workouts")}
          </li>
          </Link>
          
          <Link to={"/guides"}>
          <li
            className={`mx-8 my-6 font-medium transition hover:text-gray-500 hover:cursor-pointer whitespace-nowrap`}
          >
            {t("guides")}
          </li>
          </Link>
          
          <Link to={"/create"}>
            <li
              className={`mx-8 font-medium transition hover:text-gray-500 hover:cursor-pointer whitespace-nowrap bg-green-100 p-4 rounded-md ${
                user ? "block" : "hidden"
              }`}
            >
              {t("cworkout")}
            </li>
          </Link>
          <Link to={"/login"}>
            <li
              className={`mx-8 my-6 font-medium transition hover:text-gray-500 whitespace-nowrap hover:cursor-pointer ${
                user ? "hidden" : "block"
              }`}
            >
              {t("login")}
            </li>
          </Link>
          <li
            onClick={logoutUser}
            className={`mx-8 my-6 font-medium transition hover:text-gray-500 whitespace-nowrap hover:cursor-pointer ${
              user ? "block" : "hidden"
            }`}
          >
            {t("logout")}
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
    )
}