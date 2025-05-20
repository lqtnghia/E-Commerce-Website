import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoCartOutline } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { IoMdHeartEmpty } from "react-icons/io";
import { Tooltip } from "@mui/material";
import Navigation from "./Navigation";
import { MyContext } from "../../App";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px"
  }
}));

const Header = () => {
  const context = useContext(MyContext);

  const handleOpenCartPanel = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (context) {
      context.setOpenCartPanel(true);
    }
  };
  return (
    <header>
      <div className="top-strip py-2  border-t-[1px] border-b-[1px] border-gray-200 bg-white">
        <div className="custom-container">
          <div className="flex items-center justify-between">
            <div className="col1 w-[50%]">
              <p className="text-[12px] font-[500]">
                Get up to 50% off new season styles, limited time only
              </p>
            </div>

            <div className="col2 flex items-center justify-end">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="text-[13px] font-[500] link transition"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="text-[13px] font-[500] link transition"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="header py-4 border-t-[1px] border-b-[1px] border-gray-200 bg-white">
        <div className="custom-container flex items-center justify-between">
          {/* logo */}
          <div className="col1 w-[25%]">
            {/* <Link to="/">
              <img src="/logo.jpg" />
            </Link> */}
            <Link
              to="/"
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-2xl font-bold"
            >
              NghiaEcommerce
            </Link>
          </div>
          {/* search */}
          <div className="col2 w-[45%]">
            <Search />
          </div>
          {/* cart */}
          <div className="col3 w-[30%] flex items-center">
            <ul className="flex items-center gap-3 w-full justify-end">
              <li className="list-none">
                <Link
                  to="/login"
                  className="link transition text-[15px] font-[500]"
                >
                  Login
                </Link>
                &nbsp; / &nbsp;
                <Link
                  to="/Register"
                  className="link transition text-[15px] font-[500]"
                >
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="Compare">
                    <StyledBadge badgeContent={4} color="error">
                      <IoIosGitCompare />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="Wishlist">
                    <StyledBadge badgeContent={4} color="error">
                      <IoMdHeartEmpty />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Cart">
                  <IconButton aria-label="cart" onClick={handleOpenCartPanel}>
                    <StyledBadge badgeContent={4} color="error">
                      <IoCartOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Navigation />
    </header>
  );
};

export default Header;
