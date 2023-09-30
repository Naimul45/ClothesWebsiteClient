import React from "react";
import { useQuery } from "@tanstack/react-query";
import Slide from "./Slide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopsCard from "../Shops/ShopsCard";

const ShopSlide = () => {
  const { data: shops = [] } = useQuery({
    queryKey: ["shopsData"],
    queryFn: async () => {
      const res = await fetch("https://camera-shop-server.vercel.app/shops");
      const data = res.json();
      return data;
    },
  });

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 2,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: {index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div>
      <Slider
        {...settings}
        className="grid lg:grid-cols-3 gap-3 shop-slide-w-h w-h-set  mt-10"
      >
        {shops?.map((shop) => (
          <ShopsCard shop={shop}></ShopsCard>
        ))}
      </Slider>
    </div>
  );
};

export default ShopSlide;
