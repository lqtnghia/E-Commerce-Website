import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { FaAngleDown } from "react-icons/fa";
import { Rating } from "@mui/material";

interface IProps {
  size: string;
  qty: number;
}

const CartItem = (props: IProps) => {
  const [sizeAnchorEl, setSizeAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedSize, setCartItem] = useState<string>(props.size);
  const openSize = Boolean(sizeAnchorEl);
  const [qtyAnchorEl, setQtyAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedQty, setSelectedQty] = useState<number>(props.qty);
  const openQty = Boolean(qtyAnchorEl);
  const handleClickSize = (event: React.MouseEvent<HTMLButtonElement>) => {
    setSizeAnchorEl(event.currentTarget);
  };
  const handleCloseSize = (value: any) => {
    setSizeAnchorEl(null);
    if (value !== null) {
      setCartItem(value);
    }
  };
  const handleClickQty = (event: React.MouseEvent<HTMLButtonElement>) => {
    setQtyAnchorEl(event.currentTarget);
  };
  const handleCloseQty = (value: any) => {
    setQtyAnchorEl(null);
    if (value !== null) {
      setSelectedQty(value);
    }
  };
  return (
    <div className="cartItem p-3 w-full flex items-center gap-4 pb-5 border-b border-[rgba(0,0,0,0.1)]">
      <div className="img w-[15%] rounded-md overflow-hidden">
        <Link to="/product/12" className="group">
          <img
            src="https://locphuc.com.vn/Content/Images/122024/DMR0078ARM.WG01A/vo-nhan-nam-kim-cuong-DMR0078ARM-WG01A-g1.jpg"
            className="w-full group-hover:scale-105 transition-all"
          />
        </Link>
      </div>

      <div className="info w-[85%] relative">
        <IoIosClose className="cursor-pointer absolute top-[0px] right-[0px] text-[22px] link transition-all" />
        <span className="text-[13px]">CLAFOUTIS</span>
        <h3 className="text-[15px]">
          <Link to="/product/12" className="link">
            Men's 3-piece suit | Sky Blue | Sewing a blue vest
          </Link>
        </h3>

        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center gap-4  mt-2">
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] rounded-md py-1 px-2 cursor-pointer"
              onClick={handleClickSize}
            >
              Size: {selectedSize} <FaAngleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={sizeAnchorEl}
              open={openSize}
              onClose={() => {
                handleCloseSize(null);
              }}
              MenuListProps={{
                "aria-labelledby": "basic-button"
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseSize("S");
                }}
              >
                S
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseSize("M");
                }}
              >
                M
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseSize("L");
                }}
              >
                L
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseSize("XL");
                }}
              >
                XL
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseSize("XXL");
                }}
              >
                XXL
              </MenuItem>
            </Menu>
          </div>
          <div className="relative">
            <span
              className="flex items-center justify-center bg-[#f1f1f1] text-[11px] font-[600] rounded-md py-1 px-2 cursor-pointer"
              onClick={handleClickQty}
            >
              Quantity: {selectedQty} <FaAngleDown />
            </span>
            <Menu
              id="size-menu"
              anchorEl={qtyAnchorEl}
              open={openQty}
              onClose={() => {
                handleCloseQty(null);
              }}
              MenuListProps={{
                "aria-labelledby": "basic-button"
              }}
            >
              <MenuItem
                onClick={() => {
                  handleCloseQty(1);
                }}
              >
                1
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseQty(2);
                }}
              >
                2
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseQty(3);
                }}
              >
                3
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseQty(4);
                }}
              >
                4
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseQty(5);
                }}
              >
                5
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseQty(6);
                }}
              >
                6
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseQty(7);
                }}
              >
                7
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseQty(8);
                }}
              >
                8
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseQty(9);
                }}
              >
                9
              </MenuItem>
              <MenuItem
                onClick={() => {
                  handleCloseQty(10);
                }}
              >
                10
              </MenuItem>
            </Menu>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-2">
          <span className="price text-[14px]  font-[600]">$58.00</span>
          <span className="oldPrice line-through text-gray-500 text-[14px] font-[500]">
            $58.00
          </span>

          <span className="price text-primary-main text-[14px]  font-[600]">
            55% OFF
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
