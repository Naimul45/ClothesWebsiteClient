import React from "react";
import { useQuery } from "@tanstack/react-query";
import Slide from "./Slide";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShopSlide from "./ShopSlide";

const Advertisement = () => {
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
    slidesToShow: 4,
    swipeToSlide: true,
    afterChange: function (index) {
      console.log(
        `Slider Changed to: {index + 1}, background: #222; color: #bada55`
      );
    },
  };
  return (
    <div className="bg-black  mt-10 pb-20 pt-5  px-3">
      <div>
        <h1 className="text-2xl font-bold shops mt-3 text-white pb-8">
          Advertisement
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col">
        <div>
          <h1 className="text-2xl font-bold  text-white marginLeft">
            Products
          </h1>
          {/* slick-slide slick-active slick-current */}
          <Slider {...settings}>
            {products?.map((product) => (
              <div className="grid lg:grid-cols-4 grid-cols-2 gap-3">
                <Slide product={product}></Slide>
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-h-set">
          <h1 className="text-2xl font-bold text-white text-center">Shops</h1>
          <ShopSlide></ShopSlide>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
