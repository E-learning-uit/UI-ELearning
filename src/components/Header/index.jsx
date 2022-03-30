
import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import {Link } from 'react-router-dom'


const Header = () => {


    return (
        <div className="fixed top-0 left-0 right-0  text-[#003663] font-bold grid grid-cols-4 px-8 shadow-md h-12	">
            <div className='col-span-1 flex'>
                <img src={logo} alt="" className='rounded-full w-11 flex items-center' />
                <span className='flex items-center text-[#F7941E] text-[20px]'>E-CODE</span>
            </div>
            <div className='col-span-2'>
                <ul className='flex flex-row justify-around	items-center h-full'>
                    <Link to="/">Home</Link>
                    <Link to="/my-course">My Courses</Link>
                    <Link to="/blog">Blog</Link>
                    <Link to="">Contact Us</Link>
                </ul>
            </div>
            <div className='col-span-1 flex flex-row items-center justify-end'>
                <img src={avatar} alt="" className='rounded-full w-10 mr-2 p-[2px]' />
                <span>Hieu Nguyen</span>
            </div>
        </div>
    )
}

export default Header;