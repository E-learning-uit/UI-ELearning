import { useState } from 'react';
import imageapp from '../assets/imageapp.jpg'

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';

const Home = () => {
    const [itemFrontCourses, setItemFrontCourses] = useState([
        {
            id: 1,
            name: "Kiến Thức Nhập Môn IT",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/7.png"
        },
        {
            id: 2,
            name: "HTML, CSS từ Zero đến Hero",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/2.png"
        },
        {
            id: 3,
            name: "Responsive Với Grid System",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/3.png"
        },
        {
            id: 4,
            name: "Lập Trình JavaScript Cơ Bản",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/1.png"
        },
        {
            id: 5,
            name: "Lập Trình JavaScript Nâng Cao",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/12.png"
        },
        {
            id: 6,
            name: "Xây Dựng Website với ReactJS",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png"
        },
    ])
    const [itemBackCourses, setBackItemCourses] = useState([
        {
            id: 1,
            name: "Kiến Thức Nhập Môn IT",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/7.png"
        },
        {
            id: 2,
            name: "HTML, CSS từ Zero đến Hero",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/2.png"
        },
        {
            id: 3,
            name: "Lập Trình JavaScript Cơ Bản",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/1.png"
        },
        {
            id: 4,
            name: "Lập Trình JavaScript Nâng Cao",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/12.png"
        },
        {
            id: 5,
            name: "Node & ExpressJS",
            thumd_url: "https://files.fullstack.edu.vn/f8-prod/courses/6.png"
        },
    ])
    return(
        <div className="py-[100px] px-[150px]">
            <div>
                <img src={imageapp} alt="" />
            </div>
            <div>
                <div className="mt-[48px]">
                    <h2 className="text-[28px] font-medium text-[#003663]">Front-end Courses</h2>
                    <SimpleBar>
                        <div className="flex flex-row my-[24px]">
                            {
                                itemFrontCourses.map((item, index) => {
                                    return (
                                        <div className="ml-[16px] first:ml-0">
                                            <div className="w-[294px] h-[165px]">
                                                <img src={item.thumd_url} alt="" />
                                            </div>
                                            <h5 className="text-[16px] font-medium mt-2">{item.name}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </SimpleBar>
                </div>
                <div className="mt-[48px]">
                    <h2 className="text-[28px] font-medium text-[#003663]">Back-end Courses</h2>
                    <SimpleBar>
                        <div className="flex flex-row my-[24px]">
                            {
                                itemBackCourses.map((item, index) => {
                                    return (
                                        <div className="ml-[16px] first:ml-0">
                                            <div className="w-[294px] h-[165px]">
                                                <img src={item.thumd_url} alt="" />
                                            </div>
                                            <h5 className="text-[16px] font-medium mt-2">{item.name}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </SimpleBar>
                </div>
            </div>
        </div>
    )
}
export default Home;