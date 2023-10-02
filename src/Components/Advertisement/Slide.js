import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Slide = ({ product }) => {
  return (
    <Link to={`/especificprod/${product._id}`}>
      <div className="cards lg:w-[240px] lg:h-full h-[250px] m-1 lg:ml-[16px]">
        <p className="card-title">{product.name}</p>
        <p className="small-desc">
          <img
            className="lg:w-[180px] lg:h-[180px] h-[110px]"
            src={product.img}
            alt=""
          />

          <button className="btn btn-sm  mt-3  button text-white px-6 lg:w-[200px] lg:ml-[-8px] w-[120px] ml-[-7px]">
            Details <AiOutlineArrowRight className="ml-2 text-lg" />
          </button>
        </p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </div>
    </Link>
  );
};

export default Slide;
