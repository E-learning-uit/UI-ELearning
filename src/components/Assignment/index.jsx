
import ELearningContext from '../../contexts/f8.context';
import { useEffect, useState, useMemo, useRef } from 'react'
import { useNavigate, useParams, useLocation, Link } from 'react-router-dom';
import Question from '../Question';
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import swal from 'sweetalert';


const Assignment = ({ props }) => {
    const { idItem, setCheckAssignment } = props;
    const f8Context = new ELearningContext();
    const navigate = useNavigate();
    const [listAssignment, setListAssignment] = useState([]);
    const [listAnswer, setListAnswer] = useState([]);

    useEffect(async () => {
        let list = await f8Context.getListAssignment(idItem)
        console.log('list assignment:', list);
        setListAssignment(list.data);
    }, [])



    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleSubmit = () => {
        if (listAnswer.length === listAssignment.length) {
            let rightAnswer = 0;
            listAnswer.sort((a, b) => a.idQuestion > b.idQuestion ? 1 : -1); // sx lại để dễ lọc theo index lun
            for (let i = 0; i < listAssignment.length; i++) {
                let indexAnswerClient = listAssignment[i].listAnswer.indexOf(listAnswer[i].answer);
                console.log('indexAnswerClient:', indexAnswerClient);
                if (indexAnswerClient === listAssignment[i].rightAnswer) {
                    rightAnswer++;
                }
            }
            console.log('rightAnswer:', rightAnswer);
            swal({
                title: rightAnswer == listAssignment.length ? "Chúc mừng" : "Hãy kiểm tra lại",
                text: "Bạn đã trả lời đúng " + rightAnswer + "/" + listAssignment.length + " câu",
                icon: rightAnswer == listAssignment.length ? "success" : "warning",
                button: "OK",
            });
        }
        else {
            swal({
                title: "Thông báo",
                text: "Bạn chưa hoàn thành bài tập",
                icon: "warning",
                button: "OK",
            });
        }
    }

    useEffect(() => {
        console.log(listAnswer);
    }, [listAnswer])
    return (
        <div>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {listAssignment.map((item, index) => {
                            return (
                                <Tab label={'Câu hỏi ' + Number(index + 1)} {...a11yProps(index)} key={index}/>
                            )
                        })}
                    </Tabs>
                </AppBar>
                {listAssignment.map((question, index) => {
                    return (
                        <TabPanel value={value} index={index} key={index}>
                            <Question props={{ question, listAnswer, setListAnswer }} />
                        </TabPanel>
                    )
                })}
            </div>
            <div className='flex justify-end mx-3'>
                <button className='hover:bg-gray-200 rounded-2xl text-gray-500 px-2 py-1 font-semibold mx-2' onClick={() => setCheckAssignment(false)}>Quay lại bài học</button>
                <button className='rounded-2xl text-white bg-orange-500 px-2 py-1 font-semibold hover:opacity-75' onClick={handleSubmit}>Nộp bài</button>
            </div>
        </div>
    );
}
export default Assignment

//===============================================================================================

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}));
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}