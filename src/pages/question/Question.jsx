import './question.css'
import QuestionImg from '../../asset/question.jpg';
import Menu from '../component/Menu'
import { useState } from 'react';
import Quiz from '../component/Quiz';
import Finish from '../component/Finish';





const Question = () => {
  const [quiz, setQuiz] = useState('menu');
  const [score, setScore] = useState(0);
  return (
    <section id="question" className="maxWidth question">
    <h1 className='header-h1'>join <span>community</span></h1>
        <div className="flex--container">
            <div className="flex--items">
                <img src={QuestionImg} alt="" />
            </div>
            <div
            className="flex--items two">
                {quiz === 'menu' && <Menu setquiz={setQuiz}  />}
                {quiz === 'quiz' && <Quiz score={score} setScore={setScore} setquiz={setQuiz}/>}
                {quiz === 'finish' && <Finish score={score} setScore={setScore} setquiz={setQuiz} />}
            </div> 
        </div>
    </section>
  )
}

export default Question
