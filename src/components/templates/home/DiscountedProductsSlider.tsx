"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./../../../styles/swiperStyles.css";

import { Pagination } from "swiper/modules";
import ShopCard from "@/components/modules/ShopCard";
export const DiscountedProductsSlider = () => {
  return (
    <Swiper
      // onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={1}
      spaceBetween={13}
      breakpoints={{
        640: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 26,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      modules={[Pagination]}
      className="mySwiper rounded !ml-2 cursor-pointer"
    >
      <SwiperSlide className="flex flex-col items-start justify-start !w-[248px]  lg:!w-[272px] md:!h-[280px] lg:!h-auto px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-start justify-start !w-[248px]  lg:!w-[272px] md:!h-[280px] lg:!h-auto px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-start justify-start !w-[248px]  lg:!w-[272px] md:!h-[280px] lg:!h-auto px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-start justify-start !w-[248px]  lg:!w-[272px] md:!h-[280px] lg:!h-auto px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-start justify-start !w-[248px]  lg:!w-[272px] md:!h-[280px] lg:!h-auto px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-start justify-start !w-[248px]  lg:!w-[272px] md:!h-[280px] lg:!h-auto px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-start justify-start !w-[248px]  lg:!w-[272px] md:!h-[280px] lg:!h-auto px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-start justify-start !w-[248px]  lg:!w-[272px] md:!h-[280px] lg:!h-auto px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
        <ShopCard />
      </SwiperSlide>
      <SwiperSlide className="flex flex-col items-start justify-start !w-[248px]  lg:!w-[272px] md:!h-[280px] lg:!h-auto px-6 !bg-light dark:!bg-dark-500 rounded-48 ">
        <ShopCard />
      </SwiperSlide>
    </Swiper>
  );
};
