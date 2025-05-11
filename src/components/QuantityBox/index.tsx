import React, { useState } from "react";
import { Button } from "@mui/material";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";

const QuantityBox = () => {
  const [quantityValue, setQuantityValue] = useState<number>(1);

  const plusQuantity = () => {
    setQuantityValue(quantityValue + 1);
  };
  const minusQuantity = () => {
    if (quantityValue === 1) {
      setQuantityValue(1);
    } else {
      setQuantityValue(quantityValue - 1);
    }
  };

  return (
    <div className="quantityBox flex items-center relative">
      <input
        value={quantityValue}
        type="number"
        className="w-full h-[38px] p-2 pl-5 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
        defaultValue={1}
      />
      <div className="flex items-center flex-col justify-between h-[38px] absolute right-0 z-50">
        <Button
          className="!min-w-[25px] !w-[25px] !h-[19px] !text-[#000] !rounded-none hover:!bg-[#f1f1f1]"
          onClick={plusQuantity}
        >
          <FaAngleUp className="text-[12px] opacity-55" />
        </Button>
        <Button
          className="!min-w-[25px] !w-[25px] !h-[19px] !text-[#000] !rounded-none hover:!bg-[#f1f1f1]"
          onClick={minusQuantity}
        >
          <FaAngleDown className="text-[12px] opacity-55" />
        </Button>
      </div>
    </div>
  );
};

export default QuantityBox;
