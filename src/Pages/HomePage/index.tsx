import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ProductsSlider from "../../components/ProductsSlider";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";
import BlogItem from "../../components/BlogItem";
import HomeBannerV2 from "../../components/HomeSliderV2";
import BannerBoxV2 from "../../components/BannerBoxV2";
import AdsBannerSliderV2 from "../../components/AdsBannerSliderV2";

const HomePage = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div>
      <HomeSlider />
      <section className="py-6">
        <div className="custom-container flex items-center gap-5">
          <div className="part1 w-[70%]">
            <HomeBannerV2 />
          </div>
          <div className="part2 w-[30%] flex items-center justify-between flex-col gap-5">
            <BannerBoxV2
              info="left"
              image="https://serviceapi.spicezgold.com/download/1741663408792_1737020756772_New_Project_1.png"
            />
            <BannerBoxV2
              info="right"
              image="https://serviceapi.spicezgold.com/download/1741664665391_1741497254110_New_Project_50.jpg"
            />
          </div>
        </div>
      </section>

      <HomeCatSlider />

      <section className="py-8 bg-white">
        <div className="custom-container">
          <div className="flex items-center justify-between  ">
            <div className="leftSec">
              <h2 className="text-[20px] font-[600]">Popular Products</h2>
              <p className="text-[14px] font-[400]">
                Do not miss the current offers until the end of March
              </p>
            </div>

            <div className="rightSec w-[60%]">
              <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                <Tab label="FootWear" />
                <Tab label="Fashion" />
                <Tab label="Electronics" />
                <Tab label="Bags" />
                <Tab label="Groceries" />
                <Tab label="Beauty" />
                <Tab label="Wellness" />
                <Tab label="Jewellery" />
              </Tabs>
            </div>
          </div>

          <ProductsSlider items={6} />
        </div>
      </section>

      <section className="bg-white py-4 pt-2">
        <div className="custom-container">
          <div className="freeShipping w-[80%] m-auto p-4 border border-primary-main flex items-center justify-between rounded-md mb-7">
            <div className="col1 flex items-center gap-4">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="text-[20px] font-[600] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2 ">
              <p className="text-[20px] font-[500]">
                Free Delivery Now On Your First Order And Over $200
              </p>
            </div>
            <div className="col3">
              <p className=" text-[25px] font-bold">- Only $200*</p>
            </div>
          </div>
          <AdsBannerSliderV2 items={4} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="custom-container">
          <h2 className="text-[20px] font-[600]">Latest Products</h2>
          <ProductsSlider items={6} />
          <AdsBannerSlider items={3} />
        </div>
      </section>

      <section className="py-5 pt-0 bg-white">
        <div className="custom-container">
          <h2 className="text-[20px] font-[600]">Featured Products</h2>
          <ProductsSlider items={6} />
        </div>
      </section>

      <section className="py-5  pt-0 bg-white blogSection">
        <div className="custom-container">
          <h2 className="text-[20px] font-[600] pb-8">From The Blog</h2>
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            navigation={true}
            modules={[Navigation]}
            className="blogSlider"
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
