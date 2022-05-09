
import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BookIcon from '@material-ui/icons/Book';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const Header = () => {


    return (
        <div className="fixed top-0 left-0 right-0 z-10  text-[#003663] font-bold grid grid-cols-4 px-8 shadow-md h-12 bg-white	">
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

            <div className='col-span-1 flex flex-row items-center justify-end relative '>
                <div className='group'>
                    <img src={avatar} alt="" className='rounded-full w-10 mr-2 p-[2px] ' />
                    <div className=' absolute top-11 right-5 border-2 bg-white hidden  group-hover:block  		'>
                        <ul>
                            <li className='flex items-center justify-between cursor-pointer hover:bg-slate-400 '>
                                <AccountCircleIcon className='my-2 mx-2' />
                                <span className='my-2 mx-2 '>Profile</span>
                            </li>
                            <li className='flex items-center justify-between cursor-pointer hover:bg-slate-400 '>
                                <BookIcon className='m-2' />
                                <span className='m-2'>My blog</span>
                            </li>
                            <li className='flex items-center justify-between cursor-pointer hover:bg-slate-400 '>
                                <ExitToAppIcon className='m-2' />
                                <span className='m-2'>Sign out</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <span className=''>Hieu Nguyen</span>
            </div>
        </div>
    )
}

export default Header;