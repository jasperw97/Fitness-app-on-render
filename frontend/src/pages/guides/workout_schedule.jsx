import Navbar from "../../components/navbar"
import GuideParagraph from "../../components/guides/paragraph"
import TitleAuthor from "../../components/guides/title_author"

export default function WorkoutSchedule() {
    return (
        <div className="relative flex flex-col items-center pb-12">
            <Navbar></Navbar>
            <div className="w-full px-6 md:w-1/2 mt-36">
                <TitleAuthor title={"Creating your Workout Schedule"} author={"Jasper Wei"} date={"2022/08/18"}></TitleAuthor>

                <GuideParagraph>
                Building a consistent workout schedule is key for everyone. In this guide, I'll share some ways you can go about structuring your own workout schedule.
                </GuideParagraph>

                <GuideParagraph title={"Beginners"}>
                For people who are just starting to work out, it is crucial to stay consistent. Starting small 
                is key because that's how you'll gradually build up. It can be as simple as 10 minutes of running, 
                20 push ups, or 50 squats a day.  
                </GuideParagraph>
                <GuideParagraph>
                As a beginner, the key is to slowly let your body adapt to the workload, build the habit, and 
                develop every area your body to create a good fundamental.
                </GuideParagraph>

                <GuideParagraph title={"Young Athletes"}>
                If you are an young athlete, there are many ways structure your workouts to improve performance. 
                The key is to remember that your ultimate goal is to make you better at your sport, not getting extremely big 
                like a bodybuilder. 
                </GuideParagraph>
                <GuideParagraph title={""}>
                For athletes, there are a lot more to consider when creating a workout plan, including 
                your sports training, the competitive schedule, and your training experience. In general, young athletes 
                typically go with 2 to 3 times of full body workout every week. During these sessions, make sure to focus on compound movements 
                to build a good base for more intense and specific training.
                </GuideParagraph>
                <GuideParagraph title={""}>
                In future guides, we will talk about periodization training, which is a more strategic way for athletes 
                to structure their workout plans. 
                </GuideParagraph>

                <GuideParagraph title={"Bodybuilders"}>
                If your goal is to get a good looking physique, the main focus will be hypertrophy. Workout schedules for 
                bodybuilders typically be 5 to 6 days a week, with each session focusing on a specific set of muscle groups. 
                When creating a workout schedule as a bodybuilder, make sure that each muscle group gets enough rest time(typically 48 hours) 
                to recover before working on it again.
                </GuideParagraph>
                <GuideParagraph title={""}>
                <hr className="border border-black"/>
                </GuideParagraph>
                <GuideParagraph title={""}>
                Creating a workout schedule can seem confusing, but you won't learn until you start. 
                This guide is just a broad overview, there are more in-depth guides with different focuses 
                coming soon, stay tuned. If you have any questions, feel free to reach out through email or our Instagram page.
                </GuideParagraph>
                
            </div>

        </div>
    )
}