import Navbar from "../../components/navbar"
import TitleAuthor from "../../components/guides/title_author"
import GuideParagraph from "../../components/guides/paragraph"

export default function StarterGuide() {
    return(
        <div className="relative flex flex-col items-center pb-12">
            <Navbar></Navbar>
            <div className="w-1/2 mt-36">
                <TitleAuthor title={"Creating a Workout Routine"} author={"Jasper Wei"} date={"2022/08/10"}></TitleAuthor>
                <GuideParagraph>
                Have you always wanted to build a habit of exercising? Having a consistent workout routine 
                has many benefits, including improved physical health, mental health, and a positive self image. 
                In this article, you'll find different ways and tips to start building a consistent workout routine! 
                </GuideParagraph>

                <GuideParagraph title={"Start Small"}>
                When we are just starting to do something new, we often get so motivated that we start 
                setting unrealistic goals and schedules. To accomplish anything, we have to slowly build up, 
                especially with working out. Start with just 20 minutes of running per day or 10 pushups, get yourself 
                adapted to the routine of exercising consistently. This way, we build consistency while avoiding injuries. 
                </GuideParagraph>

                <GuideParagraph title={"Reward Yourself"}>
                When your brain associates exercising with something you enjoy, you'll be more likely 
                to do it. Perhaps treat yourself with a warm bath after exercising! (Anything you like doing will work.)
                </GuideParagraph>
                
                
                

            </div>

        </div>
    )
}