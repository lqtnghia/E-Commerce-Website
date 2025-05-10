import React, { useState } from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";
import RangeSlider from "react-range-slider-input";
import Rating from "@mui/material/Rating";
import "react-range-slider-input/dist/style.css";

import "../SideBar/style.css";
import { Button } from "@mui/material";

const SideBar = () => {
  const [isOpenCategoryFilter, setIsOpenCategoryFilter] =
    useState<boolean>(true);
  const [isOpenAvailFilter, setIsOpenAvailFilter] = useState<boolean>(true);
  const [isOpenSizelFilter, setIsOpenSizelFilter] = useState<boolean>(true);

  return (
    <div className="sidebar py-5">
      {/* Category */}
      <div className="box">
        <h3 className="mb-3 text-[18px] font-[600] flex items-center w-full pr-5">
          Shop by Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounde-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {!isOpenCategoryFilter ? <FaAngleDown /> : <FaAngleUp />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Fashion"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Electronics"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Bags"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Footwear"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Groceries"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Beauty"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Weliness"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Jeweliery"
                className="w-full"
              />
            </FormGroup>
          </div>
        </Collapse>
      </div>
      {/* Availability */}
      <div className="box mt-3">
        <h3 className="mb-3 text-[18px] font-[600] flex items-center w-full pr-5">
          Availability
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounde-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenAvailFilter(!isOpenAvailFilter)}
          >
            {!isOpenAvailFilter ? <FaAngleDown /> : <FaAngleUp />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Available (17)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="In Stock (10)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Not Available (1)"
                className="w-full"
              />
            </FormGroup>
          </div>
        </Collapse>
      </div>
      {/* Size */}
      <div className="box mt-3">
        <h3 className="mb-3 text-[18px] font-[600] flex items-center w-full pr-5">
          Size
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounde-full !ml-auto !text-[#000]"
            onClick={() => setIsOpenSizelFilter(!isOpenSizelFilter)}
          >
            {!isOpenSizelFilter ? <FaAngleDown /> : <FaAngleUp />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizelFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Small (17)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Medium (10)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="Large (1)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="XL (6)"
                className="w-full"
              />
              <FormControlLabel
                control={<Checkbox size="small" />}
                label="XXL (6)"
                className="w-full"
              />
            </FormGroup>
          </div>
        </Collapse>
      </div>
      {/* Filter Price */}
      <div className="box mt-4">
        <h3 className="mb-3 text-[18px] font-[600] flex items-center w-full pr-5">
          Filter By Price
        </h3>
        <RangeSlider />
        <div className="flex pt-2 pb-2 priceRange">
          <span>
            From: <strong className="text-dark">Rs: {100}</strong>
          </span>
          <span className="ml-auto ">
            From: <strong className="text-dark">Rs: {10000}</strong>
          </span>
        </div>
      </div>
      {/* Rating */}
      <div className="box mt-4">
        <h3 className="mb-3 text-[18px] font-[600] flex items-center w-full pr-5">
          Filter By Rating
        </h3>
        <div className="w-full">
          <Rating name="read-only" value={5} readOnly size="small" />
        </div>
        <div className="w-full">
          <Rating name="read-only" value={4} readOnly size="small" />
        </div>
        <div className="w-full">
          <Rating name="read-only" value={3} readOnly size="small" />
        </div>
        <div className="w-full">
          <Rating name="read-only" value={2} readOnly size="small" />
        </div>
        <div className="w-full">
          <Rating name="read-only" value={1} readOnly size="small" />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
