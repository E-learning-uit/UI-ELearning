import { useEffect, useState, useMemo, useRef } from 'react'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import avatar from '../assets/avatar.png'
import logo from '../assets/logo.png'
import 'simplebar/dist/simplebar.css';

import ExtendFunction from '../utils/extendFunction';
import ELearningContext from '../contexts/f8.context';
import ListLesson from '../components/ListLesson';
import Comment from '../components/Comment';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HelpIcon from '@material-ui/icons/Help';
import FaceIcon from '@material-ui/icons/Face';
import EventNoteIcon from '@material-ui/icons/EventNote';
import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import clsx from 'clsx';
import ReactPlayer from 'react-player'
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        color: '#c4e608'
    },
    heading: {
        fontSize: theme.typography.pxToRem(14),
        fontWeight: '600',
        color: '#003663'
    },
    video: {
        fontSize: theme.typography.pxToRem(14),
        marginLeft: '3px',
        // fontWeight: '600',
    },
}));

function useQuery() {
    const { search } = useLocation();
    return new URLSearchParams(search);
}
const Lesson = () => {
    const f8Context = new ELearningContext();
    const extendFunction = new ExtendFunction();
    const navigate = useNavigate();
    const classes = useStyles()
    const { idCourse } = useParams();
    const query = useQuery();

    const [checkVideoEnd, setCheckVideoEnd] = useState(false);
    const [idItem, setIdItem] = useState('');
    const [idPart, setIdPart] = useState('');
    const [infoCourse, setInfoCourse] = useState({});
    const [listCourse, setListCourse] = useState([]);
    const [infoItem, setInfoItem] = useState({});

    const handleUpdateLesson = async (e) => {
        f8Context.updateLessonUser(idCourse,idItem)
            .then(async res => {
                console.log(res);
                if (res.code === 200) {
                    swal("Chúc mừng!", "Bạn đã có thể học bài học tiếp theo!", "success");

                    let info = await f8Context.getInfoCourse(idCourse)
                    setListCourse(info.data.listCourse)
                }
            })
            .catch(err => {
                swal("Oops!", err, "error");
                console.log(err)
            })
    }


    useEffect(async () => {
        if (!query.get('idItem') || !query.get('idPart')) {
            navigate('/');
        }
        else {
            setIdItem(query.get('idItem'));
            setIdPart(query.get('idPart'));

            let info = await f8Context.getInfoCourse(idCourse)
            let infoItemCourse = await f8Context.getInfoItem(query.get('idItem'))
            // console.log(infoItemCourse);

            console.log(await info.data);

            setInfoItem(infoItemCourse.data)
            setInfoCourse(info.data)
            setListCourse(info.data.listCourse)
        }
    }, [window.location.href])

    useEffect(() => {
        console.log(checkVideoEnd);
    }, [checkVideoEnd])

    return (
        <div>
            {/* header */}
            <div className='sticky top-0 right-0 left-0 bg-slate-900 flex items-center justify-between px-3 z-10'>
                <div className='flex items-center'>
                    <ArrowBackIosIcon style={{ width: '30px', height: '30px', color: 'white' }} onClick={() => navigate(`/course/${idCourse}`)} />
                    <img src={logo} alt="" className='w-12 h-12 rounded-full' />
                    <p className='text-white font-semibold text-xl'>{infoCourse.title}</p>
                </div>
                <div className='flex items-center'>
                    <Box position="relative" display="inline-flex">
                        <CircularProgress variant="determinate" value={11} />
                        <Box
                            top={0}
                            left={0}
                            bottom={0}
                            right={0}
                            position="absolute"
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <Typography variant="caption" component="div" color="error">77%</Typography>
                        </Box>
                    </Box>
                    <div className='mx-4'>
                        <span className='text-white  text-base'>4</span>
                        <span className='text-white  text-base'>/</span>
                        <span className='text-white  text-base'>111</span>
                        <span className='text-white  text-base'> Lessons</span>
                    </div>
                    <div className='flex items-center mx-2'>
                        <HelpIcon style={{ width: '25px', height: '25px', color: 'white' }} />
                        <p className='text-white  text-base mx-1'>Tutorial</p>
                    </div>
                    <div className='flex items-center mx-2'>
                        <EventNoteIcon style={{ width: '25px', height: '25px', color: 'white' }} />
                        <p className='text-white  text-base mx-1'>Note</p>
                    </div>
                </div>
            </div>

            {/* video */}
            <div className="grid grid-cols-4  w-full">
                <div className="col-span-3">
                    <div className=''>
                        <ReactPlayer
                            width="100%" height="500px"
                            url={`https://www.youtube.com/embed/${idItem}`}
                            controls={true}
                            onEnded={handleUpdateLesson}
                        />
                    </div>
                    <p className='text-[#003663] font-bold my-4 text-[23px] mx-2'>{infoItem.name}</p>
                    {/* comment */}
                    <div className='px-2 mb-3'>
                        <Comment props={{ idCourse }} />
                    </div>
                </div>
                <div className="overflow-y-auto fixed top-11 bottom-0 right-0 w-[25%]">
                    <p className='text-[#003663] font-bold text-2xl p-2'>List lessons</p>
                    {listCourse.map((list, index) => {
                        return (
                            <div key={index}>
                                <ListLesson props={{ idCourse, list, idItem, index }} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Lesson;