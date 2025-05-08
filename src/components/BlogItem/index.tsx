import React from "react";
import { CiTimer } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="blogItem group">
      <div className="imgWrapper w-full overflow-hidden rounded-md cursor-pointer relative">
        <img
          src="https://serviceapi.spicezgold.com/download/1741759053899_5-2.jpg"
          className="w-full transition-all group-hover:scale-105 group-hover:rotate-1"
          alt="blog image"
        />

        <span className="flex items-center justify-center text-white absolute bottom-[15px] right-[15px] z-50 bg-primary-main rounded-md p-1 text-[11px] font-[500] gap-1">
          <CiTimer /> 5 APRIL, 2025
        </span>
      </div>
      <div className="info py-4">
        <h2 className="text-[15px] font-[600] text-black">
          <Link to="/" className="link">
            Nullam ullamcorper ornare molestie
          </Link>
        </h2>
        <p className="text-[13px] font-[400] text-[rgba(0,0,0,0.8)] mb-4">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <Link
          to="/"
          className="link font-[500] text-[14px] flex items-center gap-1"
        >
          Read More
          <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;
