import Navbar from "../components/navbar";
import logo from "../assets/logo3.svg";

export default function About() {
  return (
    <div className="relative overflow-x-hidden">
      <Navbar></Navbar>
      {/* page1 */}
      <div className="flex flex-col-reverse justify-end w-screen min-h-screen bg-white md:justify-start md:items-center md:flex-row">
        <div className="w-full text-center md:text-start text-wrap md:pl-40 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.1] animate-slidein opacity-0">
            FITTogether,
            <br />a community for everyone.
          </h1>
        </div>
        <div className="relative flex justify-center mt-40 mb-16 md:mb-0 size-auto md:mt-0">
        <div className="relative z-10 md:size-96 size-48">
        <img src={logo} className="z-10 md:translate-x-16" />
        </div>
        <div className="absolute z-0 bg-blue-100 rounded-full top-0 md:-right-[20%] right-[40%] size-48 md:size-64 mix-blend-normal blur-xl filter animate-pulse duration-500"></div>
        <div className="absolute z-0 bg-green-100 rounded-full top-0 md:right-[80%] left-[40%] size-48 md:size-64 mix-blend-normal blur-xl filter animate-pulse duration-500"></div>
        <div className="absolute z-0 bg-red-100 rounded-full bottom-0 md:right-[0] size-48 md:size-64 mix-blend-normal blur-xl filter animate-pulse duration-500"></div>

        </div>
        
      </div>

      {/* page2 showcase post feature */}
      <div className="flex flex-col-reverse items-center w-screen min-h-screen bg-white md:flex-row group">
        <div className="flex justify-center w-2/3 md:w-1/2">
          <div className="w-full md:w-2/3 pb-3 my-8 rounded-md bg-slate-100 md:group-hover:animate-bounce-twice md:translate-y-[25%]">
            <div className="flex items-center justify-between w-full p-2 py-3 bg-slate-300 rounded-t-md">
              <span className="mx-4 text-base text-gray-700">@jasperwei</span>
              <span className="mx-4 text-sm font-light">Morning Workout</span>
            </div>

            <div>
              <div className="grid justify-between grid-cols-2 m-6">
                <h1 className={`text-xl font-medium text-blue-950 col-span-1`}>
                  Bench Press
                </h1>
                <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">
                  3x5 50kg
                </p>
                <p className="mt-2 text-sm font-extralight">Some descriptions...</p>
              </div>
              <hr className="mx-4" />
              <div className="grid justify-between grid-cols-2 m-6">
                <h1 className={`text-xl font-medium text-blue-950 col-span-1`}>
                  Squat
                </h1>
                <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">
                  3x6 120kg
                </p>
                <p className="mt-2 text-sm font-extralight"></p>
              </div>
              <hr className="mx-4" />
              <div className="grid justify-between grid-cols-2 m-6">
                <h1 className={`text-xl font-medium text-blue-950 col-span-1`}>
                  Shoulder Press
                </h1>
                <p className="text-xl tracking-widest font-extralight text-zinc-500 place-self-end">
                  3x12 18kg
                </p>
                <p className="mt-2 text-sm font-extralight">Some descriptions...</p>
              </div>
              <hr className="mx-4" />
            </div>

            <div className="flex justify-end mx-4 mt-6 text-sm font-thin text-gray-600">
              2 days ago
            </div>
          </div>
        </div>
        <div className="w-full pl-12 pr-12 md:w-1/2">
          <h1 className="text-3xl md:text-5xl font-semibold leading-[1.1]">
            Track and Share <br />
            Workouts
          </h1>
          <p className="mt-4 text-base leading-relaxed md:text-xl font-extralight">
            Track your workouts with ease, and gain inspirations from other
            people's workouts!
          </p>
        </div>
      </div>

      {/* page 3 show guide feature */}
      <div className="flex flex-col items-center w-screen min-h-screen bg-white md:flex-row">
        <div className="w-full pl-12 mt-24 md:w-1/2 md:pl-40 md:mt-0">
        <h1 className="text-3xl md:text-5xl font-semibold leading-[1.1] animate-slidein opacity-0">
            Fitness Guides
        </h1>
        <p className="mt-4 text-base leading-relaxed md:text-xl font-extralight">
            Well crafted fitness guides, for all levels!
        </p>
        </div>
        <div className="w-full px-10 md:w-1/2 md:pr-14 md:pl-0">
        <div className="flex items-center justify-between w-full px-6 py-4 mt-10 transition bg-gray-100 rounded-xl hover:scale-105 active:bg-gray-200">
                    <h1 className="w-1/2 text-base tracking-wide text-gray-800 md:text-xl font-extralight">Creating a Workout Routine</h1>
                    <div className="flex space-x-2">
                        <div className="p-2 text-xs font-light text-gray-800 bg-blue-100 rounded-lg md:text-sm">Beginner</div>
                        <div className="p-2 text-xs font-light text-gray-800 bg-white rounded-lg md:text-sm">Gym</div>
                    </div>
        </div>
        <div className="flex items-center justify-between w-full px-6 py-4 mt-10 transition bg-gray-100 rounded-xl hover:scale-105 active:bg-gray-200">
                    <h1 className="w-1/2 text-base tracking-wide text-gray-800 md:text-xl font-extralight">Periodization Training</h1>
                    <div className="flex space-x-2">
                        <div className="p-2 text-xs font-light text-gray-800 bg-red-100 rounded-lg md:text-sm">Advanced</div>
                        <div className="p-2 text-xs font-light text-gray-800 bg-white rounded-lg md:text-sm">Gym</div>
                        <div className="p-2 text-xs font-light text-gray-800 bg-green-100 rounded-lg md:text-sm">Strength</div>
                    </div>
        </div>
        <div className="flex items-center justify-between w-full px-6 py-4 mt-10 transition bg-gray-100 rounded-xl hover:scale-105 active:bg-gray-200">
                    <h1 className="w-1/2 text-base tracking-wide text-gray-800 md:text-xl font-extralight">Home Workout Routine</h1>
                    <div className="flex space-x-2">
                        <div className="p-2 text-xs font-light text-gray-800 bg-blue-100 rounded-lg md:text-sm">Beginner</div>
                        <div className="p-2 text-xs font-light text-gray-800 bg-yellow-100 rounded-lg md:text-sm">No Equipment</div>
                    </div>
        </div>
        </div>
        
      </div>

      {/* footer */}
      <div className="flex items-center justify-center py-12 bg-gray-100">
        <h1 className="font-extralight">Contact Me: @jasper.l.wei97@gmail.com
        </h1>
      </div>
    </div>
  );
}
