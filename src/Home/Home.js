import React from "react";
import { Carousel } from "react-carousel-minimal";
import Advertisement from "../Components/Advertisement/Advertisement";
import Delivery from "../Components/Delivery/Delivery";
import Products from "../Components/Products/Products";
import RecentBestProduts from "../Components/RecentBestProducts/RecentBestProduts";
import Shops from "../Components/Shops/Shops";
import { useEffect, useState } from "react";

const Home = () => {
  const data = [
    {
      image:
        "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8ZSUyMGNvbW1lcmNlfGVufDB8fDB8fHww&w=1000&q=80",
      caption: "San Francisco",
    },
    {
      image:
        "https://img.freepik.com/premium-photo/product-package-boxes-shopping-bag-cart-with-laptop-online-shopping-delivery-concept_38716-138.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://e0.pxfuel.com/wallpapers/779/1012/desktop-wallpaper-commerce-ecommerce-web-ecommerce-website-e-commerce-thumbnail.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.kindpng.com/picc/m/124-1247919_e-commerce-development-hd-png-download.png",
      caption: "San Francisco",
    },
    {
      image:
        "https://media.istockphoto.com/id/1206800961/photo/online-shopping-and-payment-man-using-tablet-with-shopping-cart-icon-digital-marketing.jpg?b=1&s=612x612&w=0&k=20&c=mwZYTXRUffNG-igVygp49KPbBT4Dp0va1MxomnP3j9M=",
      caption: "Scotland",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522204523234-8729aa6e3d5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
      caption: "Darjeeling",
    },
    {
      image:
        "https://www.aaditritechnology.com/blog/wp-content/uploads/2017/12/Ecommerce-website-development.jpg",
      caption: "San Francisco",
    },
    {
      image: "https://neilpatel.com/wp-content/uploads/2015/04/ecommerce.jpg",
      caption: "Scotland",
    },
    {
      image:
        "https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://worldfinancialreview.com/wp-content/uploads/2023/06/ecommerce-business-1.jpg",
      caption: "Darjeeling",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRotrh2YHASZ_bhsOUHKbaV_F0s30ZtCEX7v-fzi5_0X-bW0JVGALWKuyJxvP1FXsdS5xc&usqp=CAU",
      caption: "Darjeeling",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSJ1QOL73R0QZvCRT_hqjy_nbJcamdeu8mRA&usqp=CAU",
      caption: "Darjeeling",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <>
      {/* corousel start */}
      <div className="App">
        <div style={{ textAlign: "center" }}>
          <div style={{}}>
            <Carousel
              data={data}
              time={5000}
              width="1200px"
              height="450px"
              captionStyle={captionStyle}
              radius="10px"
              slideNumber={true}
              slideNumberStyle={slideNumberStyle}
              captionPosition="bottom"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={true}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "1200px",
                maxHeight: "450px",
                marginLeft: "5%",
                marginRight: "5%",
              }}
            />
          </div>
        </div>
      </div>

      {/* corousel end */}

      <Delivery></Delivery>
      <Shops></Shops>
      <Products></Products>
      <Advertisement></Advertisement>
      <RecentBestProduts></RecentBestProduts>
    </>
  );
};

export default Home;
