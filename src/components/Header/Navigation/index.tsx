import { Button } from "@mui/material";
import React, { useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoRocketOutline } from "react-icons/io5";
import CategoryPanel from "./CategoryPanel";

import "./style.css";

const Navigation = () => {
  const [isOpenCatPanel, setIsOpenCatPanel] = useState<boolean>(false);

  const openCategoryPanel = () => {
    setIsOpenCatPanel(true);
  };

  return (
    <>
      <nav className="py-2 bg-white">
        <div className="custom-container flex items-center justify-end">
          <div className="col_1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategoryPanel}
            >
              <RiMenu2Fill className="text-[18px]" />
              Shop By Categories
              <FaAngleDown className="text-[13px] ml-auto font-bold " />
            </Button>
          </div>
          <div className="col_2 w-[60%]">
            <ul className="flex items-center gap-3 nav">
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !text-black/80 hover:!text-[#ff5252]">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link
                  to="/"
                  className="link transition text-[14px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !text-black/80 hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>

                <div className="submenu absolute top-[120%] left-[0%] min-w-[150px] bg-white shawdow-md opacity-0 transition-all">
                  <ul>
                    {/* Men */}
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button
                          sx={{ color: "rgba(0, 0, 0, 0.8)" }}
                          className=" w-full !text-left !justify-start !rounded-none "
                        >
                          Men
                        </Button>
                        {/* Submenu of Men */}
                        <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shawdow-md opacity-0 transition-all">
                          <ul>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  T-shirt
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Jeans
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Footwear
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Watch
                                </Button>
                              </Link>
                            </li>
                            <li className="list-none w-full">
                              <Link to="/" className="w-full">
                                <Button className="text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                  Pents
                                </Button>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </Link>
                    </li>
                    {/* Women */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button
                          sx={{ color: "rgba(0, 0, 0, 0.8)" }}
                          className=" w-full !text-left !justify-start !rounded-none"
                        >
                          Woman
                        </Button>
                      </Link>
                    </li>
                    {/* Kids */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button
                          sx={{ color: "rgba(0, 0, 0, 0.8)" }}
                          className=" w-full !text-left !justify-start !rounded-none"
                        >
                          Kids
                        </Button>
                      </Link>
                    </li>
                    {/* Girls */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button
                          sx={{ color: "rgba(0, 0, 0, 0.8)" }}
                          className=" w-full !text-left !justify-start !rounded-none"
                        >
                          Girls
                        </Button>
                      </Link>
                    </li>
                    {/* Boys */}
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button
                          sx={{ color: "rgba(0, 0, 0, 0.8)" }}
                          className=" w-full !text-left !justify-start !rounded-none"
                        >
                          Boys
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !text-black/80 hover:!text-[#ff5252]">
                    Eletrionics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !text-black/80 hover:!text-[#ff5252]">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !text-black/80 hover:!text-[#ff5252]">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !text-black/80 hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !text-black/80 hover:!text-[#ff5252]">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !text-black/80 hover:!text-[#ff5252]">
                    Weliness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to="/"
                  className="link transition text-[14px] !font-[500]"
                >
                  <Button className="link transition !font-[500] !text-black/80 hover:!text-[#ff5252]">
                    Jeweliery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col_3 w-[20%]">
            <p className="text-[14px] !font-[500] flex items-center gap-3 mb-0 mt-0">
              <IoRocketOutline className="text-[18px]" /> Free International
              Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Category panel component */}
      <CategoryPanel
        setIsOpenCatPanel={setIsOpenCatPanel}
        isOpenCatPanel={isOpenCatPanel}
        openCategoryPanel={openCategoryPanel}
      />
    </>
  );
};

export default Navigation;
