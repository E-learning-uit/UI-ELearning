import { useEffect, useState } from 'react';
import imageapp from '../assets/imageapp.jpg'
import ELearningContext from '../contexts/f8.context';
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';
import { AirportShuttleTwoTone } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const f8Context = new ELearningContext();
const Home = () => {
    let navigate = useNavigate();
    const [categoryCourse, setCategoryCourse] = useState([]);
    useEffect(async () => {
        let listCourse = await f8Context.getAllCourses();
        console.log(listCourse);
        setCategoryCourse(listCourse)

    }, [])

    useEffect(() => {
        if(window.location.pathname !== '/'){
            navigate("/", { replace: true });
        }
    },[window.location.pathname])
    
    return (
        <div className="py-[30px] px-[150px]">
            <div>
                <img src={imageapp} alt="" />
            </div>
            <div className="pt-[48px]">
                {categoryCourse.map((item, index) => {
                    return (
                        <div className="mt-3" key={index}>
                            <h2 className="text-[28px] font-medium text-[#003663]">{item.title}</h2>
                            <SimpleBar>
                                <div className="flex flex-row my-[24px]">
                                    {
                                        item.data.map((course, index) => {
                                            return (
                                                <Link to={`/course/${course.id}`} className="ml-[16px] first:ml-0" key={index}>
                                                    <div className="w-[294px] h-[165px]">
                                                        <img src={course.thumbnail} alt="" />
                                                    </div>
                                                    <h5 className="text-[16px] font-medium mt-2">{course.title}</h5>
                                                </Link>
                                            )
                                        })
                                    }
                                </div>
                            </SimpleBar>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Home;