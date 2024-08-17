import Navbar from "../../components/navbar"
import TitleAuthor from "../../components/guides/title_author"
import GuideParagraph from "../../components/guides/paragraph"

export default function StarterGuide() {
    return(
        <div className="relative flex flex-col items-center pb-12">
            <Navbar></Navbar>
            <div className="w-full px-6 md:w-1/2 mt-36">
                <TitleAuthor title={"Getting Started"} author={"Jasper Wei"} date={"2022/08/10"}></TitleAuthor>
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

                <GuideParagraph title={"Track Your Progress"}>
                Tracking your progress goes a long way. It doesn't just let yourself know how much you've 
                improved. Seeing how much you've done will motivate you to keep going! 
                </GuideParagraph>

                <GuideParagraph title={""}>
                The best place to track your progress is FITTogether. Join a community full of fitness 
                enthusiasists and learn from each other! 
                </GuideParagraph>
                <GuideParagraph title={"Consistency is Key"}>
                Forget about all the 30 days body transformation videos you see on social media. It takes time 
                for your body to change, and it's totally normal! A great tip is to make working out your lifestyle, and 
                not focus too much on the short term results.
                </GuideParagraph>
                <GuideParagraph title={"Utilize the guides"}>
                At first, working out may seem like a daunting task, but that's what we're here for. 
                In FITTogether, you'll find guides that suit your current level and you'll definitely 
                learn a thing or two from it! 
                </GuideParagraph>
                
                
                

            </div>

        </div>
    )
}