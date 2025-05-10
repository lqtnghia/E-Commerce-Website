import React from "react";
import "../BannerBoxV2/style.css";
import { Link } from "react-router-dom";

interface IProps {
  info: string;
  image: string;
  link?: string;
}

const BannerBoxV2 = (props: IProps) => {
  return (
    <div className="bannerBoxV2 w-full overflow-hidden rounded-sm group relative">
      <img
        src={props.image}
        className="w-full transition-all duration-150 group-hover:scale-105 "
      />
      <div
        className={`info absolute p-5 top-0 ${
          props.info === "left" ? "left-0" : "right-0 pl-20"
        } w-[70%] h-[100%] z-50 flex items-center justify-center flex-col gap-2`}
      >
        <h2 className="text-[18px] font-[500]">
          Buy Men's Bags with low price
        </h2>
        <span className="text-[20px] font-[600] text-primary-main w-full">
          $129.00
        </span>
        <div className="w-full">
          <Link to="/" className="text-[16px] font-[600] link">
            SHOP NOW
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BannerBoxV2;
