import { useState } from 'react'
import avatar from '../assets/avatar.png'





const Lesson = () => {
    const [data, setData] = useState([
        {
            name: 'hieu'
        },
        {
            name: 'hieu'
        },
        
    ]);


    return (
        <div className="px-[40px]">
            <br />
            <div className="flex justify-between">
                <h1 className="text-[#003663] font-bold mb-5 text-[30px] items-center">Basic programming knowledge</h1>
            </div>
            <div className="grid grid-cols-3 px-[40px]">
                <div className="col-span-2">
                    <div className='lesson aspect-video'>
                        <video controls poster='https://img.youtube.com/vi/z2f7RHgvddc/maxresdefault.jpg'
                           loop
                           muted
                           className="w-full h-[530px]">
                               {/*<source src="blob:https://www.youtube.com/f83cbf9b-e2c2-4fb2-b9e9-367773544001"/>*/}

                        </video>
                    </div>
                    <p className='text-[#003663] font-bold my-4 text-[23px]'> What is Client-Server? </p>
                    <p className='text-[#003663] font-bold my-4 text-[17px] pt-[20px]'>24 comments</p>
                    <div>
                    {data.map((item, index) => (
                        <div className=''>
                            <div className='flex items-center'>
                                <img src={avatar} alt="" className='rounded-full w-10 p-[2px]' />
                                <span className='px-[20px]'>Hieu Nguyen</span>
                            </div>
                            <p className="text-[#666666] px-[40px] text-[15px]">Ad, I plan to learn the front-end: HTML, CSS then switch to learning the back-end: Python instead of JavaScript, because I find Python language easier to absorb, or should I learn JavaScript In advance, I have a course available at my website, thank you.</p>
                        </div>
                    ))}
                    </div>
                </div>
                <div className="col-span-1">
                    <p className='text-[#003663] font-bold my-4'>I - Technical concepts to know</p>
                    <div>
                        {data.map((item, index) => (
                            <div className='flex items-center my-3'>
                                <img src={`https://img.youtube.com/vi/z2f7RHgvddc/maxresdefault.jpg`} alt="" className='w-[200px] h-[100px] mr-3 px-[20px]' />
                                <p className='text-[#666666]'>name course lesson</p>
                            </div>
                        ))}
                    </div>
                    <p className='text-[#003663] font-bold my-4'>II - Technical concepts to know</p>
                    <div>
                        {data.map((item, index) => (
                            <div className='flex items-center my-3'>
                                <img src={`https://img.youtube.com/vi/z2f7RHgvddc/maxresdefault.jpg`} alt="" className='w-[200px] h-[100px] mr-3 px-[20px]' />
                                <p className='text-[#666666]'>name course lesson</p>
                            </div>
                        ))}
                    </div>
                    <p className='text-[#003663] font-bold my-4'>III - Technical concepts to know</p>
                    <div>
                        {data.map((item, index) => (
                            <div className='flex items-center my-3'>
                                <img src={`https://img.youtube.com/vi/z2f7RHgvddc/maxresdefault.jpg`} alt="" className='w-[200px] h-[100px] mr-3 px-[20px]' />
                                <p className='text-[#666666]'>name course lesson</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Lesson;