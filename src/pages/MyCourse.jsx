import { useState } from 'react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';


const MyCourse = () => {
    const [data, setData] = useState([
        {
            name: 'hieu'
        },
        {
            name: 'hieu'
        },
        {
            name: 'hieu'
        },
        {
            name: 'hieu'
        },
        {
            name: 'hieu'
        },
        {
            name: 'hieu'
        },
        {
            name: 'hieu'
        },
    ]);

    return (
        <div>
            <br />
            <div className='px-14 '>
                <h1 className="text-[#003663] font-bold mb-5 text-[30px] items-center">Front-end Courses</h1>
                <SimpleBar>
                    <div className='flex  w-full mb-5'>
                        {data.map((item, index) => (
                            <img src={`https://img.youtube.com/vi/6mFmtgYVsh4/maxresdefault.jpg`} alt="" className="w-[350px] h-[200px] mx-10" />
                        ))}
                    </div>
                </SimpleBar>
            </div>
            <br />
            <div className='px-14 '>
                <h1 className="text-[#003663] font-bold mb-5 text-[30px] items-center">Back-end Courses</h1>
                <SimpleBar>
                    <div className='flex  w-full mb-5'>
                        {data.map((item, index) => (
                            <img src={`https://img.youtube.com/vi/6mFmtgYVsh4/maxresdefault.jpg`} alt="" className="w-[350px] h-[200px] mx-10" />
                        ))}
                    </div>
                </SimpleBar>
            </div>
        </div>
    )
}

export default MyCourse;