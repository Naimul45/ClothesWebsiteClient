import React from "react";

const ShopProduct = ({ shop }) => {
  return (
    <div>
      <div className="card  bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{shop.name}</h2>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
