import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import ELearningContext from '../contexts/f8.context';

import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExtendFunction from '../utils/extendFunction';



const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(16),
        fontWeight: '600',
        color: '#003663'
    },
    video: {
        fontSize: theme.typography.pxToRem(14),
        marginLeft: '3px',
        // fontWeight: '600',
    },
}));

const extendFunction = new ExtendFunction();
const f8Context = new ELearningContext();

const Course = () => {
    const classes = useStyles()
    const { idCourse } = useParams();
    let [infoCourse, setInfoCourse] = useState({});
    let [listCourse, setListCourse] = useState([]);


    useEffect(async () => {
        console.log(idCourse);
        let info = await f8Context.getInfoCourse(idCourse)
        setInfoCourse(await info.data)
        setListCourse(await info.data.listCourse)
        console.log(info.data);
    }, [])


    return (
        <>
            <div className="px-[40px]">
                <br />
                <div className='flex items-center justify-between'>
                    <h1 className="text-[#003663] font-bold mb-5 text-[40px] items-center">{infoCourse.title}</h1>
                    <button className=' bg-[orange] rounded-[20px]  px-7 font-bold text-[#003663] h-12 text-xl'>Discover lesson</button>
                </div>
                <div className="grid grid-cols-3 px-3 py-3 mt-2 rounded-lg border-2 border-slate-400">
                    <div className="col-span-2">
                        <img src={infoCourse.thumbnail} alt="" className="w-full px-[80px] h-[400px]" />
                    </div>
                    <div className="col-span-1 text-center m-auto	">
                        <div className="my-4">
                            <p className="text-[#003663] font-bold text-[25px]">{infoCourse.totalCourses}</p>
                            <p className="text-[#666666] text-[15px]">Total lessons in the course</p>
                        </div>
                        <div className="my-4">
                            <p className="text-[#003663] font-bold text-[25px]">{infoCourse.totalHours} h</p>
                            <p className="text-[#666666] text-[15px]">Duration of course</p>
                        </div>
                        <div className="my-4">
                            <p className="text-[#003663] font-bold text-[25px]">{infoCourse.totalMember}</p>
                            <p className="text-[#666666] text-[15px]">Number of people was studied</p>
                        </div>
                        <div className="my-4">
                            <p className="text-[#003663] font-bold text-[25px]">{infoCourse.totalFeedback}</p>
                            <p className="text-[#666666] text-[15px]">Number of feedback</p>
                        </div>
                    </div>
                </div>
                <p className='text-[#003663] font-bold my-4 text-[23px]'>Contents of the course</p>
                <div className={classes.root}>
                    {listCourse.map((list, index) => {
                        return (
                            <Accordion>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Typography className={classes.heading}>{extendFunction.romanize(index + 1) + '. ' + list.title}</Typography>
                                    <Typography className={classes.video}>({list.item.length} {list.item.length > 1 ? 'videos' : 'video'})</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <div className='w-full'>
                                        {list.item && list.item.length !== 0 ? list.item.map((course, index) => (
                                            <Link
                                                to={`/lesson/${idCourse}?idItem=${course.id}&idPart=${list.id}`}
                                                className='flex items-center justify-end w-full cursor-pointer'
                                            >
                                                <div className='flex items-center my-3 w-full'>
                                                    <p className='mx-2 text-xs font-bold'>{index + 1}.</p>
                                                    <img src={course.thumbnail} alt="" className='w-[100px] h-[50px] mr-3' />
                                                    <p className=''>{course.name}</p>
                                                </div>
                                                <div>
                                                    <p className='text-[#003663] font-bold'>{extendFunction.convertDuration(course.duration)}</p>
                                                </div>
                                            </Link>
                                        )) : ''}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        )
                    })}
                </div>
                {/* {listCourse.map((list, index) => {
                    return (
                        <div>
                            <p className='text-[#003663] font-bold my-4'>I {list.title}</p>
                            <div>
                                {list.item && list.item.length !== 0 ? list.item.map((course, index) => (
                                    <div className='flex items-center my-3'>
                                        <img src={course.thumbnail} alt="" className='w-[200px] h-[100px] mr-3' />
                                        <p className='text-[#666666]'>{course.name}</p>
                                    </div>
                                )) : ''}
                            </div>
                        </div>
                    )
                })} */}
            </div>
        </>
    )
}

export default Course;