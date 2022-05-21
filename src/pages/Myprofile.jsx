import { useState } from 'react';
import EventIcon from '@material-ui/icons/Event';
import AddIcon from '@material-ui/icons/Add';

const MyProfile = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'Kim Lien',
        date_of_birth: '01-Oct-2001',
        email: 'kimlien01102001@gmail.com',
        password: 'Truonglien123456',
        phonenumber: '',
        address: ''
    })
    return (
        <div className="mx-[150px] my-[60px]">
            <div className="pt-[36px]">
                <h2 className="text-[28px] font-sans font-semibold leading-7 my-8">My profille</h2>
                <div className="flex flex-col px-20">
                    <div className="grid grid-cols-[9fr_2fr_9fr]">
                        <div className="flex flex-row relative">
                            <input className="w-full px-4 py-3 leading-3 outline-none rounded-[5px] border-[1px] border-solid border-[#003663]" type="text" placeholder={userInfo.name} />
                        </div>
                        <div></div>
                        <div className="flex flex-row relative">
                            <input className="w-full px-4 py-3 leading-3 outline-none rounded-[5px] border-[1px] border-solid border-[#003663]" type="text" placeholder={userInfo.date_of_birth} />
                            <EventIcon className="absolute top-10 right-4 text-xs text-[#666666] cursor-pointer" />
                        </div>
                    </div>
                    <input className="w-full px-4 py-3 leading-3 outline-none rounded-[5px] border-[1px] border-solid border-[#003663]" type="text" placeholder={userInfo.email} />
                    <input className="w-full px-4 py-3 leading-3 outline-none rounded-[5px] border-[1px] border-solid border-[#003663]" type="password" placeholder={userInfo.password} />
                    <div className="flex flex-row relative">
                        <input className="w-full px-4 py-3 leading-3 outline-none rounded-[5px] border-[1px] border-solid border-[#003663]" type="text" placeholder="Phonenumber" />
                        <AddIcon className="absolute top-10 right-4 text-xs text-[#666666] cursor-pointer"/>
                    </div>
                    <div className="flex flex-row relative">
                        <input className="w-full px-4 py-3 leading-3 outline-none rounded-[5px] border-[1px] border-solid border-[#003663]" type="text" placeholder="Address" />
                        <AddIcon className="absolute top-10 right-4 text-xs text-[#666666] cursor-pointer"/>
                    </div>
                    <div className="bg-[#003663] text-white rounded-[10px] px-4 py-3 text-center font-sans text-sm font-medium cursor-pointer min-w-[360px] mt-[32px] border-[1px] border-solid border-[#4682b499] hover:bg-[#4682b4e6]">SAVE</div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile