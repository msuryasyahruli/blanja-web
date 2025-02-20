import React from "react";
import { Swiper } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const Carousel = ({ breakpoints, loop, autoPlay, className, children }) => {
  return (
    <div className={className}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay ]}
        spaceBetween={16}
        navigation
        autoplay={autoPlay}
        pagination={{ clickable: true }}
        loop={loop}
        breakpoints={breakpoints}
        style={{
          "--swiper-navigation-color": "white",
          "--swiper-navigation-size": "24px",
          "--swiper-pagination-color": "red",
        }}
        className="rounded-lg"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Carousel;
