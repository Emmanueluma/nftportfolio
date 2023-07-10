import './question.css'
import QuestionImg from '../../asset/question.jpg' 
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import { EffectCube, Pagination } from 'swiper/modules';

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
                <SwiperSlide className="question">Slide 1</SwiperSlide>
                <SwiperSlide className="question">Slide 2</SwiperSlide>
                <SwiperSlide className="question">Slide 3</SwiperSlide>
                <SwiperSlide className="question">Slide 4</SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Question
