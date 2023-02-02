import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Card from './Card'
import 'swiper/css';

export default function Suggestions() {
  const [margin, setMargin] = useState(0)
  return (
    <section className='md:m-auto md:w-4/5'>
        <div className='sectionCards'>
        <h1 className='sectionCardsTitle'>Sugerencias para ti</h1>
        <p className='sectionCardsInfo'>Publicaciones que podrías colaborar</p>
        </div>
        <div className='relative'>
        <Swiper
            breakpoints={{
              340: {
                width: 340,
                slidesPerView: 1,
              },
              640: {
                width: 640,
                slidesPerView: 2,
              },
              980: {
                width: 980,
                slidesPerView: 3,
              },
              1280: {
                width: 1280,
                slidesPerView: 4,
              },
              1616: {
                width: 1616,
                slidesPerView: 5,
              },
            }}
            spaceBetween={20}
            >
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
              <SwiperSlide><Card /></SwiperSlide>
            </Swiper>
          </div>
    </section>
  )
}
