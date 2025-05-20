import { Button } from "@mui/material";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const CartPanel = () => {
  const productId = 1;
  return (
    <>
      <div className="scroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden py-3 px-4">
        <div className="cartItem w-full flex items-center gap-4 border-b border-[rgba(0,0,0,0.1)] pb-4">
          <div className="img w-[25%] overflow-hidden h-[80px] rounded-md">
            <Link to="/product/12" className="block group">
              <img
                src="//product.hstatic.net/200000410665/product/_hbk1614ccc_d3dccff8a3cb4b518d6a075118c9dfdc_grande.jpg"
                className="w-full group-hover:scale-105"
              />
            </Link>
          </div>
          <div className="info w-[75%] pr-5 relative">
            <h4 className="text-[14px] font-[500]">
              <Link to="/product/12" className="link transition-all">
                Giày Sneaker MULGATI HX487A{" "}
              </Link>
            </h4>
            <p className="flex items-center gap-5 mt-2 mb-2">
              <span>
                Quantity : <span>2</span>
              </span>
              <span className="text-primary-main font-black">Price : $25</span>
            </p>
            <RiDeleteBin6Line className="absolute top-[10px] right-[10px] text-[20px] link transition-all cursor-pointer" />
          </div>
        </div>
      </div>
      <br />

      <div className="bottomSec absolute bottom-[10px] left-[10px] w-full pr-5">
        <div className="bottomInfo w-full py-3 px-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="texxt-[14px] font-[600]">1 item</span>
            <span className="text-primary-main font-bold">$86.00</span>
          </div>
          <div className="flex items-center justify-between w-full">
            <span className="texxt-[14px] font-[600]">Shipping</span>
            <span className="text-primary-main font-bold">$8.00</span>
          </div>
        </div>

        <div className="bottomInfo w-full py-3 px-4 border-t border-[rgba(0,0,0,0.1)] flex items-center justify-between flex-col">
          <div className="flex items-center justify-between w-full">
            <span className="texxt-[14px] font-[600]">Total</span>
            <span className="text-primary-main font-bold">$94.00</span>
          </div>
          <br />
          <div className="flex items-center justify-center gap-5 w-full">
            <Link to="/cart" className="w-[50%]">
              <Button className="btn-org btn-lg w-full">View Cart</Button>
            </Link>
            <Link to="/checkout" className="w-[50%]">
              <Button className="btn-org btn-lg w-full">Check Out</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPanel;
