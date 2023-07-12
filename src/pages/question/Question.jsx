import './question.css'
import QuestionImg from '../../asset/question.jpg' 
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination } from 'swiper/modules';
import {BsArrowRight} from 'react-icons/bs'

const Question = () => {
  return (
    <section id="question" className="question">
    <h1 className='header-h1'>join <span>community</span></h1>
        <div className="flex--container">
            <div className="flex--items">
                <img src={QuestionImg} alt="" />
            </div>
            <Swiper
            className="mySwiper flex--items two"
                effect={'cube'}
                grabCursor={true}
                cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
                }}
                pagination={true}
                modules={[EffectCube, Pagination]}
                >
                <SwiperSlide className="question one">
                    <h3>few question to getting into to our nft community</h3>
                    <h3 className='slider'>slide <BsArrowRight className='next' /></h3>
                </SwiperSlide>
                <SwiperSlide className="question">
                  <article className="q">
                    <p>A non-fungible token is a unique digital identifier that is recorded
                    on a blockchain, and is used to certify ownership and authenticity. 
                    </p>
                    <h5>is that ture?</h5>

                  </article>
                  <button className='ans'>ture</button>
                  <button className='ans'>false</button>
                </SwiperSlide>
                <SwiperSlide className="question">
                  <article className="q">
                    <p>A non-fungible token is a unique digital identifier that is recorded
                    on a blockchain, and is used to certify ownership and authenticity. 
                    </p>
                    <h5>is that ture?</h5>

                  </article>
                  <button className='ans'>ture</button>
                  <button className='ans'>false</button>
                </SwiperSlide>
                <SwiperSlide className="question">
                  <article className="q">
                    <p>A non-fungible token is a unique digital identifier that is recorded
                    on a blockchain, and is used to certify ownership and authenticity. 
                    </p>
                    <h5>is that ture?</h5>

                  </article>
                  <button className='ans'>ture</button>
                  <button className='ans'>false</button>
                </SwiperSlide>
                <SwiperSlide className="question">
                  <article className="q">
                    <p>A non-fungible token is a unique digital identifier that is recorded
                    on a blockchain, and is used to certify ownership and authenticity. 
                    </p>
                    <h5>is that ture?</h5>

                  </article>
                  <button className='ans'>ture</button>
                  <button className='ans'>false</button>
                </SwiperSlide>
                <SwiperSlide className="question">
                  <article className="q">
                    <p>A non-fungible token is a unique digital identifier that is recorded
                    on a blockchain, and is used to certify ownership and authenticity. 
                    </p>
                    <h5>is that ture?</h5>

                  </article>
                  <button className='ans'>ture</button>
                  <button className='ans'>false</button>
                </SwiperSlide>
                <SwiperSlide className="question">
                  <article className="q">
                    <p>A non-fungible token is a unique digital identifier that is recorded
                    on a blockchain, and is used to certify ownership and authenticity. 
                    </p>
                    <h5>is that ture?</h5>

                  </article>
                  <button className='ans'>ture</button>
                  <button className='ans'>false</button>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Question
