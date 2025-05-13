import React, { useContext } from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { IoIosGitCompare } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { MdZoomOutMap } from "react-icons/md";
import { Button } from "@mui/material";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MyContext } from "../../App";

const ProductItemViewList = () => {
  const context = useContext(MyContext);

  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (context) {
      context.setOpenProductDetailsModal(true);
    }
  };
  return (
    <div className="productItem flex items-center rounded-md shadow-lg overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className="group imgWrapper rounded-md overflow-hidden w-[25%] h-[220px] relative">
        <Link to="/">
          <div className="img overflow-hidden h-[220px]">
            <img
              src="https://serviceapi.spicezgold.com/download/1742441181779_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-0-202208221207.webp"
              className="w-full"
            />
            <img
              src="https://serviceapi.spicezgold.com/download/1742441181780_apple-iphone-13-128-gb-pink-digital-o491997703-p590798557-3-202208221207.jpeg"
              className="w-full absolute transition-all duration-700 top-0 left-0 opacity-0 group-hover:opacity-100 group-hover:scale-105"
            />
          </div>
        </Link>
        <span className="discount absolute flex items-center top-[10px] left-[10px] z-50 bg-primary-main text-white rounded-md p-1 text-[12px] font-[500]">
          10%
        </span>
        <div className="actions absolute top-[-200px] right-[5px] z-50 flex flex-col gap-2 items-center w-[50px] transition-all duration-700 group-hover:top-[15px] opacity-0 group-hover:opacity-100">
          <Button
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full  !bg-white !text-black hover:!text-white hover:!bg-primary-main group
          "
          >
            <IoMdHeartEmpty className="text-[18px]" />
          </Button>
          <Button
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!text-white hover:!bg-primary-main group
          "
          >
            <IoIosGitCompare className="text-[18px]" />
          </Button>
          <Button
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!text-white hover:!bg-primary-main group
          "
            onClick={handleOpenModal}
          >
            <MdZoomOutMap className="text-[18px]" />
          </Button>
          <Button
            className="!w-[35px] !h-[35px] !min-w-[35px] !rounded-full !bg-white !text-black hover:!text-white hover:!bg-primary-main group
          "
          >
            <CiShare1 className="text-[18px]" />
          </Button>
        </div>
      </div>
      <div className="info p-3 py-5 px-8 bg-[#fff] w-[75%]">
        <h6 className="text-[15px] !font-[400]">
          <Link to="/" className="link transition-all">
            Apple
          </Link>
        </h6>
        <h3 className="text-[18px] title mt-3 font-[600] mb-3 text-[#000]">
          <Link to="/" className="link transition-all">
            Apple iPhone 15 (Blue, 512G, Titan, VIP)
          </Link>
        </h3>

        <p className="text-[14px] mb-3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <Rating name="read-only" value={4} readOnly size="small" />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="price text-primary-main text-[15px]  font-[600]">
            $58.00
          </span>
        </div>

        <div className="mt-3">
          <Button className="btn-org flex items-center gap-2">
            <MdOutlineShoppingCart className="text-[20px]" />
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItemViewList;
