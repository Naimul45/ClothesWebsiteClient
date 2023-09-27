import React from "react";
import "../../App.css";

const Delivery = () => {
  return (
    <div>
      {/* .delivery {
  margin-left: 65px;
  margin-right: 74px;
  margin-top: 117px;  
} */}
      <div className="grid grid-cols-5 gap-3  delivery lg:ml-16 lg:mr-20 lg:mt-28 ml-6 ">
        <div className="cardblur shop-card lg:w-56 w-16 lg:h-44 h-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLE3r_PnuSW9fmRYo1hiIQwHgtmua6_6f1C5ZkL6E&s"
            alt=""
            className="lg:w-56 w-16 lg:h-44 h-12"
          />
        </div>
        <div className="cardblur shop-card lg:w-56 w-16 lg:h-44 h-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugu--LkxJz7vatGEphcyncDsm1rFyGc30pA&usqp=CAU"
            alt=""
            className="lg:w-56 w-16 lg:h-44 h-12"
          />
        </div>
        <div className="cardblur shop-card lg:w-56 w-16 lg:h-44 h-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLE3r_PnuSW9fmRYo1hiIQwHgtmua6_6f1C5ZkL6E&s"
            alt=""
            className="lg:w-56 w-16 lg:h-44 h-12"
          />
        </div>
        <div className="cardblur shop-card lg:w-56 w-16 lg:h-44 h-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRugu--LkxJz7vatGEphcyncDsm1rFyGc30pA&usqp=CAU"
            alt=""
            className="lg:w-56 w-16 lg:h-44 h-12"
          />
        </div>
        <div className="cardblur shop-card lg:w-56 w-16 lg:h-44 h-12">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLE3r_PnuSW9fmRYo1hiIQwHgtmua6_6f1C5ZkL6E&s"
            alt=""
            className="lg:w-56 w-16 lg:h-44 h-12"
          />
        </div>
      </div>
    </div>
  );
};

export default Delivery;
