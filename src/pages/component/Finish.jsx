import React from 'react'
import QuestionBank from './QuestionBank'
const Finish = ({score, setScore, setquiz}) => {
  const restart = () => {
    setScore(0);
    setquiz('menu')
  }
  return (
    <div className='question'>
      <h3 className='score'>{`${score} / ${QuestionBank.length}`}</h3>
      {
        score == QuestionBank ? 
        (
          <a className="btn">join</a>
        )
        :
        (
          <button onClick={() => restart()} className='btn'>restart</button>
        ) 
      }
    </div>
  )
}

export default Finish
