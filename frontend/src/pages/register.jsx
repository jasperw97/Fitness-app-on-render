import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

export default function Register() {
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [bio, setBio] = useState("");
  let navigate = useNavigate();
  let [loading, setLoading] = useState(false)

  const {t} = useTranslation()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    try {
      const response = await fetch("https://fitness-app-on-render.onrender.com/api/user/register/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
          bio: bio,
        }),
      });
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      console.log("User Created: ", data);
      navigate("/login");
    } catch (error) {
      console.error("There was an error registering the user:", error.message);
      alert(
        "Something went wrong while registering! The username might be used"
      );
    } finally {
      setLoading(false)
    }
  };

  return (
    <div className={`flex items-center justify-center w-screen min-h-screen bg-slate-100 ${loading && "opacity-30"}`}>
      <div className="flex flex-col w-3/4 pb-8 my-10 bg-white sm:w-2/3 md:w-1/2 h-fit drop-shadow-md">
        <div className="px-16 pt-12 mb-2 text-4xl font-bold text-slate-500">
          {t("cea")}
        </div>
        <form
          className="grid grid-cols-1 sm:grid-cols-2"
          onSubmit={handleSubmit}
        >
          {/* Username, password, button */}
          <div className="flex flex-col-reverse px-10">
            <input
              name="password"
              value={password}
              tabIndex={2}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              placeholder="Password"
              className="px-4 py-2 m-4 font-light placeholder-transparent border rounded-lg placeholder-shown:border-black peer/password focus:border-blue-500 focus:outline-none text-slate-600"
            />
            <label
              htmlFor="password"
              className="px-1 mx-8 text-center text-gray-400 transition scale-90 bg-white peer-placeholder-shown/password:translate-y-12 translate-y-7 w-fit h-fit peer-focus/password:translate-y-7 peer-focus/password:text-blue-500 peer-placeholder-shown/password:scale-100 peer-focus/password:scale-90"
            >
              {t("password")}
            </label>
            <input
              type="text"
              name="username"
              tabIndex={1}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              placeholder="Usernmae"
              className="px-4 py-2 m-4 font-light placeholder-transparent border rounded-lg placeholder-shown:border-black peer/username focus:border-blue-500 focus:outline-none text-slate-600"
            />
            <label
              htmlFor="username"
              className="px-1 mx-8 text-center text-gray-400 transition scale-90 bg-white peer-placeholder-shown/username:translate-y-12 translate-y-7 w-fit h-fit peer-focus/username:translate-y-7 peer-focus/username:text-blue-500 peer-placeholder-shown/username:scale-100 peer-focus/username:scale-90"
            >
              {t("username")}
            </label>
          </div>
          {/* Bio input */}
          <div className="flex flex-col mt-10 place-self-center px-14 sm:place-self-start">
            <textarea
              name="bio"
              value={bio}
              tabIndex={3}
              onChange={(e) => setBio(e.target.value)}
              id="bio"
              placeholder="Bio"
              className="w-full px-4 py-2 placeholder-transparent border rounded-lg placeholder-shown:border-black peer/bio h-36 focus:outline-none focus:border-blue-500"
            ></textarea>
            <label
              htmlFor="bio"
              className="peer-placeholder-shown/bio:-translate-y-[135px] bg-white scale-90 peer-placeholder-shown/bio:scale-100 w-fit h-fit px-1 translate-x-4 text-gray-400 peer-focus/bio:-translate-y-[156px] -translate-y-[156px] peer-focus/bio:bg-white peer-focus/bio:text-blue-500 peer-focus/bio:font-extralight peer-focus/bio:scale-90 transition"
            >
              {t("bio")}
            </label>
          </div>
          <button tabIndex={4} className="px-6 py-4 mt-8 font-light text-center transition bg-blue-300 rounded-md w-fit mx-14 h-fit hover:bg-blue-400 place-self-center sm:place-self-start">
            {t("signup")}
          </button>
        </form>

        <p className="px-12 mt-16 text-sm text-center text-gray-500 font-extralight">
          {t("aha")} <span className="underline">{t("login")}</span>
        </p>
      </div>
    </div>
  );
}
