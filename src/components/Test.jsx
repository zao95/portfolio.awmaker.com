import React from 'react';
import Swiper from 'react-id-swiper';
import "../styles/Test.scss"

const Test = () => {
    const params = {
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true
        }
    }

    return (
        <Swiper {...params}>
            <div>Slide #1</div>
            <div>Slide #2</div>
            <div>Slide #3</div>
            <div>Slide #4</div>
            <div>Slide #5</div>
        </Swiper>
    )
}

export default Test