import './question.css'
import QuestionImg from '../../asset/question.jpg';






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
              <form>
                <label>
                  Twitter Handle:
                  <input type="text" className='st'  placeholder='*' required/>
                </label>

                <label>
                  Discord id:
                  <input type="text" className='st' placeholder='*' required/>
                </label>

                <label >
                  Level of experience in web3:
                  <input type="text" className='st' placeholder='*' required/>
                </label>

                <label >
                  How did you get to know about Dinero:
                  <input type="text" className='st' placeholder='*' required/>
                </label>

                <label >
                  Why do you want be a part of Dinero:
                  <input type="text" className='st' placeholder='*' required/>
                </label>

                <label >
                  How do you intend to contribute to the growth and development of Dinero:
                  <textarea className='st' placeholder='*' required/>
                </label>
                <button>send</button>
              </form>
            </div> 
        </div>
    </section>
  )
}

export default Question
