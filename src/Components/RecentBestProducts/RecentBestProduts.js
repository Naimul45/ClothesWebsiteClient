import React from "react";
import { useQuery } from "@tanstack/react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RecentBestProduct from "./RecentBestProduct";

const RecentBestProduts = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/products");
      const data = res.json();
      return data;
    },
  });

  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 5,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: {index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="pb-5">
      <h1 className="text-2xl font-bold shops mt-6">Recent Best Products</h1>
      <Slider {...settings} className="grid lg:grid-cols-3 gap-3 w-1208 mb-10">
        {products?.map((product) => (
          <RecentBestProduct product={product}></RecentBestProduct>
        ))}
      </Slider>
    </div>
  );
};

export default RecentBestProduts;
