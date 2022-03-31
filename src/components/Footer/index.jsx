import logo from '../../assets/logo.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import twitter from '../../assets/twitter.png'


const Footer = () => {


    return (
        <div className='related bottom-0 right-0 left-0 p-[30px] h-[260px] max-h-[260px] bg-white' style={{boxShadow:' 0px -1px 0px #cecece'}}>
            <div className=' grid grid-cols-3'>
                <div className='col-span-1 flex flex-row items-center '>
                    <img src={logo} alt="" className='rounded-full w-[90px] h-[90px] ' />
                    <span className=' text-[#F7941E] text-[30px] font-bold'>E-CODE</span>
                </div>
                <div className='col-span-1 flex text-[#003663]'>
                    <ul className='m-4'>
                        <li className='font-bold m-4'>About Us</li>
                        <li className='m-4'>Introduce</li>
                        <li className='m-4'>Business Partner</li>
                    </ul>
                    <ul className='m-4'>
                        <li className='font-bold m-4'>Help</li>
                        <li className='m-4'>Contact Us</li>
                        <li className='m-4'>Term</li>
                    </ul>
                </div>
                <div className='col-span-1 flex mt-5'>
                    <img src={facebook} alt="" className='rounded-full w-12 h-12 mx-3' />
                    <img src={instagram} alt="" className='rounded-full w-12 h-12 mx-3' />
                    <img src={twitter} alt="" className='rounded-full w-12 h-12 mx-3' />
                </div>
            </div>
            <p>© 2022 Nike, Inc. All Rights Reserved</p>
        </div>
    )
}

export default Footer;