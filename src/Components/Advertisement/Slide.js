import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
const Slide = ({ product }) => {
  return (
    <Link to={`/especificprod/${product._id}`}>
      <div className="cards">
        <p className="card-title">{product.name}</p>
        <p className="small-desc">
          <img
            style={{ width: "180px", height: "110px" }}
            src={product.img}
            alt=""
          />

          <button className="btn btn-sm  mt-3  button text-white px-6 btnVai">
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