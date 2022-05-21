import React, { useEffect } from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const Question = ({ props }) => {
    const { question, listAnswer, setListAnswer } = props;
    const [value, setValue] = React.useState(0);

    const handleChange = (event) => {
        console.log(event.target.value);

        // xóa các câu trả lời cũ
        let indexQuestion = listAnswer.map(item => item.idQuestion).indexOf(question.id);
        if (indexQuestion > -1)
            listAnswer.splice(indexQuestion, 1);

        // cập nhập câu trả lời mới
        let newListAnswer = [
            ...listAnswer,
            {
                idQuestion: question.id,
                answer: event.target.value
            }
        ];
        setListAnswer(newListAnswer);
        setValue(event.target.value);
    };


    useEffect(() => {
        // nếu đã có câu trả lời trước đó thì set giá trị lại
        if (listAnswer.map(item => item.idQuestion).indexOf(question.id) > -1){
            let answer = listAnswer.filter(item => item.idQuestion === question.id)[0].answer;
            // console.log('answer:', answer);
            let indexAnswerBefore = question.listAnswer.indexOf(answer)
            // console.log('indexAnswerBefore:', indexAnswerBefore);
            setValue(question.listAnswer[indexAnswerBefore]);
        }
    }, [])


   

return (
    <FormControl component="fieldset">
        <FormLabel component="legend">{question.title || ''}</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
            {question.listAnswer && question.listAnswer.length > 0 ?
                question.listAnswer.map((item, index) => {
                    return (
                        <FormControlLabel value={item} control={<Radio />} label={item} key={index}/>
                    )
                })
                : null
            }
        </RadioGroup>
    </FormControl>
);
}

export default Question;