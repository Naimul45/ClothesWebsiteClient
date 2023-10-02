import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShopsCard = ({ shop }) => {
  return (
    <Link to={`/shop/${shop._id}`}>
      <div className="lg:w-[188px] w-[165px] h-[217px] shop-card">
        <div className="lg:w-[188px] w-[165px] h-[217px]">
          <div className="lg:w-[188px] w-[165px] h-[217px] pt-4 pb-4 pr-4 lg:pl-4 pl-[11px] ">
            <div className="lg:w-[188px] w-[165px] h-[135px]">
              <img
                src={shop?.img}
                alt=""
                className="lg:w-[155px] w-[135px] h-[128px]"
              />
            </div>
            <div>
              <p className="text-lg font-semibold text-center">{shop?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ShopsCard;
