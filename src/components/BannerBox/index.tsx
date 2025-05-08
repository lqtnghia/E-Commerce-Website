import React from "react";
import { Link } from "react-router-dom";

interface IProps {
  src: string;
  link: string;
}

const BannerBox = (props: IProps) => {
  return (
    <div className="box bannerBox overflow-hidden rounded-lg group">
      <Link to="/">
        <img
          src={props.src}
          alt="Banner"
          className="w-full transition all group-hover:scale-105 group-hover:rotate-2"
        />
      </Link>
    </div>
  );
};

export default BannerBox;
