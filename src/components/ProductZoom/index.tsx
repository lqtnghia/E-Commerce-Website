import React, { useRef, useState } from "react";
import InnerImageZoom from "react-inner-image-zoom";
import "react-inner-image-zoom/lib/styles.min.css";

import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const ProductZoom = () => {
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const zoomSliderBig = useRef<SwiperRef | null>(null);
  const zoomSliderSml = useRef<SwiperRef | null>(null);

  const goto = (index: number) => {
    setSlideIndex(index);
    zoomSliderSml.current?.swiper.slideTo(index);
    zoomSliderBig.current?.swiper.slideTo(index);
  };

  return (
    <div className="flex gap-3">
      <div className="slider w-[15%]">
        <Swiper
          ref={zoomSliderSml}
          direction="vertical"
          slidesPerView={5}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="zoomProductSliderThumbs h-[500px] "
        >
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 0 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => {
                goto(0);
              }}
            >
              <img
                src="https://thomasnguyentailor.com/wp-content/uploads/2025/02/may-vest-mau-xanh-da-troi-thomas-nguyen-1000x1000.webp"
                className="w-full group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 1 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => {
                goto(1);
              }}
            >
              <img
                src="https://thomasnguyentailor.com/wp-content/uploads/2025/03/may-vest-mau-xanh-da-troi-dep-ben-sky-blue-thomas-nguyen.webp"
                className="w-full group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 2 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => {
                goto(2);
              }}
            >
              <img
                src="https://thomasnguyentailor.com/wp-content/uploads/2025/02/may-vest-mau-xanh-da-troi-sky-blue-thomas-nguyen.webp"
                className="w-full group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 3 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => {
                goto(3);
              }}
            >
              <img
                src="https://thomasnguyentailor.com/wp-content/uploads/2025/02/may-vest-mau-xanh-da-troi-sky-blue-tui-hong-thomas-nguyen.webp"
                className="w-full group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 4 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => {
                goto(4);
              }}
            >
              <img
                src="https://thomasnguyentailor.com/wp-content/uploads/2025/02/may-vest-mau-xanh-da-troi-sky-blue-lop-lot-ao-vest-thomas-nguyen-1000x1000.webp"
                className="w-full group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`item rounded-md overflow-hidden cursor-pointer group ${
                slideIndex === 5 ? "opacity-100" : "opacity-30"
              }`}
              onClick={() => {
                goto(5);
              }}
            >
              <img
                src="https://thomasnguyentailor.com/wp-content/uploads/2025/02/may-vest-mau-xanh-da-troi-sky-blue-quan-tay-thomas-nguyen.webp"
                className="w-full group-hover:scale-105"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
      <div className="zoomContainer w-[85%] h-[500px] overflow-hidden rounded-md">
        <Swiper
          ref={zoomSliderBig}
          slidesPerView={1}
          spaceBetween={0}
          navigation={false}
        >
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://thomasnguyentailor.com/wp-content/uploads/2025/02/may-vest-mau-xanh-da-troi-thomas-nguyen-1000x1000.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://thomasnguyentailor.com/wp-content/uploads/2025/03/may-vest-mau-xanh-da-troi-dep-ben-sky-blue-thomas-nguyen.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://thomasnguyentailor.com/wp-content/uploads/2025/02/may-vest-mau-xanh-da-troi-sky-blue-thomas-nguyen.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://thomasnguyentailor.com/wp-content/uploads/2025/02/may-vest-mau-xanh-da-troi-sky-blue-tui-hong-thomas-nguyen.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://thomasnguyentailor.com/wp-content/uploads/2025/02/may-vest-mau-xanh-da-troi-sky-blue-lop-lot-ao-vest-thomas-nguyen-1000x1000.webp"
            />
          </SwiperSlide>
          <SwiperSlide>
            <InnerImageZoom
              zoomType="hover"
              zoomScale={1}
              src="https://thomasnguyentailor.com/wp-content/uploads/2025/02/may-vest-mau-xanh-da-troi-sky-blue-quan-tay-thomas-nguyen.webp"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default ProductZoom;
