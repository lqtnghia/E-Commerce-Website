import React, { useContext } from "react";
import "../ProductItem/style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { IoIosGitCompare } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { CiShare1 } from "react-icons/ci";
import { MdZoomOutMap } from "react-icons/md";
import { Button } from "@mui/material";
import { MyContext } from "../../App";

const ProductItem = () => {
  const context = useContext(MyContext);

  const handleOpenModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (context) {
      context.setOpenProductDetailsModal(true);
    }
  };
  return (
    <div className="productItem rounded-md shadow-lg overflow-hidden border-1 border-[rgba(0,0,0,0.1)]">
      <div className="group imgWrapper rounded-md overflow-hidden w-[100%] h-[220px] relative">
        <Link to="/">
          <div className="img overflow-hidden h-[220px]">
            <img
              src="https://locphuc.com.vn/Content/Images/122024/DMR0078ARM.WG01A/vo-nhan-nam-kim-cuong-DMR0078ARM-WG01A-g1.jpg"
              className="w-full"
            />
            <img
              src="https://locphuc.com.vn/Content/Images/122024/DMR0078ARM.WG01A/vo-nhan-nam-kim-cuong-DMR0078ARM-WG01A-g3.jpg"
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
      <div className="info p-3 py-5 bg-[#fff] ">
        <h6 className="text-[13px] !font-[400]">
          <Link to="/" className="link transition-all">
            Diamond rings
          </Link>
        </h6>
        <h3 className="text-[13px] title mt-1 font-[600] mb-1 text-[#000]">
          <Link to="/" className="link transition-all">
            Men's Diamond Ring Case
          </Link>
        </h3>

        <Rating name="read-only" value={4} readOnly size="small" />

        <div className="flex items-center gap-4">
          <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
            $58.00
          </span>
          <span className="price text-primary-main text-[15px]  font-[600]">
            $58.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
