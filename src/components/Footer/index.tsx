import React, { useContext } from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiKeyReturn } from "react-icons/pi";
import { LiaGiftSolid } from "react-icons/lia";
import { BsWallet2 } from "react-icons/bs";
import { BiSupport } from "react-icons/bi";
import { Link } from "react-router-dom";
import { IoChatboxOutline, IoClose } from "react-icons/io5";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import { FaFacebookF } from "react-icons/fa";
import { PiYoutubeLogoLight } from "react-icons/pi";
import { FaPinterestP } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Drawer from "@mui/material/Drawer";
import CartPanel from "../CartPanel";
import { MyContext } from "../../App";

const Footer = () => {
  const context = useContext(MyContext);
  return (
    <>
      <footer className="py-6 bg-[#fafafa]">
        <div className="custom-container">
          <div className="flex items-center justify-center gap-2 py-8 ">
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaShippingFastSolid className="text-[40px] transition-all duration-300 group-hover:text-primary-main group-hover:translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Free Shipping</h3>
              <p className="text-[12px] font-[500]">For all Orders Over $100</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <PiKeyReturn className="text-[40px] transition-all duration-300 group-hover:text-primary-main group-hover:translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">30 Days Returns</h3>
              <p className="text-[12px] font-[500]">For an Exchange Product</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BsWallet2 className="text-[40px] transition-all duration-300 group-hover:text-primary-main group-hover:translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Secured Payment</h3>
              <p className="text-[12px] font-[500]">Payment Cards Accepted</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <LiaGiftSolid className="text-[40px] transition-all duration-300 group-hover:text-primary-main group-hover:translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Special Gifts</h3>
              <p className="text-[12px] font-[500]">Our First Product Order</p>
            </div>
            <div className="col flex items-center justify-center flex-col group w-[15%]">
              <BiSupport className="text-[40px] transition-all duration-300 group-hover:text-primary-main group-hover:translate-y-1" />
              <h3 className="text-[16px] font-[600] mt-3">Support 24/7</h3>
              <p className="text-[12px] font-[500]">Contact us Anytime</p>
            </div>
          </div>
          <hr />
          <div className="footer flex  py-8">
            <div className="part1 w-[25%] border-r border-[rgba(0,0,0,0.1)]">
              <h2 className="text-[18px] font-[600] mb-4">Contact us</h2>
              <p className="text-[13px] font-[400] pb-4">
                Classyshop - Mega Super Store <br /> 507-Union Trade Centre
                France
              </p>

              <Link
                to="mailto:someone@example.com"
                className="link text-[13px]"
              >
                sales@yourcompany.com
              </Link>
              <span className="text-[22px] font-[600] block w-full mt-3 mb-5 text-primary-main">
                (+91) 9876-543-210
              </span>

              <div className="flex items-center gap-2">
                <IoChatboxOutline className="text-[40px] text-primary-main" />
                <span className="text-[16px] font-[600]">
                  Online Chat <br /> Get Expert Help
                </span>
              </div>
            </div>
            <div className="part2 w-[40%] flex pl-8">
              <div className="part2_col1 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Products</h2>
                <ul className="list">
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-1">
                      Princes drop
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      New products
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Best sales
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Contact us
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Sitemap
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Stores
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="part2_col2 w-[50%]">
                <h2 className="text-[18px] font-[600] mb-4">Our company</h2>
                <ul className="list">
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-1">
                      Delivery
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Legal Notice
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Terms and conditions of use
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      About us
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Secure payment
                    </Link>
                  </li>
                  <li className="list-none">
                    <Link to="/" className="link text-[14px] w-full mb-2">
                      Login
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="part3 w-[35%] pl-8">
              <h2 className="text-[18px] font-[600] mb-4">
                Subscribe to newsletter
              </h2>
              <p className="text-[13px]">
                Subscribe to our latest newsletter to get news about special
                discounts.
              </p>
              <form className="mt-5">
                <input
                  type="text"
                  className="w-full h-[45px] border outline-none pl-4 pr-4 mb-4 rounded-sm focus:border-[rgba(0,0,0,0.3)]"
                  placeholder="Your Email Address"
                />
                <Button className="btn-org">SUBCRIBE</Button>
              </form>
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to the terms and conditions and the privacy policy"
              />
            </div>
          </div>
        </div>
      </footer>

      <div className="bottomStrip border-t border-[rgba(0,0,0,0.1)] py-3 bg-white">
        <div className="custom-container flex items-center justify-between">
          <ul className="flex items-center  gap-2">
            <li className="list-none">
              <Link
                to=""
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary-main transition-all"
              >
                <FaFacebookF className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to=""
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary-main transition-all"
              >
                <PiYoutubeLogoLight className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to=""
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary-main transition-all"
              >
                <FaPinterestP className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
            <li className="list-none">
              <Link
                to=""
                target="_blank"
                className="w-[35px] h-[35px] rounded-full border border-[rgba(0,0,0,0.1)] flex items-center justify-center group hover:bg-primary-main transition-all"
              >
                <FaInstagram className="text-[15px] group-hover:text-white" />
              </Link>
            </li>
          </ul>
          <p className="text-[13px] text-center mb-0">
            © 2025 - Ecommerce software by Nghia Le Quang Trong
          </p>
          <div className="flex items-center">
            <img src="/carte_bleue.png" alt="image" />
            <img src="/visa.png" alt="image" />
            <img src="/master_card.png" alt="image" />
            <img src="/american_express.png" alt="image" />
            <img src="/paypal.png" alt="image" />
          </div>
        </div>
      </div>

      {/* Cart Panel */}
      <Drawer
        open={context?.openCartPanel}
        onClose={() => {
          context?.toggleCartPanel(false);
        }}
        anchor="right"
        className="cartPanel"
      >
        <div className="flex items-center justify-between py-3 px-4 gap-3 border-b border-[rgba(0,0,0,0.1)]">
          <h4>Shopping Cart (1)</h4>
          <IoClose
            className="text-[20px] cursor-pointer"
            onClick={() => {
              context?.toggleCartPanel(false);
            }}
          />
        </div>
        <CartPanel />
      </Drawer>
    </>
  );
};

export default Footer;
