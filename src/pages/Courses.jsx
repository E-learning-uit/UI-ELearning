import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ListLesson from '../components/ListLesson'
import ELearningContext from '../contexts/f8.context'

import { makeStyles } from '@material-ui/core/styles'
import ExtendFunction from '../utils/extendFunction'

import swal from 'sweetalert'
import Comment from '../components/Comment'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(16),
    fontWeight: '600',
    color: '#003663',
  },
  video: {
    fontSize: theme.typography.pxToRem(14),
    marginLeft: '3px',
    // fontWeight: '600',
  },
}))

const extendFunction = new ExtendFunction()
const f8Context = new ELearningContext()

const Course = () => {
  const navigate = useNavigate()
  const classes = useStyles()
  const { idCourse } = useParams()
  let [infoCourse, setInfoCourse] = useState({})
  let [listCourse, setListCourse] = useState([])
  const handleLearnCourse = async () => {
    if (localStorage.getItem('eLearning_data')) {
      swal('Hãy cố gắng học thật tốt khóa học này nha!', {
        buttons: ['Hủy bỏ', 'Bắt đầu học!'],
      }).then(async (res) => {
        if (res) {
          let infoCourseUser = await f8Context.checkInfoCourseUser(idCourse)
          console.log(infoCourseUser)
          if (infoCourseUser) {
            navigate(
              `/lesson/${idCourse}?idItem=${infoCourseUser.data.idItem}&idPart=${infoCourseUser.data.idPart}`
            )
          } else {
            swal('Lỗi', 'Đã có lỗi xảy ra, vui lòng thử lại sau.', 'warning')
          }
        }
      })
    } else {
      swal('Oops!', 'Bạn cần đăng nhập để có thể bắt đầu học.', 'error')
    }
  }
  const handleBuyCourse = () => {
    swal(`Khóa học này đang có giá là ${infoCourse.amount} vnd, bạn có muốn mua không?`, {
      buttons: ['Hủy bỏ', 'Mua khóa học'],
    }).then((res) => {
      if (res) {
        navigate(`/payment/${idCourse}`)
      }
    })
  }
  const handleLearnNewCourse = async () => {
    if ((infoCourse.amount > 0 && infoCourse.paid) || true) {
      await handleLearnCourse()
    } else {
      handleBuyCourse()
    }
  }

  useEffect(async () => {
    console.log(idCourse)
    let info = []
    if (localStorage.getItem('eLearning_data')) {
      info = await f8Context.getInfoCourse(idCourse)
    } else {
      info = await f8Context.getInfoCourseDefault(idCourse)
    }
    setInfoCourse(await info.data)
    setListCourse(await info.data.listCourse)
    console.log(await info)
  }, [])

  return (
    <>
      <div className="px-[40px]">
        <br />
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <p className="text-[#003663] font-bold text-[40px] items-center">
              {infoCourse.title}
            </p>
            {infoCourse.amount > 0 && (
              <img
                className=" w-10 h-10 shadow-md rounded  p-1"
                src={
                  'https://fullstack.edu.vn/static/media/crown_icon.3e4800f7485935ab6ea312a7080a85fe.svg'
                }
                alt=""
              />
            )}
          </div>
          <button
            className=" bg-[orange] rounded-[20px]  px-7 font-bold text-[#003663] h-12 text-xl hover:shadow-md"
            onClick={handleLearnNewCourse}
          >
            Discover lesson
          </button>
        </div>
        <div className="grid grid-cols-3 px-3 py-3 mt-2 rounded-lg shadow-md">
          <div className="col-span-2">
            <img src={infoCourse.thumbnail} alt="" className="w-full px-[80px] h-[400px]" />
          </div>
          <div className="col-span-1 text-center m-auto	">
            <div className="my-4">
              <p className="text-[#003663] font-bold text-[25px]">
                {infoCourse.totalCourses}
              </p>
              <p className="text-[#666666] text-[15px]">Total lessons in the course</p>
            </div>
            <div className="my-4">
              <p className="text-[#003663] font-bold text-[25px]">
                {infoCourse.totalHours} h
              </p>
              <p className="text-[#666666] text-[15px]">Duration of course</p>
            </div>
            <div className="my-4">
              <p className="text-[#003663] font-bold text-[25px]">
                {infoCourse.totalMember}
              </p>
              <p className="text-[#666666] text-[15px]">Number of people was studied</p>
            </div>
            <div className="my-4">
              <p className="text-[#003663] font-bold text-[25px]">
                {infoCourse.totalFeedback}
              </p>
              <p className="text-[#666666] text-[15px]">Number of feedback</p>
            </div>
          </div>
        </div>
        <p className="text-[#003663] font-bold my-4 text-[23px]">Contents of the course</p>
        <div className={classes.root}>
          {listCourse.map((list, index) => {
            return (
              <div key={index}>
                <ListLesson props={{ idCourse, list, index }} />
              </div>
            )
          })}
        </div>
      </div>
      <div className="w-2/4 mx-5">
        <Comment props={{ idCourse }} />
      </div>
    </>
  )
}

export default Course
