import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import './slider.css';

const Slider = () => {
    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            loop={true}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }}
            autoplay={{
                delay: 5000,
            }}
            className="swiper-container"
        >
            <SwiperSlide>
                <img
                    src="https://media.istockphoto.com/id/1478374885/photo/joyful-family-watching-movie-in-cinema.jpg?s=612x612&w=0&k=20&c=U0Qp-c2vCTUPG51ZOD2H7KcrByyBKow3r9wSR2QMFZU="
                    alt="Popcorn and Drink"
                />
                <div className="overlay-text">FREQUENTLY ASKED QUESTIONS</div>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoS4C1pLvZfnxsK4EjHSgKxyvtYLelahnJ_A&s"
                    alt="Popcorn and Drink"
                />
                <div className="overlay-text">WEBINAR DETAILS</div>
            </SwiperSlide>
            <SwiperSlide>
                <img
                    src="https://galalitescreens.com/wp-content/uploads/2024/01/Watching-a-3D-movie-in-cinema-800x533.webp"
                    alt="Popcorn and Drink"
                />
                <div className="overlay-text">JOIN US TODAY!</div>
            </SwiperSlide>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
        </Swiper>
    );
};

export default Slider;