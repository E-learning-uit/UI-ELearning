import { useEffect, useState } from 'react'
import EventIcon from '@material-ui/icons/Event'
import EditIcon from '@material-ui/icons/Edit'
import AddIcon from '@material-ui/icons/Add'
import ELearningContext from '../contexts/f8.context'
import { Link, useNavigate } from 'react-router-dom'

const MyProfile = () => {
    const navigate = useNavigate()
    const f8Context = new ELearningContext()
    const [userInfo, setUserInfo] = useState({
        avatar_url: '',
        first_name: '',
        last_name: '',
        email: '', // đổi lại hết đống này thành những key trong api trả về
    }) // luôn luôn validate và dùng nullish cho nọi cái item obj để k bị lỗi khi hiển thị

    // code ở đây
    const [avatar, setAvatar] = useState()
    const [courses, setCourses] = useState([])
    const [categoryCourse, setCategoryCourse] = useState([])

    useEffect(async () => {
        if (localStorage.getItem('eLearning_data')) {
            let infoUser = await f8Context.getInfoUser()
            setUserInfo(infoUser.data)

            let data = await f8Context.getInfoLearnedCourse()
            setCategoryCourse(data.data)
            console.log('categoryCourse:', data.data)
        } else {
            navigate('/')
        }
    }, [])

    const handleUpdateInfo = () => {
        // console.log(userInfo)
        f8Context
            .updateInfoUser(userInfo)
            .then((res) => {
                console.log(res)
                let beforeData = JSON.parse(localStorage.getItem('eLearning_data'))
                localStorage.setItem(
                    'eLearning_data',
                    JSON.stringify({
                        ...beforeData,
                        ...res.data,
                    })
                )
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const handlePreviewAvt = (e) => {
        const file = e.target.files[0]
        var reader = new FileReader()
        reader.onloadend = function () {
            console.log(reader.result)
            userInfo.avatar_url = reader.result
            setAvatar(reader.result)
        }
        reader.readAsDataURL(file)

        file.preview = URL.createObjectURL(file)
    }
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
                <h2 className="text-[#003663] text-[31px] py-4 font-bold">My profille</h2>
                <div className="grid grid-cols-[1fr_2fr]">
                    <div className="flex flex-col pl-40 pr-16 justify-center">
                        <div className="flex w-48 h-48 mb-12 relative">
                            <img
                                className="w-full h-full object-cover rounded-full"
                                src={userInfo.avatar_url}
                                alt=""
                            />
                            <div className="absolute bottom-3 left-3/4 px-2 py-2 text-[8px] rounded-full bg-slate-400 bg-opacity-80  cursor-pointer text-white">
                                <EditIcon className="" />
                                <input
                                    type="file"
                                    accept="image/png"
                                    className="absolute opacity-0 overflow-hidden top-2/4 left-[30%] translate-x-[-20%] translate-y-[-50%]"
                                    style={{ opacity: '0' }}
                                    onChange={handlePreviewAvt}
                                />
                            </div>
                        </div>
                        <form>
                            <div className="w-full  grid grid-cols-[9fr_2fr_9fr] pb-10">
                                <div className="flex flex-row relative">
                                    <input
                                        required
                                        className="w-full px-4 py-3 leading-3 outline-none rounded-[5px] border-[1px] border-solid border-[#003663]"
                                        type="text"
                                        placeholder={userInfo.first_name}
                                        onChange={(e) =>
                                            (userInfo.first_name = e.target.value)
                                        }
                                    />
                                </div>
                                <div></div>
                                <div className="flex flex-row relative">
                                    <input
                                        required
                                        className="w-full px-4 py-3 leading-3 outline-none rounded-[5px] border-[1px] border-solid border-[#003663]"
                                        type="text"
                                        placeholder={userInfo.last_name}
                                        onChange={(e) =>
                                            (userInfo.last_name = e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <input
                                disabled
                                className="w-full px-4 py-3 leading-3 outline-none rounded-[5px] border-[1px] border-solid border-[#003663]"
                                type="text"
                                placeholder={userInfo.email}
                                onChange={(e) => (userInfo.email = e.target.value)}
                            />
                            <input
                                type="submit"
                                value="SAVE"
                                required
                                className="w-full bg-[#003663] text-white rounded-[10px] px-4 py-3 text-center font-sans text-sm font-medium cursor-pointer min-w-[360px] mt-12 border-[1px] border-solid border-[#4682b499] hover:bg-[#4682b4e6]"
                                onClick={handleUpdateInfo}
                            />
                        </form>
                    </div>
                    <div>
                        <h2 className="text-[#003663] text-[24px] font-bold py-2">
                            Courses attended
                        </h2>
                        {categoryCourse.map((item, index) => {
                            return item.data.map((course) => (
                                <Link to={`/course/${course.idCourse}`}>
                                    <div className="flex items-center justify-between my-3">
                                        <img
                                            src={course.thumbnail}
                                            alt=""
                                            className="w-[250px] rounded-lg"
                                        />
                                        <div>
                                            <p className="font-bold">{course.title}</p>
                                            <p className="text-sm">{course.description}</p>
                                        </div>
                                    </div>
                                    <hr />
                                </Link>
                            ))
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile
