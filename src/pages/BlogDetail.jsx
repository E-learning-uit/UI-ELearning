import { useState } from 'react'
import Ellipse12 from '../assets/Ellipse12.png'
import Pic1 from '../assets/61b634151fbbb 1.png'


const BlogDetail = () => {

    const [blog, setBlog] = useState([
        1, 2, 3, 4, 5
    ])

    return (
        <div className="container mx-auto py-10 px-8">
            <div>
                <p className='text-[black] text-[14px]'>
                    <img className='inline' src={Ellipse12} alt="" /> Johnny Nguyen</p>
            </div>
            <h2 className='text-[#003663] text-[18px] font-semibold py-2'>Time and motivation</h2>
            <p className='text-[#666666] text-[16px]'>Maybe it's been a long time since I've touched a thing called "timetable". Or more rustic, people often call it "daily schedule", and for students, it is called "timetable". Surely many people will wonder why I am a student and have not touched what students call a timetable for a long time. Of course, students or students all need it to see the class schedule, so that not a single morning is forgotten.</p>
            <p className='text-[#666666] text-[16px]'>In this article, I mean "timetable" or how to arrange time for each subject or something detailed on a calendar. Only now have I learned how to organize my time and divide each subject according to the school schedule. When we are young, healthy and studying and working, time is extremely important. If we know how to arrange and supplement it properly, we can check it, instead of wanting to learn something That's when you're comfortable saying: "Well, I guess I don't have time to learn" or a long course is found and then lament: "Haizz… This key is long world. Waste of time", you are trying to find a way to illustrate your laziness, you can spend a few hours playing games, surfing facebook, tiktok but spending a few minutes studying will not work. and try to be a busy person. That is, the time cannot be checked, so there will be a state at that time, doing a lot of things but there are times when there is an imbalance of not wanting to do anything, doing one thing is not wanting to do. Especially us in auto-learning time, the more we have to check it as something that helps us learn more interesting things.</p>
            <br />
            <p className='text-[#666666] text-[16px]'>However, I am not a virtual person, the kind of person who when seeing a tree branch reach out from the curb also makes me stunned in front of the reader. . Routine for me, in general, does not work, when Hanoi always makes me unpredictable when standing still.</p>
            <br />
            <p className='text-[#666666] text-[16px]'>Some apps and ways to help me regain my motivation to try to self-study and work through the stressful epidemic period (This is my thought to share, if you have a good way, please do so ) Please comment below to let me and everyone know : when we all move online. You know why when we learn in online schools are redesigned when we are self-taught? That's why we call it binding on everything for example: teachers or grades, etc.</p>
            <br />
            <p className='text-[#666666] text-[16px]'>Then:</p>
            <br />
            <p className='text-[#666666] text-[16px]'>Please watch an online course on the online learning site or youtube as a specialized subject in school and are learning online, the person who makes the video tutorial like my teacher will help me stay motivated. learn more.
                You can invite friends or a group of close friends to set up a meeting room or meet each other in Discord and create a space for yourself like in an online lesson.
                Please listen to an lofi music to help you regain your spirit and motivation for self-study.
                And to arrange the class schedule, you can check out:</p>
            <br />
            <p className='text-[#666666] text-[16px]'>Google Calendar (Completely free and always syncs with multiple devices. How delicious without using :v)
                Trello (1 todo list of apps that help divide tasks so that you can curl up and meet deadlines). This app is look like to like app Todolist of Microsoft. However, each application will have 1 outstanding feature and usage options of each person, see which one is easy to use and get used to.
                However, each person's way of arranging and allocating time is different, it is also not possible to put other people's time on the way you live and your life. mental comfort to welcome a new day and work better.</p>
            <div className='flex justify-center'>
                <img className='py-10' src={Pic1} alt="" />
            </div>
            <h1 className='text-[#003663] text-[24px] font-semibold py-2'>Other Featured Posts</h1>
            {blog.map((item, index) => (
                <div key={index}>
                    <div className="px-4 py-4 hover:border-slate-400">
                        <div>
                            <p className='text-[black] text-[14px]'>
                                <img className='inline' src={Ellipse12} alt="" /> Johnny Nguyen</p>
                        </div>
                        <h2 className='text-[#003663] text-[18px] font-semibold py-2'>Time and motivation</h2>
                        <p className='text-[16px]'>Maybe it's been a long time since I've touched a thing called "timetable". Or more rustic,
                            people often call it "daily schedule", and for students, it is called "timetable". Surely many
                            people will wonder why I am a student and have not touched what students call a timetable for a
                            long time. Of course, students or students all need it to see the class schedule, so that not
                            a single morning is forgotten...</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default BlogDetail;