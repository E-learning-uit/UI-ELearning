import { useEffect, useState, useMemo, useRef } from 'react'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import avatar from '../assets/avatar.png'
import logo from '../assets/logo.png'
import 'simplebar/dist/simplebar.css';
import ExtendFunction from '../utils/extendFunction';
import ELearningContext from '../contexts/f8.context';

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HelpIcon from '@material-ui/icons/Help';
import FaceIcon from '@material-ui/icons/Face';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import EventNoteIcon from '@material-ui/icons/EventNote';

import Box from '@material-ui/core/Box';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

import SimpleBar from 'simplebar-react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import ReactPlayer from 'react-player'

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

    const handle = (e) => {
        console.log(e);
    }


    useEffect(async () => {
        if (!query.get('idItem')) {

        }
        else {
            setIdItem(query.get('idItem'));
            setIdPart(query.get('idPart'));
        }

        let info = await f8Context.getInfoCourse(idCourse)
        let infoItemCourse = await f8Context.getInfoItem(query.get('idItem'))
        // console.log(infoItemCourse);
        setInfoItem(infoItemCourse.data)

        console.log(await info.data);


        setInfoCourse(await info.data)
        setListCourse(await info.data.listCourse)
    }, [window.location.href])

    useEffect(() => {
        console.log(checkVideoEnd);
    }, [checkVideoEnd])

    const [data, setData] = useState([
        {
            nameUser: 'hieu',
            content: 'hieu nguyen trung dsdasdasdsadddda',
        },
        {
            nameUser: 'hieu',
            content: 'hieu',
        },
        {
            nameUser: 'hieu',
            content: 'hieu',
        },
        {
            nameUser: 'hieu',
            content: 'hieu',
        },

    ]);


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
                            onProgress={handle}
                        />
                    </div>
                    <p className='text-[#003663] font-bold my-4 text-[23px] mx-2'>{infoItem.name}</p>
                    {/* comment */}
                    <div className='px-2 mb-3'>
                        <p className='text-[#003663] font-bold my-4 text-[20px] pt-[20px]'>24 comments</p>
                        <div>
                            <div className='w-full flex items-center'>
                                <FaceIcon style={{ width: '40px', height: '40px', color: 'orange', marginRight: '2px' }} />
                                <div className='w-full'>
                                    <input type="text" placeholder='Bạn có thắc mắc gì trong bài học này không ?' className='w-full p-2 ' style={{ outline: 'none' }} />
                                    <hr />
                                </div>
                            </div>
                            <div className='flex justify-end my-1 mx-3'>
                                <button className='hover:bg-gray-200 rounded-2xl text-gray-500 px-2 py-1 font-semibold mx-2'>Cancel</button>
                                <button className='rounded-2xl text-white bg-orange-400 px-2 py-1 font-semibold hover:opacity-75'>Comment</button>
                            </div>
                        </div>
                        <div>
                            {data.map((item, index) => (
                                <div className='flex my-3' key={index}>
                                    <img src={avatar} alt="" className='rounded-full w-10 h-10 p-[2px] mx-1' />
                                    <div className='bg-[#f2f3f5] rounded-lg'>
                                        <p className='px-4 font-semibold text-[#b89a9b]'>Hieu Nguyen</p>
                                        <p className="text-[#b89a9b] px-4 text-[15px]">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div class="overflow-y-auto fixed top-11 bottom-0 right-0 w-[25%]">
                    <p className='text-[#003663] font-bold text-2xl p-2'>List lessons</p>
                    {listCourse.map((list, index) => {
                        return (
                            <div className='w-full' key={index}>
                                <Accordion style={{ backgroundColor: '#f7f8fa' }} expanded={list.id === idPart}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>{extendFunction.romanize(index + 1) + '. ' + list.title}</Typography>
                                        <Typography className={classes.video}>({list.item.length} {list.item.length > 1 ? 'videos' : 'video'})</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails style={{ padding: '0',backgroundColor:'white' }}>
                                        <div className='w-full'>
                                            {list.item && list.item.length !== 0 ? list.item.map((course, index) => (
                                                <Link
                                                    key={index}
                                                    to={`/lesson/${idCourse}?idItem=${course.id}&idPart=${list.id}`}

                                                >
                                                    <div className={clsx(' w-full  cursor-pointer hover:bg-slate-300', {
                                                        'bg-slate-300': idItem === course.id
                                                    })}>
                                                        <div className='flex items-center justify-end px-3'>
                                                            <div className='w-full '>
                                                                <span className='mx-2 text-xs font-bold'>{index + 1}.</span>
                                                                <span className=''>{course.name}</span>
                                                            </div>
                                                            <div>
                                                                {/* <LockIcon style={{ width: '15px', height: '15px' }} /> */}
                                                                <CheckCircleIcon style={{ width: '15px', height: '15px' ,color:'#5db85c'}} />
                                                            </div>
                                                        </div>
                                                        <div className='flex items-center px-5 pb-1'>
                                                            <PlayCircleFilledIcon style={{ width: '15px', height: '15px', color: '#888888' }} />
                                                            <p className='text-[#003663] font-bold mx-1 text-sm'>{extendFunction.convertDuration(course.duration)}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            )) : ''}
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </div>
                        )
                    })}
                </div>
            </div>


        </div>
    )
}

export default Lesson;