import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

import "../HomeCatSlider/style.css";

const HomeCatSlider = () => {
  return (
    <div className="homeCatSlider py-8 pt-4">
      <div className="custom-container">
        <Swiper
          slidesPerView={8}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col ">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">FootWear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">Bags</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661105893_well.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661120743_jw.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">Jewellery</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">FootWear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">FootWear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">FootWear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">FootWear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/">
              <div className="item py-7 px-3 bg-white rounded-sm text-center flex items-center justify-center flex-col">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  className="w-[60px] transition-all"
                />
                <h3 className="text-[16px] font-[500]">FootWear</h3>
              </div>
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
