import { Breadcrumbs, Button, Rating } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductZoom from "../../components/ProductZoom";
import QuantityBox from "../../components/QuantityBox";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoIosGitCompare } from "react-icons/io";
import TextField from "@mui/material/TextField";
import ProductsSlider from "../../components/ProductsSlider";

const ProductDetails = () => {
  const [productActionIndex, setProductActionIndex] = useState<number | null>(
    null
  );
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <>
      <div className="py-5  ">
        <div className="custom-container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              to="/"
              color="inherit"
              className="link hover:underline transition !text-[14px]"
            >
              Home
            </Link>
            <Link
              to="/"
              color="inherit"
              className="link hover:underline transition !text-[14px]"
            >
              Fashion
            </Link>
            <Link
              to="/"
              color="inherit"
              className="link hover:underline transition !text-[14px]"
            >
              Men Opaque Casual Shirt
            </Link>
          </Breadcrumbs>
        </div>
      </div>
      <section className="bg-white py-5">
        <div className="custom-container flex gap-8 items-center">
          <div className="productZoomContainer w-[40%]">
            <ProductZoom />
          </div>
          <div className="productContent w-[60%] pr-10 pl-10">
            <h1 className="text-[24px] font-[600] mb-2">
              Men Opaque Casual Shirt
            </h1>
            <div className="flex items-center gap-3">
              <span className="text-[13px] text-gray-400">
                Brands:{" "}
                <span className="text-black font-[500] opacity-75">
                  CLAFOUTIS
                </span>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis molestias rerum ullam hic, earum saepe sit dolorem
              eaque, suscipit voluptatum, nulla reprehenderit magni quae illum
              nam asperiores libero dolorum quisquam, nulla reprehenderit magni
              quae illum nam asperiores libero dolorum quisquam?
            </p>

            <div className="flex items-center gap-3">
              <span>Size:</span>
              <div className="flex items-center gap-1 actions">
                <Button
                  className={`${
                    productActionIndex === 0
                      ? "!bg-primary-main !text-white"
                      : ""
                  }`}
                  onClick={() => {
                    setProductActionIndex(0);
                  }}
                >
                  S
                </Button>
                <Button
                  className={`${
                    productActionIndex === 1
                      ? "!bg-primary-main !text-white"
                      : ""
                  }`}
                  onClick={() => {
                    setProductActionIndex(1);
                  }}
                >
                  M
                </Button>
                <Button
                  className={`${
                    productActionIndex === 2
                      ? "!bg-primary-main !text-white"
                      : ""
                  }`}
                  onClick={() => {
                    setProductActionIndex(2);
                  }}
                >
                  L
                </Button>
                <Button
                  className={`${
                    productActionIndex === 3
                      ? "!bg-primary-main !text-white"
                      : ""
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
          </div>
        </div>

        <div className="custom-container pt-10">
          <div className="flex items-center gap-8 mb-5">
            <span
              className={`flex items-center link cursor-pointer text-[17px] font-[500] ${
                activeTab === 0 && "text-primary-main"
              }`}
              onClick={() => {
                setActiveTab(0);
              }}
            >
              Description
            </span>
            <span
              className={`flex items-center link cursor-pointer text-[17px] font-[500] ${
                activeTab === 1 && "text-primary-main"
              }`}
              onClick={() => {
                setActiveTab(1);
              }}
            >
              Product Details
            </span>
            <span
              className={`flex items-center link cursor-pointer text-[17px] font-[500] ${
                activeTab === 2 && "text-primary-main"
              }`}
              onClick={() => {
                setActiveTab(2);
              }}
            >
              Review (6)
            </span>
          </div>
          {activeTab === 0 && (
            <div className="shadow-md py-5 px-8 w-full rounded-md">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas ipsam hic numquam veritatis, mollitia tempore doloribus
                omnis suscipit nam atque et ullam, nesciunt animi nobis
                blanditiis eius, possimus repudiandae dignissimos.
              </p>
              <h4>Lightweight Design</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas ipsam hic numquam veritatis, mollitia tempore doloribus
                omnis suscipit nam atque et ullam, nesciunt animi nobis
                blanditiis eius, possimus repudiandae dignissimos.
              </p>
              <h4>Lightweight Design</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas ipsam hic numquam veritatis, mollitia tempore doloribus
                omnis suscipit nam atque et ullam, nesciunt animi nobis
                blanditiis eius, possimus repudiandae dignissimos.
              </p>
              <h4>Lightweight Design</h4>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptas ipsam hic numquam veritatis, mollitia tempore doloribus
                omnis suscipit nam atque et ullam, nesciunt animi nobis
                blanditiis eius, possimus repudiandae dignissimos.
              </p>
            </div>
          )}
          {activeTab === 1 && (
            <div className="shadow-md py-5 px-8 w-full rounded-md">
              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                  <thead className="text-xs text-gray-700 uppercase ">
                    <tr>
                      <th scope="col" className="px-6 py-3 bg-gray-50 ">
                        STAND UP
                      </th>
                      <th scope="col" className="px-6 py-3">
                        FOLDED (W/O WHEELS)
                      </th>
                      <th scope="col" className="px-6 py-3 bg-gray-50 ">
                        FOLDED (W/ WHEELS)
                      </th>
                      <th scope="col" className="px-6 py-3">
                        DOOR PASS THROUGH
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200 ">
                      <td className="px-6 py-4 font-[500]">
                        35”L x 24”W x 37-45”H (front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 18.5”W x 16.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 24”W x 18.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr className="border-b border-gray-200 ">
                      <td className="px-6 py-4 font-[500]">
                        35”L x 24”W x 37-45”H (front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 18.5”W x 16.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 24”W x 18.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr className="border-b border-gray-200 ">
                      <td className="px-6 py-4 font-[500]">
                        35”L x 24”W x 37-45”H (front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 18.5”W x 16.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 24”W x 18.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                    <tr className="border-b border-gray-200 ">
                      <td className="px-6 py-4 font-[500]">
                        35”L x 24”W x 37-45”H (front to back wheel)
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 18.5”W x 16.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">
                        32.5”L x 24”W x 18.5”H
                      </td>
                      <td className="px-6 py-4 font-[500]">24</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === 2 && (
            <div className="shadow-md w-[80%] py-5 px-8 rounded-md">
              <div className="w-full productReviewsContainer">
                <h2 className="text-[18px]">Customer questions & answer</h2>
                {/* Comments */}
                <div className="reviewScroll w-full max-h-[300px] overflow-y-scroll overflow-x-hidden mt-5 pr-5">
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-1/492828849_1864975300924770_346922109252225526_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG1IEEj8vK5f5dcFryyK61ZVoEjSi9Wh5JWgSNKL1aHknZI-yQyYkk51M7mkNinSgbG73UZvTavNEqWSMZaNsPx&_nc_ohc=LaSx9aXpjfoQ7kNvwG2EXGz&_nc_oc=AdlSBHzbQev4jtQ9doHZuE8FxnyNz1rbX6fThb_ne2N8b4cstST9LScpjVFp1q7lZIFxIfw6DSnAOsakj6us9aMl&_nc_zt=24&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=utuvbsu-hhOK0NgUzFyBiw&oh=00_AfJc_Vo7d4fYxxn0w_VsrWxrDDMLldVBgp-QU1y_T2DyoQ&oe=68263538"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Lê Quang Trọng Nghĩa</h4>
                        <h5 className="text-[13px] mb-0">2025-05-11</h5>
                        <p className="mt-0 mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={4} size="medium" />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-1/492828849_1864975300924770_346922109252225526_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG1IEEj8vK5f5dcFryyK61ZVoEjSi9Wh5JWgSNKL1aHknZI-yQyYkk51M7mkNinSgbG73UZvTavNEqWSMZaNsPx&_nc_ohc=LaSx9aXpjfoQ7kNvwG2EXGz&_nc_oc=AdlSBHzbQev4jtQ9doHZuE8FxnyNz1rbX6fThb_ne2N8b4cstST9LScpjVFp1q7lZIFxIfw6DSnAOsakj6us9aMl&_nc_zt=24&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=utuvbsu-hhOK0NgUzFyBiw&oh=00_AfJc_Vo7d4fYxxn0w_VsrWxrDDMLldVBgp-QU1y_T2DyoQ&oe=68263538"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Lê Quang Trọng Nghĩa</h4>
                        <h5 className="text-[13px] mb-0">2025-05-11</h5>
                        <p className="mt-0 mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={4} size="medium" />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-1/492828849_1864975300924770_346922109252225526_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG1IEEj8vK5f5dcFryyK61ZVoEjSi9Wh5JWgSNKL1aHknZI-yQyYkk51M7mkNinSgbG73UZvTavNEqWSMZaNsPx&_nc_ohc=LaSx9aXpjfoQ7kNvwG2EXGz&_nc_oc=AdlSBHzbQev4jtQ9doHZuE8FxnyNz1rbX6fThb_ne2N8b4cstST9LScpjVFp1q7lZIFxIfw6DSnAOsakj6us9aMl&_nc_zt=24&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=utuvbsu-hhOK0NgUzFyBiw&oh=00_AfJc_Vo7d4fYxxn0w_VsrWxrDDMLldVBgp-QU1y_T2DyoQ&oe=68263538"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Lê Quang Trọng Nghĩa</h4>
                        <h5 className="text-[13px] mb-0">2025-05-11</h5>
                        <p className="mt-0 mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={4} size="medium" />
                  </div>
                  <div className="review w-full flex items-center justify-between pt-5 pb-5 border-b border-[rgba(0,0,0,0.1)]">
                    <div className="info w-[60%] flex items-center gap-3">
                      <div className="img w-[80px] h-[80px] overflow-hidden rounded-full">
                        <img
                          src="https://scontent.fsgn8-3.fna.fbcdn.net/v/t39.30808-1/492828849_1864975300924770_346922109252225526_n.jpg?stp=dst-jpg_s160x160_tt6&_nc_cat=109&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG1IEEj8vK5f5dcFryyK61ZVoEjSi9Wh5JWgSNKL1aHknZI-yQyYkk51M7mkNinSgbG73UZvTavNEqWSMZaNsPx&_nc_ohc=LaSx9aXpjfoQ7kNvwG2EXGz&_nc_oc=AdlSBHzbQev4jtQ9doHZuE8FxnyNz1rbX6fThb_ne2N8b4cstST9LScpjVFp1q7lZIFxIfw6DSnAOsakj6us9aMl&_nc_zt=24&_nc_ht=scontent.fsgn8-3.fna&_nc_gid=utuvbsu-hhOK0NgUzFyBiw&oh=00_AfJc_Vo7d4fYxxn0w_VsrWxrDDMLldVBgp-QU1y_T2DyoQ&oe=68263538"
                          className="w-full"
                        />
                      </div>
                      <div className="w-[80%]">
                        <h4 className="text-[16px]">Lê Quang Trọng Nghĩa</h4>
                        <h5 className="text-[13px] mb-0">2025-05-11</h5>
                        <p className="mt-0 mb-0">
                          Lorem Ipsum is simply dummy text of the printing and
                          typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy text ever since the 1500s
                        </p>
                      </div>
                    </div>
                    <Rating name="read-only" value={4} size="medium" />
                  </div>
                </div>
                <br />
                {/* Write Comments */}
                <div className="reviewForm bg-[#fafafa] rounded-md p-4">
                  <h2 className="text-[18px]">Add a review</h2>
                  <form action="" className="w-full mt-5">
                    <TextField
                      id="outlined-multiline-static"
                      label="Write a review..."
                      className="w-full"
                      multiline
                      rows={5}
                    />
                    <br /> <br />
                    <Rating name="read-only" value={4} size="medium" />
                    <div className="flex items-center mt-5">
                      <Button className="btn-org">Submit Review</Button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="custom-container mt-5">
          <h2 className="text-[20px] font-[600]">Related Products</h2>
          <ProductsSlider items={6} />
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
