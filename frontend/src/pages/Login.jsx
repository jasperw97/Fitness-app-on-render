import { useContext, useEffect } from "react";
import AuthContext from "../components/AuthProvider";
import { useNavigate, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";


export default function Login() {
  let navigate = useNavigate();
  let { loginUser, loading, user } = useContext(AuthContext);
  let login = async(e) => {
    await loginUser(e)
    navigate("/");
  };

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [])
  const {t} = useTranslation()

  return (
    <div className={`relative flex items-center justify-center w-screen h-screen ${loading && "opacity-30"} bg-slate-100`}>
      <div className="w-4/5 bg-white md:w-1/3 h-4/5 md:h-2/3 drop-shadow-md">
        <div className="px-12 pt-12 text-4xl font-bold text-slate-500">
          {t("welcome")}
        </div>
        <form onSubmit={login} className="flex flex-col-reverse px-10">
          <button className="h-12 px-4 mx-4 mt-8 font-light bg-blue-300 rounded-md w-fit hover:bg-blue-400" tabIndex={3}>
            {t("login")}
          </button>
          <input
          tabIndex={2}
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
            {t("password")}
          </label>
          <input
            tabIndex={1}
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
            {t("username")}
          </label>
        </form>
        <p className="px-12 mt-16 text-center text-gray-500 font-extralight">
          <Link to={"/register"}>
            <span className="underline">{t("signup")}</span>
          </Link>{" "}
          {t("su1")}
        </p>
      </div>
    </div>
  );
}
