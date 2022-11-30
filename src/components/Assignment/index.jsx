import AppBar from '@material-ui/core/AppBar'
import Box from '@material-ui/core/Box'
import {makeStyles} from '@material-ui/core/styles'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'
import PropTypes from 'prop-types'
import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import swal from 'sweetalert'
import ELearningContext from '../../contexts/f8.context'
import CodeQuestion from '../CodeQuestion/CodeQuestion'
import Question from '../Question'
import question from "../Question";
import {compileCode} from "../../utils/compileCode";

const Assignment = ({props}) => {
    const {idItem, setCheckAssignment} = props
    const f8Context = new ELearningContext()
    const navigate = useNavigate()
    const [listAssignment, setListAssignment] = useState([])
    const [listAnswer, setListAnswer] = useState([])
    const [listCodeAnswer, setListCodeAnswer] = useState({})

    useEffect(async () => {
        let list = await f8Context.getListAssignment(idItem)
        console.log('list assignment:', list)
        setListAssignment(list.data)

        if (list.data) {
            list.data.foreach((item) => {
                let listCodeAnswer = {}
                if (item.type === 2) {
                    listCodeAnswer = {
                        ...listCodeAnswer,
                        [item.id]: {
                            ...item,
                            code: item.code_assign,
                        },
                    }
                }
                setListCodeAnswer(listCodeAnswer)
            })
        }
    }, [])

    const classes = useStyles()
    const [value, setValue] = React.useState(0)

    const handleChange = (event, newValue) => {
        setValue(newValue)
    }
    const handleSubmit = async () => {
        const finishMultipleChoice =
            listAnswer.length === listAssignment.length - Object.entries(listCodeAnswer).length

        let finishCode = true

        for (const [, value] of Object.entries(listCodeAnswer)) {
            console.log({test: value.code})
            if (!value.code) {
                finishCode = false
            }
        }
        let countRightAnswer = 0
        console.log({finishCode})
        console.log({listAnswer, listAssignment, listCodeAnswer})
        if (finishMultipleChoice && finishCode) {
            for (const item of listAnswer) {
                const question = listAssignment.find(question => question.id === item.idQuestion)
                if (question) {
                    const {listAnswer, rightAnswer} = question
                    if (listAnswer[rightAnswer] === item.answer) {
                        countRightAnswer++
                    }
                }
            }

            for (const [, value] of Object.entries(listCodeAnswer)) {
                const {code, code_test, testcase} = value
                let fullCode = `${code} \n ${code_test}`
                try {
                    const {data} = await compileCode(fullCode)
                    const {stdout} = data
                    if (stdout === testcase + '\n') {
                        countRightAnswer++
                    }
                } catch (e) {

                }
            }
            
            swal({
                title: countRightAnswer === listAssignment.length ? 'Chúc mừng' : 'Hãy kiểm tra lại',
                text: 'Bạn đã trả lời đúng ' + countRightAnswer + '/' + listAssignment.length + ' câu',
                icon: countRightAnswer === listAssignment.length ? 'success' : 'warning',
                button: 'OK',
            })
        } else {
            swal({
                title: 'Thông báo',
                text: 'Bạn chưa hoàn thành bài tập',
                icon: 'warning',
                button: 'OK',
            })
        }
    }

    useEffect(() => {
        console.log(listAnswer)
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
                                <Tab
                                    label={'Câu hỏi ' + Number(index + 1)}
                                    {...a11yProps(index)}
                                    key={index}
                                />
                            )
                        })}
                    </Tabs>
                </AppBar>
                {listAssignment.map((question, index) => {
                    return (
                        <TabPanel value={value} index={index} key={index}>
                            {question.type === 1 ? (
                                <Question props={{question, listAnswer, setListAnswer}}/>
                            ) : (
                                <CodeQuestion
                                    listCodeAnswer={listCodeAnswer}
                                    question={question}
                                    setListCodeAnswer={setListCodeAnswer}
                                />
                            )}
                        </TabPanel>
                    )
                })}
            </div>
            <div className="flex justify-end mx-3">
                <button
                    className="hover:bg-gray-200 rounded-2xl text-gray-500 px-2 py-1 font-semibold mx-2"
                    onClick={() => setCheckAssignment(false)}
                >
                    Quay lại bài học
                </button>
                <button
                    className="rounded-2xl text-white bg-orange-500 px-2 py-1 font-semibold hover:opacity-75"
                    onClick={handleSubmit}
                >
                    Nộp bài
                </button>
            </div>
        </div>
    )
}
export default Assignment

//===============================================================================================

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
}))

function TabPanel(props) {
    const {children, value, index, ...other} = props

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
    )
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
}

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    }
}
