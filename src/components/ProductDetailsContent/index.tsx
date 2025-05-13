import { Button, Rating } from "@mui/material";
import React, { useState } from "react";
import QuantityBox from "../QuantityBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoIosGitCompare, IoMdHeartEmpty } from "react-icons/io";

const ProductDetailsContent = () => {
  const [productActionIndex, setProductActionIndex] = useState<number | null>(
    null
  );
  return (
    <>
      <h1 className="text-[24px] font-[600] mb-2">
        Men's 3-piece suit | Sky Blue | Sewing a blue vest
      </h1>
      <div className="flex items-center gap-3">
        <span className="text-[13px] text-gray-400">
          Brands:{" "}
          <span className="text-black font-[500] opacity-75">CLAFOUTIS</span>
        </span>
        <Rating name="read-only" value={4} readOnly size="small" />
        <span className="text-[13px] cursor-pointer text-gray-400">
          Review (6)
        </span>
      </div>
      <div className="flex items-center gap-4 mt-4">
        <span className="oldPrice line-through text-gray-500 text-[20px] font-[500]">
          $58.00
        </span>
        <span className="price text-primary-main text-[20px]  font-[600]">
          $58.00
        </span>
        <span className="text-[14px]">
          Available in stock:{" "}
          <span className="text-[14px] font-bold text-green-600">
            150 items
          </span>
        </span>
      </div>
      <p className="mt-3 pr-10 mb-5">
        Sky Blue 3-piece men's suit includes a suit jacket, a waistcoat, and a
        trouser. Bright tones like sky blue are an extremely suitable choice for
        summer because of their ability to better protect the skin from
        ultraviolet rays. Fabric from the high-end Vercelli brand helps the Sky
        Blue suit have a luxurious, smooth look.
      </p>

      <div className="flex items-center gap-3">
        <span>Size:</span>
        <div className="flex items-center gap-1 actions">
          <Button
            className={`${
              productActionIndex === 0 ? "!bg-primary-main !text-white" : ""
            }`}
            onClick={() => {
              setProductActionIndex(0);
            }}
          >
            S
          </Button>
          <Button
            className={`${
              productActionIndex === 1 ? "!bg-primary-main !text-white" : ""
            }`}
            onClick={() => {
              setProductActionIndex(1);
            }}
          >
            M
          </Button>
          <Button
            className={`${
              productActionIndex === 2 ? "!bg-primary-main !text-white" : ""
            }`}
            onClick={() => {
              setProductActionIndex(2);
            }}
          >
            L
          </Button>
          <Button
            className={`${
              productActionIndex === 3 ? "!bg-primary-main !text-white" : ""
            }`}
            onClick={() => {
              setProductActionIndex(3);
            }}
          >
            XL
          </Button>
        </div>
      </div>

      <p className="text-[14px] mt-5 mb-2 text-[#000]">
        Free Shipping (Est. Delivery Time 2-3 Days)
      </p>

      <div className="flex items-center gap-4 py-4">
        <div className="quantityBoxWrapper w-[70px]">
          <QuantityBox />
        </div>
        <div>
          <Button className="btn-org flex items-center gap-2">
            <MdOutlineShoppingCart className="text-[22px]" />
            Add to cart
          </Button>
        </div>
      </div>
      <div className="flex items-center gap-4 mt-6">
        <div className="flex items-center gap-2 link cursor-pointer text-[15px] font-[500]">
          <IoMdHeartEmpty className="text-[18px]" /> Add to Wishlist
        </div>
        <div className="flex items-center gap-2 link cursor-pointer text-[15px] font-[500]">
          <IoIosGitCompare className="text-[18px]" /> Add to Compare
        </div>
      </div>
    </>
  );
};

export default ProductDetailsContent;
