import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { projectSlider, team } from "./Data";
import "swiper/css/scrollbar";
import { Scrollbar, FreeMode } from "swiper";
import { TeamBox } from "./SmallComps";

const Slider6 = ({ data }) => {
    return (
        <Swiper
            slidesPerView={5}
            spaceBetween={20}
            scrollbar={true}
            freeMode
            modules={[Scrollbar, FreeMode]}
            className=""
            breakpoints={{
                1280: {
                    slidesPerView: 5,
                },
                1000: {
                    slidesPerView: 4,
                },
                700: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                0: {
                    slidesPerView: 2,
                    spaceBetween: 10,
                },
            }}
        >
            {team.map((item, index) => {
                return (
                    <SwiperSlide className="pb-10" key={index}>
                        <TeamBox
                            img={item.img}
                            name={item.name}
                            position={item.position}
                        />
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

export default Slider6;
