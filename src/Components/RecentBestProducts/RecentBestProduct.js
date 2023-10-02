import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const RecentBestProduct = ({ product }) => {
  return (
    <Link to={`/especificprod/${product._id}`}>
      <div className="cards lg:w-[230px]">
        <p className="card-title">{product.name}</p>
        <p className="small-desc">
          <img
            style={{ width: "180px", height: "180px" }}
            src={product.img}
            alt=""
          />

          <button className="btn btn-sm  mt-3  button text-white px-6 ml-5">
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

export default RecentBestProduct;
