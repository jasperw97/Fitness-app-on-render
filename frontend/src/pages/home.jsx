import Workouts from "../components/Workouts";
import { Link } from "react-router-dom";
import { useContext, useEffect, createContext, useState } from "react";
import AuthContext from "../components/AuthProvider";
import SearchContext from "../context/SearchProvider";
import Navbar from "../components/navbar";

export default function Home() {
  let { query, setQuery } = useContext(SearchContext);
  
  useEffect(() => {
    localStorage.removeItem("old_title");
    localStorage.removeItem("old_exercises");
    localStorage.removeItem("workout_id");
    setQuery("");
  }, []);
  return (
    <div className="relative w-screen min-h-screen bg-white">
      <Navbar></Navbar>
      <Workouts></Workouts>
    </div>
  );
}
