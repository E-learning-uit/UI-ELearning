import { useEffect, useState, useMemo, useRef } from 'react'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import ExtendFunction from '../../utils/extendFunction';


import { makeStyles } from '@material-ui/core/styles';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import LockIcon from '@material-ui/icons/Lock';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


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


const ListLesson = ({ props }) => {
    const { idCourse, list, index, idItem } = props;
    const classes = useStyles()
    const extendFunction = new ExtendFunction();


    return (
        <Accordion style={{ backgroundColor: '#f7f8fa', width: '100%' }} >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
            >
                <Typography className={classes.heading}>{extendFunction.romanize(index + 1) + '. ' + list.title}</Typography>
                <Typography className={classes.video}>({list.item.length} {list.item.length > 1 ? 'videos' : 'video'})</Typography>
            </AccordionSummary>
            <AccordionDetails style={{ padding: '0', backgroundColor: 'white' }}>
                <div className='w-full'>
                    {list.item && list.item.length !== 0 ? list.item.map((course, index) => (
                        <Link
                            key={index}
                            to={`/lesson/${idCourse}?idItem=${course.id}&idPart=${list.id_part}`}
                            className={clsx({
                                'pointer-events-none': !course.isLearned,
                                'pointer-events-auto': course.isLearned,
                            })}
                        >
                            <div className={clsx(' w-full  cursor-pointer hover:bg-slate-300', {
                                'bg-slate-300': (idItem && idItem === course.id && course.isLearned) ? true : false,
                                'bg-gray-300': !course.isLearned,
                            })}>
                                <div className='flex items-center justify-end px-3'>
                                    <div className='w-full '>
                                        <span className='mx-2 text-xs font-bold'>{index + 1}.</span>
                                        <span className=''>{course.name}</span>
                                    </div>
                                    <div>
                                        {
                                            course.isLearned ?
                                                <CheckCircleIcon style={{ width: '15px', height: '15px', color: '#5db85c' }} />
                                                :
                                                <LockIcon style={{ width: '15px', height: '15px' }} />
                                        }
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
    )
}

export default ListLesson