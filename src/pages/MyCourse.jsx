import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';

import ELearningContext from '../contexts/f8.context';
const MyCourse = () => {
    const navigation = useNavigate();
    const f8Context = new ELearningContext();
    const [data, setData] = useState([]);

    useEffect(async () => {
        if (localStorage.getItem('eLearning_data')) {
            let data = await f8Context.getInfoLearnedCourse()
            console.log(data);
            setData(data.data)
        }
        else {
            navigation('/')
        }
    }, [])
    return (
        <div>
            <br />
            {data.map((item, index) => {
                return (
                    <div className='px-14 '>
                        <h1 className="text-[#003663] font-bold mb-5 text-[30px] items-center">{item.title}</h1>
                        <SimpleBar>
                            <div className=' flex mb-5'>
                                {
                                    item.data && item.data.length > 0 ?
                                        item.data.map((course, index) => (
                                            <Link to={`/course/${course.idCourse}`} className='first:ml-0 ml-5  w-[350px] min-w-[350px] relative hover:opacity-75' >
                                                <img src={course.thumbnail} alt="" className='w-full ' />
                                                <p
                                                    className=' absolute top-1/2 left-1/2  font-bold text-[20px] text-[#003663]   rounded-full bg-[rgba(211,211,211,0.7)] p-2'
                                                    style={{ transform: 'translate(-50%,-50%)' }}
                                                >{Number(course.learned * 100 / course.totalLesson).toFixed(0) + '%'}</p>
                                            </Link>
                                        ))
                                        :
                                        null
                                }
                            </div>
                        </SimpleBar>
                    </div>
                )
            })}
        </div>
    )
}

export default MyCourse;