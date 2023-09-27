import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const AllProduct = ({ prod }) => {
  // console.log("product", prod);
  return (
    <Link
      to={`/especificproduct/${prod._id}`}
      className="container  lg:w-[228px] w-[160px]  lg:h-[260px] h-[190px] hover:brightness-50"
    >
      <div className="card-product relative  lg:w-[228px] w-[160px]  lg:h-[260px] h-[190px]">
        <img
          src={prod.img}
          alt=""
          className="absolute  lg:w-[228px] w-[160px]  lg:h-[260px] h-[190px] mt-[-16px] ml-[-16px]"
        />

        <div className="card-hidden">
          <button className="btn btn-sm  button text-white px-6">
            Details <AiOutlineArrowRight className="ml-2 text-lg" />
          </button>
        </div>
      </div>
      <div className="card-border"></div>
    </Link>
  );
};

export default AllProduct;
