import React, { useState } from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import Card from './Card'

export default function Recents() {
  const [margin, setMargin] = useState(0)
  const slider = () => {
    setMargin(margin+360)
  }
  return (
    <section className='md:m-auto md:w-4/5'>
      <div className='sectionCards'>
        <h1 className='sectionCardsTitle'>Recientes</h1>
        <p className='sectionCardsInfo'>Las personas últimamente están hablando de esto</p>
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
            navigation
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
