import { useState } from 'react';



const Course = () => {
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
    ]);

    return (
        <div className="px-[40px]">
            <br />
            <div className='flex justify-between'>
                <h1 className="text-[#003663] font-bold mb-5 text-[30px] items-center">Basic programming knowledge</h1>
                <button className=' bg-[orange] rounded-[20px] p-1 px-7 font-bold text-[#003663] items-center'>Bắt đầu học</button>
            </div>
            <div className="grid grid-cols-3 px-[40px]">
                <div className="col-span-2">
                    <img src={`https://img.youtube.com/vi/z2f7RHgvddc/maxresdefault.jpg`} alt="" className="w-full px-[80px] h-[400px]" />
                </div>
                <div className="col-span-1 text-center m-auto	">
                    <div className="my-4">
                        <p className="text-[#003663] font-bold text-[25px]">24</p>
                        <p className="text-[#666666] text-[15px]">Total lessons in the course</p>
                    </div>
                    <div className="my-4">
                        <p className="text-[#003663] font-bold text-[25px]">3h 50</p>
                        <p className="text-[#666666] text-[15px]">Duration of course</p>
                    </div>
                    <div className="my-4">
                        <p className="text-[#003663] font-bold text-[25px]">1125+</p>
                        <p className="text-[#666666] text-[15px]">Number of people was studied</p>
                    </div>
                    <div className="my-4">
                        <p className="text-[#003663] font-bold text-[25px]">50+</p>
                        <p className="text-[#666666] text-[15px]">Number of feedback</p>
                    </div>
                </div>
            </div>
            <p className='text-[#003663] font-bold my-4 text-[23px]'>Contents of the course</p>
            <div>
                <p className='text-[#003663] font-bold my-4'>I - Technical concepts to know</p>
                <div>
                    {data.map((item, index) => (
                        <div className='flex items-center my-3'>
                            <img src={`https://img.youtube.com/vi/z2f7RHgvddc/maxresdefault.jpg`} alt="" className='w-[200px] h-[100px] mr-3' />
                            <p className='text-[#666666]'>name course lesson</p>
                        </div>
                    ))}
                </div>
            </div>
            <div>
                <p className='text-[#003663] font-bold my-4'>II - Technical concepts to know</p>
                <div>
                    {data.map((item, index) => (
                        <div className='flex items-center my-3'>
                            <img src={`https://img.youtube.com/vi/z2f7RHgvddc/maxresdefault.jpg`} alt="" className='w-[200px] h-[100px] mr-3' />
                            <p className='text-[#666666]'>name course lesson</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Course;