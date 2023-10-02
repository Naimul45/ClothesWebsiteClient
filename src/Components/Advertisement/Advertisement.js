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
      const res = await fetch("https://camera-shop-server.vercel.app/products");
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
    <div className="bg-black  lg:mt-10 lg:pb-25 pb-[130px] lg:pt-5  lg:px-3">
      <div>
        <h1 className="text-2xl font-bold shops lg:mt-3 lg:pt-0 pt-6 text-white pb-8">
          Advertisement
        </h1>
      </div>

      <div className="flex lg:flex-row flex-col">
        <div>
          <h1 className="text-2xl font-bold  text-white lg:ml-[300px] lg:mb-6 lg:text-left text-center">
            Products
          </h1>
          {/* slick-slide slick-active slick-current */}
          <Slider
            {...settings}
            className="lg:w-[550px] w-[300px] lg:h-[247px] h-[250px] lg:ml-[65px] ml-[30px] lg:mr-[200px]"
          >
            {products?.map((product) => (
              <div>
                <Slide product={product}></Slide>
              </div>
            ))}
          </Slider>
        </div>

        <div className="w-h-set">
          <h1 className="text-2xl font-bold text-white text-center lg:pt-0 pt-[50px]">
            Shops
          </h1>
          <ShopSlide></ShopSlide>
        </div>
      </div>
    </div>
  );
};

export default Advertisement;
