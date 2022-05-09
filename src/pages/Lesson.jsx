import { useEffect, useState, useMemo } from 'react'
import avatar from '../assets/avatar.png'
import logo from '../assets/logo.png'
import SimpleBar from 'simplebar-react';
import 'simplebar/dist/simplebar.css';
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import HelpIcon from '@material-ui/icons/Help';
import EventNoteIcon from '@material-ui/icons/EventNote';

import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExtendFunction from '../utils/extendFunction';

import ELearningContext from '../contexts/f8.context';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        color:'#c4e608'
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
    const classes = useStyles()
    const { idCourse } = useParams();
    const query = useQuery();

    const [idItem, setIdItem] = useState('');
    const [idPart, setIdPart] = useState('');
    const [infoCourse, setInfoCourse] = useState({});
    const [listCourse, setListCourse] = useState([]);

    useEffect(async () => {
        console.log(query.get('idItem'));
        if (!query.get('idItem')) {

        }
        else {
            setIdItem(query.get('idItem'));
            setIdPart(query.get('idPart'));
        }

        let info = await f8Context.getInfoCourse(idCourse)
        console.log(await info.data);
        setInfoCourse(await info.data)
        setListCourse(await info.data.listCourse)
    }, [])


    const [data, setData] = useState([
        {
            name: 'hieu'
        },
        {
            name: 'hieu'
        },
        {
            name: 'hieu'
        },
        {
            name: 'hieu'
        },

    ]);


    return (
        <div>
            {/* header */}
            <div className='sticky top-0 right-0 left-0 bg-slate-900 flex items-center justify-between px-3 z-10'>
                <div className='flex items-center'>
                    <ArrowBackIosIcon style={{ width: '30px', height: '30px', color: 'white' }} />
                    <img src={logo} alt="" className='w-12 h-12 rounded-full' />
                    <p className='text-white font-semibold text-xl'>name item course</p>
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

            {/* grid */}
            <div className="grid grid-cols-4  w-full">
                <div className="col-span-3">
                    <div className='lesson aspect-video'>
                        <iframe
                            width="100%" height="530"
                            src={`https://www.youtube.com/embed/${idItem}`}
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <p className='text-[#003663] font-bold my-4 text-[23px]'> What is Client-Server? </p>
                    <p className='text-[#003663] font-bold my-4 text-[17px] pt-[20px]'>24 comments</p>
                    <div>
                        {data.map((item, index) => (
                            <div className=''>
                                <div className='flex items-center'>
                                    <img src={avatar} alt="" className='rounded-full w-10 p-[2px]' />
                                    <span className='px-[20px]'>Hieu Nguyen</span>
                                </div>
                                <p className="text-[#666666] px-[40px] text-[15px]">Ad, I plan to learn the front-end: HTML, CSS then switch to learning the back-end: Python instead of JavaScript, because I find Python language easier to absorb, or should I learn JavaScript In advance, I have a course available at my website, thank you.</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div class="overflow-y-auto fixed top-11 bottom-0 right-0 w-[25%]">
                    <p className='text-[#003663] font-bold text-2xl p-2'>List lessons</p>
                    {listCourse.map((list, index) => {
                        return (
                            <div className='w-full'>
                                <Accordion style={{backgroundColor:'#f7f8fa'}}>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>{extendFunction.romanize(index + 1) + '. ' + list.title}</Typography>
                                        <Typography className={classes.video}>({list.item.length} {list.item.length > 1 ? 'videos' : 'video'})</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails style={{padding:'0'}}>
                                        <div className='w-full'>
                                            {list.item && list.item.length !== 0 ? list.item.map((course, index) => (
                                                <Link
                                                    to={`/lesson/${idCourse}?idItem=${course.id}&idPart=${list.id}`}
                                                    className='flex items-center justify-end w-full px-1 cursor-pointer hover:bg-slate-300'
                                                >
                                                    <div className=' my-3 w-full '>
                                                        <span className='mx-2 text-xs font-bold'>{index + 1}.</span>
                                                        <span className=''>{course.name}</span>
                                                    </div>
                                                    <div>
                                                        <p className='text-[#003663] font-bold'>{extendFunction.convertDuration(course.duration)}</p>
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