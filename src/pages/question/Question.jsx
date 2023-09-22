import './question.css'
import QuestionImg from '../../asset/question.jpg';
import {Link} from 'react-router-dom'






const Question = () => {
  return (
    <section id="question" className="maxWidth question">
    <h1 className='header-h1'>join <span>community</span></h1>
        <div className="flex--container">
            <div className="flex--items">
                <img src={QuestionImg} alt="" />
            </div>
            <div
            className="flex--items two">
              <h3>Fill the form below to join us.</h3>
              <Link to='/form' className='btn'>start</Link>
            </div> 
        </div>
    </section>
  )
}

export default Question
