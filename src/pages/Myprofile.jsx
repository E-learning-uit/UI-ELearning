import { useEffect, useState } from 'react';
import EventIcon from '@material-ui/icons/Event';
import AddIcon from '@material-ui/icons/Add';
import ELearningContext from '../contexts/f8.context';
import { useNavigate } from 'react-router-dom';

const MyProfile = () => {
    const navigate = useNavigate();
    const f8Context = new ELearningContext();
    const [userInfo, setUserInfo] = useState({
        name: 'Kim Lien',
        date_of_birth: '01-Oct-2001',
        email: 'kimlien01102001@gmail.com',
        password: 'Truonglien123456',
        phonenumber: '',
        address: ''// đổi lại hết đống này thành những key trong api trả về 
    })// luôn luôn validate và dùng nullish cho nọi cái item obj để k bị lỗi khi hiển thị


    // code ở đây

    
    useEffect(async () => {
        if (localStorage.getItem('eLearning_data')) {
            let infoUser = await f8Context.getInfoUser()
            console.log('infoUser:', infoUser);
            // setUserInfo(infoUser.data);
        }
        else {
            navigate('/')
        }
    }, [])
    // Nhiệm vụ phải làm 
    // 1. format hết lại cái UI
    // 2. chỉ làm UI cho những phần thay đổi đc hiển thị trong api  : 'avatar_url','email','first_name','last_name'
    // 3. Cái UI cho hình thì làm cái logo tròn trong xong ở dưới có nút 'đổi hình đại diện gì đó' -> lấy hình từ máy và chuyển nó thành blob url -> xem ở bài useEffect ở f8
    // 4. click nút save thì nhớ check validate để tất cả các ô phải đc điền, k đc để trống bất kì cái gì 
    // 5. khi click nút save thì phải chuyển cái hình từ blob url -> base 64 : gg cho quen, nhớ log cái base64 ra xong copy cái đó vào url để xem nó có hiện k , nếu hiện thì đúng -> done
    // làm xong phải log hết ra xem đúng hết chưa !!!!!!!!!!!!!!!!!
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
                        <AddIcon className="absolute top-10 right-4 text-xs text-[#666666] cursor-pointer" />
                    </div>
                    <div className="flex flex-row relative">
                        <input className="w-full px-4 py-3 leading-3 outline-none rounded-[5px] border-[1px] border-solid border-[#003663]" type="text" placeholder="Address" />
                        <AddIcon className="absolute top-10 right-4 text-xs text-[#666666] cursor-pointer" />
                    </div>
                    <div className="bg-[#003663] text-white rounded-[10px] px-4 py-3 text-center font-sans text-sm font-medium cursor-pointer min-w-[360px] mt-[32px] border-[1px] border-solid border-[#4682b499] hover:bg-[#4682b4e6]">SAVE</div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile