import { useState, useEffect } from 'react'
import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'
import { Link } from 'react-router-dom'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import BookIcon from '@material-ui/icons/Book';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { GoogleLogin } from 'react-google-login';
import ELearningContext from '../../contexts/f8.context';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const navigate = useNavigate();
    const f8Context = new ELearningContext();
    const [user, setUser] = useState(false)

    const googleResponse = (response) => {
        f8Context.login({ providerToken: response.tokenId }).then((res) => {
            console.log(res);
            let data = res.data
            localStorage.setItem('eLearning_data', JSON.stringify(data));
            setUser({
                avatar_url: data.avatar_url,
                name: `${data.first_name} ${data.last_name}`,
            })
        }).catch((err) => {
            console.log(err);
            localStorage.removeItem('eLearning_data')
            setUser(false)
        });
    }
    const handleSignOut = () => {
        localStorage.removeItem('eLearning_data')
        navigate('/')
        setUser(false)
    }
    useEffect(() => {
        if (localStorage.getItem('eLearning_data')) {
            let data = JSON.parse(localStorage.getItem('eLearning_data'))
            const last_name = data.last_name ?? ' '
            const first_name = data.first_name ?? ' '
            setUser({
                avatar_url: data.avatar_url,
                name: `${first_name} ${last_name}`,
            })
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 right-0 z-10  text-[#003663] font-bold grid grid-cols-4 px-8 shadow-md h-12 bg-white	">
            <div className='col-span-1 flex'>
                <img src={logo} alt="" className='rounded-full w-11 h-11 flex items-center' />
                <span className='flex items-center text-[#F7941E] text-[20px]'>E-CODE</span>
            </div>
            <div className='col-span-2'>
                <ul className='flex flex-row justify-around	items-center h-full'>
                    <Link to="/" className="font-sans font-bold">Home</Link>
                    <Link to="/my-course" className="font-sans font-bold">My Courses</Link>
                    <Link to="/blog" className="font-sans font-bold">Blog</Link>
                    <Link to="/contact-us" className="font-sans font-bold">Contact Us</Link>
                </ul>
            </div>

            <div className='col-span-1 flex flex-row items-center justify-end relative '>
                {user ? (
                    <div className=' flex items-center'>
                        <span className='mx-2'>{user.name}</span>
                        <div className='group'>
                            <img src={user.avatar_url} alt="" className='rounded-full w-10 h-10 mr-2 p-[2px] ' />
                            <div className="absolute min-w-[150px] top-[100%] right-[25%] translate-x-[75%] border-2 bg-white hidden  group-hover:block before:content-[''] before:absolute before:w-[100%] before:h-[20px] before:top-[-10px] shadow-[0_3px_7px_0_rgba(0,0,0,0.01)]">
                                <ul>
                                    <li className='w-full flex items-center font-medium cursor-pointer hover:bg-slate-400 '>
                                        <Link to={'/my-profile'}>
                                            <AccountCircleIcon className='my-2 mx-2' />
                                            <span className='my-2 mx-2 '>Profile</span>
                                        </Link>
                                    </li>
                                    <li className='w-full flex items-center font-medium cursor-pointer hover:bg-slate-400 '>
                                        <Link to={'/my-course'}>
                                            <BookIcon className='m-2' />
                                            <span className='m-2'>My Course</span>
                                        </Link>
                                    </li>
                                    <li className='w-full flex items-center font-medium cursor-pointer hover:bg-slate-400 ' onClick={handleSignOut}>
                                        <ExitToAppIcon className='m-2' />
                                        <span className='m-2'>Sign out</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                ) : (
                    <GoogleLogin
                        clientId={global.config.KEY}
                        onSuccess={googleResponse}
                        cookiePolicy={'single_host_origin'}
                        render={renderProps => (
                            <span onClick={renderProps.onClick} disabled={renderProps.disabled} className='cursor-pointer' >
                                Đăng nhập
                            </span>
                        )}
                    ></GoogleLogin>
                )}
            </div>
        </div>
    )
}

export default Header;