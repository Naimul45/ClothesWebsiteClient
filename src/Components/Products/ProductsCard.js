import React, { useEffect } from "react";
import { useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const ProductsCard = ({ product }) => {
  return (
    <div className="container  hover:brightness-50">
      <div className=" lg:w-[228px] w-[160px]  lg:h-[260px] h-[190px]">
        <div className="card-product relative lg:w-[228px] w-[160px]  lg:h-[260px] h-[190px]">
          <img
            src={product.img}
            alt=""
            className="absolute lg:w-[228px] w-[160px]  lg:h-[260px] h-[190px] mt-[-16px] ml-[-16px]"
          />

          <div className="card-hidden">
            <button className="btn btn-sm  button text-white px-6">
              See more <AiOutlineArrowRight className="ml-2 text-lg" />
            </button>
          </div>
        </div>
        <div className="card-border"></div>
      </div>
    </div>
  );
};

export default ProductsCard;
