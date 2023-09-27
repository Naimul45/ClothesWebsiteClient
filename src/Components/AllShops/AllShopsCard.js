import React from "react";

const AllShopsCard = ({ shop }) => {
  return (
    <div className="w-[188px] h-[217px] bg-white shop-card">
      <div className="w-[188px] h-[217px]">
        <div className="w-[188px] h-[217px] p-4 ">
          <div className="w-[188px] h-[135px]">
            <img src={shop.img} alt="" className="w-[155px] h-[128px]" />
          </div>
          <div>
            <p className="text-lg font-semibold text-center">{shop.name}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllShopsCard;
