import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// modules
import { Navigation, Autoplay } from "swiper/modules";

const Slider = () => {
  const images = [
    "/images/el1.png",
    "/images/el2.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUciA2c5epVD4BttPOXq2maFayDdUNbKI5fg&s",
    "https://www.tkelevator.com/media/usa_canada/blog_1/20220322_fedexforum_memphis_309_l_freight-open-empty_1_image_w1200_h630.webp",
  ];

  return (
    <Swiper
      navigation={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      modules={[Navigation, Autoplay]}
      className="heroSwiper"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <div className="slide-wrapper rounded-md overflow-hidden">
            <img src={img} alt="Luxury Elevator" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
