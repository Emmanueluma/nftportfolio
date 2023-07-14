import React, { useState } from 'react'
import QuestionBank from './QuestionBank'

const Quiz = ({ score, setScore, setquiz }) => {
    const [currQuiz, setCurrQuiz] = useState(0);
    const [presentQuiz, setPresentQuiz] = useState(1);
    const [optionChosen, setOptionChosen] = useState('');
    console.log(score)
    const next = () => { 
        if(optionChosen == QuestionBank[currQuiz].answer){
            setScore(prev => prev + 1);
            setCurrQuiz(prev => prev + 1);
            setPresentQuiz(prev => prev + 1);
        }else{
            setCurrQuiz(prev => prev + 1);
            setPresentQuiz(prev => ++prev);
        }
    }
    const finish = () => {
        if(optionChosen == QuestionBank[currQuiz].answer){
            setScore(prev => prev + 1);
            console.log(score)
            setquiz('finish')
        }else{
            setquiz('finish')
        }
    }
  return (
    <div className='question two'>
      <h3>{QuestionBank[currQuiz].question}</h3>
      <button onClick={() => setOptionChosen(QuestionBank[currQuiz].optionA)} className='options'>{QuestionBank[currQuiz].optionA}</button>
      <button onClick={() => setOptionChosen(QuestionBank[currQuiz].optionB)} className='options'>{QuestionBank[currQuiz].optionB}</button>
      <button onClick={() => setOptionChosen(QuestionBank[currQuiz].optionC)} className='options'>{QuestionBank[currQuiz].optionC}</button>
      <button onClick={() => setOptionChosen(QuestionBank[currQuiz].optionD)} className='options'>{QuestionBank[currQuiz].optionD}</button>
      {
        presentQuiz == QuestionBank.length ? 
            (
                <button onClick={() => finish()} className='next'>finish quiz</button>
            ) :
            (
                <button disabled={optionChosen == '' && true} onClick={next} className={`next ${optionChosen == '' && 'disabled'}`}>next</button>
            ) 
            
        }
      
    </div>
  )
}

export default Quiz
