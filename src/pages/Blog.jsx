import { useState } from 'react'
import Ellipse12 from '../assets/Ellipse12.png'
import {Link} from 'react-router-dom'


const Blog = () => {
    const [blog, setBlog] = useState([
        1, 2, 3, 4, 5
    ])

    return (
        <div className="container mx-auto space-y-4 p-5">
            <h1 className='text-[#003663] text-[31px] py-4 font-bold'>Blog</h1>
            {blog.map(item => (
                <Link to='/blog-detail'>
                    <div className="rounded-2xl border-2 border-[#003663] px-4 py-4 hover:border-slate-400 my-4">
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
                </Link>
            ))}
        </div>
        
    )
}

export default Blog;