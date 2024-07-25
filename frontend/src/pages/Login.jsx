import { useContext } from "react";
import AuthContext from "../components/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import accountsImage from "../assets/accounts.png";
import passImage from "../assets/password.png";
import loginImage from "../assets/login.png";

export default function Login() {
  let navigate = useNavigate();
  let { loginUser } = useContext(AuthContext);
  let login = (e) => {
    loginUser(e);
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen bg-slate-200">
      <div className="w-2/3 bg-white md:w-1/3 h-2/3 drop-shadow-md">
        <div className="px-12 pt-12 text-4xl font-bold text-slate-500">
          Welcome!
        </div>
        <form onSubmit={login} className="flex flex-col-reverse px-10">
          <button className="w-1/4 h-12 mx-4 mt-8 font-light bg-blue-300 rounded-md hover:bg-blue-400">
            Login
          </button>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            className="px-6 py-2 m-4 font-light placeholder-transparent border rounded-lg outline-none placeholder-shown:border-black focus:border-blue-500 peer/password"
          />
          <label
            htmlFor="password"
            className="px-1 mx-8 text-center text-gray-400 transition scale-90 bg-white peer-placeholder-shown/password:translate-y-12 translate-y-7 w-fit h-fit peer-focus/password:translate-y-7 peer-focus/password:text-blue-500 peer-placeholder-shown/password:scale-100 peer-focus/password:scale-90"
          >
            Password
          </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            name="username"
            className="px-6 py-2 m-4 font-light placeholder-transparent border rounded-lg outline-none placeholder-shown:border-black focus:border-blue-500 peer/username"
          />
          <label
            htmlFor="username"
            className="px-1 mx-8 text-center text-gray-400 transition scale-90 bg-white peer-placeholder-shown/username:translate-y-12 translate-y-7 w-fit h-fit peer-focus/username:translate-y-7 peer-focus/username:text-blue-500 peer-placeholder-shown/username:scale-100 peer-focus/username:scale-90"
          >
            Username
          </label>
        </form>
        <p className="px-12 mt-16 text-center text-gray-500 font-extralight">
          <Link to={"/register"}>
            <span className="underline">Sign Up</span>
          </Link>{" "}
          if you haven't!
        </p>
      </div>
    </div>
  );
}
