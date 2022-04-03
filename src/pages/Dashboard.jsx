import { useState } from 'react';

import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';

import intro from '../assets/intro.jpg'



const DashBoard = ()=>{
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
        <div className="py-[60px] px-[150px]">
            <div className="grid grid-cols-[1fr_1fr] pb-12">
                <div className="flex flex-col justify-center">
                    <h1 className="text-[56px] leading-[52px] font-extrabold text-[#F7941E]">Learn more and make success result</h1>
                    <h6 className="text-lg font-normal text-[#666666] mt-6" >Courses are designed for beginners, free, easy to understand content.</h6>
                    <div>
                        <button className="px-20 py-3 mt-10 rounded-3xl bg-[#F7941E] text-[#ffffff]">GET STARTED</button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <img className="w-full object-cover" src={intro} alt="" />
                </div>
            </div>
            <div>
                <div className="pt-[48px]">
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
                <div className="pt-[48px]">
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

export default DashBoard;