import React, { useState, useEffect } from 'react'
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/a11y/a11y.scss'
import 'swiper/components/controller/controller.scss'
import 'swiper/components/effect-coverflow/effect-coverflow.scss'
import 'swiper/components/effect-cube/effect-cube.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import 'swiper/components/effect-flip/effect-flip.scss'
import 'swiper/components/lazy/lazy.scss'
import 'swiper/components/navigation/navigation.scss'
import 'swiper/components/pagination/pagination.scss'
import 'swiper/components/scrollbar/scrollbar.scss'
import 'swiper/components/thumbs/thumbs.scss'
import 'swiper/components/zoom/zoom.scss'

const SwiperComponent = (props) => {
    SwiperCore.use([Navigation, Pagination, A11y])
    let components = []
    props.contents.forEach((el, idx) => {
        components.push(<SwiperSlide key={idx}>{el}</SwiperSlide>)
    })
    const [width, setWidth] = useState(window.innerWidth)
    useEffect(() => {
        setWidth(window.innerWidth)
        console.log(width)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.innerWidth])
    return (
        <Swiper
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            spaceBetween={50}
            slidesPerView={props.application === true ? 3 : 1}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
            {components}
        </Swiper>
    )
}

export default SwiperComponent