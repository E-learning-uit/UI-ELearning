import { useState, useEffect } from 'react';
import ELearningContext from '../contexts/f8.context';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';
import { Link } from 'react-router-dom';
import intro from '../assets/intro.jpg'
import { COURSE_PAID } from '../config/const';

const DashBoard = () => {
    const f8Context = new ELearningContext();

    const [categoryCourses, setCategoryCourses] = useState([]);
    useEffect(async () => {
        let listCourse = await f8Context.getAllCourses();
        console.log(listCourse);
        setCategoryCourses(listCourse)
    }, [])
    return (
        <div className="py-[60px] px-[150px]">
            <div className="grid grid-cols-[1fr_1fr] pb-12">
                <div className="flex flex-col justify-center">
                    <h1 className="text-[56px] leading-[52px] font-extrabold text-[#F7941E]">Learn more and make success result</h1>
                    <h6 className="text-lg font-normal text-[#666666] mt-6" >Courses are designed for beginners, free, easy to understand content.</h6>
                    <a href='#courses'>
                        <button className="px-20 py-3 mt-10 rounded-3xl bg-[#F7941E] text-[#ffffff]">GET STARTED</button>
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img className="w-full object-cover" src={intro} alt="" />
                </div>
            </div>
            <div id="courses">
                {
                    categoryCourses.map((categoryCourse, index) => {
                        return (
                            <div className="pt-[48px]" key={index}>
                                <h2 className="text-[28px] font-medium text-[#003663]">{categoryCourse.title}</h2>
                                <SimpleBar>
                                    <div className="flex flex-row my-[24px]">
                                        {
                                            categoryCourse.data.map((course, index) => {
                                                return (
                                                    <Link to={`/course/${course.id}`} className="ml-[16px] first:ml-0" key={index}>
                                                        <div className="w-[294px] h-[165px] relative rounded">
                                                            <img src={course.thumbnail} alt="" className='rounded-md' />
                                                            {
                                                                course.amount > 0 &&
                                                                <img
                                                                    className='absolute top-2 left-2 w-6 h-6 rounded bg-black p-1'
                                                                    src={'https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg'} alt=""
                                                                />
                                                            }
                                                        </div>
                                                        <div>
                                                            <p className="text-[16px] font-medium mt-2">{course.title}</p>
                                                            {
                                                                course.amount > 0 &&
                                                                <div className='flex items-center gap-3'>
                                                                    <p className=' text-sm font-bold line-through	'>{String(course.amount).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnd</p>
                                                                    <p className='text-primary text-sm font-bold'>{String(Number(course.amount) * Number(course.discount ? course.discount : 1) / 100).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')} vnd</p>
                                                                </div>
                                                            }
                                                        </div>
                                                    </Link>
                                                )
                                            })
                                        }
                                    </div>
                                </SimpleBar>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default DashBoard;