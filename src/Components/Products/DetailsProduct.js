import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import BookingModal from "../BookingModal/BookingModal";
import Review from "../Review/Review";
import { useQuery } from "@tanstack/react-query";
import Rev from "../Review/Rev";

const DetailsProduct = () => {
  const product = useLoaderData();
  // console.log("prod", product[0]);

  const { register, handleSubmit } = useForm();
  const { user } = useContext(AuthContext);
  const [value, setValue] = useState(1);

  const { refetch, data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await fetch(
        `https://camera-shop-server.vercel.app/review?product=${product[0].name}`
      );
      const data = res.json();
      refetch();
      return data;
    },
  });

  const Plus = () => {
    const plus = value + 1;

    setValue(plus);
  };
  const Minus = () => {
    const minus = value - 1;

    setValue(minus);
  };

  const onSubmits = (data) => {
    const info = {
      name: user?.displayName,
      email: user?.email,
      data,
      value: value,
      img: product[0],
    };

    fetch("https://camera-shop-server.vercel.app/addtocart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("AddToCart successful!");
        refetch();
      })
      .catch((error) => {
        // console.log(error);
        toast.error("error.message");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmits)}>
        <div className="hero min-h-screen  ">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse border border-slate-300 lg:w-full w-[360px]">
            <div className="text-left w-full">
              <input
                type="text"
                name=""
                id=""
                defaultValue={product[0].name}
                {...register("productName")}
                readOnly
                className=" focus:border-none text-2xl font-semibold mb-4 "
              />

              <p className="pt-2 font-semibold text-base text-orange-600">
                Ratings :
              </p>
              <p className="font-semibold text-base text-orange-600">
                Brand : {product[0].brand}
              </p>
              <div className="mb-5">
                <label className="text-xl font-semibold  text-orange-600 inline">
                  Price : ৳
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  defaultValue={product[0].recenPrice}
                  {...register("RecentPrice")}
                  readOnly
                  className=" text-xl font-semibold  text-orange-600 inline w-10"
                />
                <p className="inline ml-2">
                  <del className="text-base-300 inline bg-red-600 p-1">
                    ৳{product[0].previousPrice}
                  </del>
                </p>
              </div>
              <hr />
              <div className="flex mt-3">
                <div>
                  <label htmlFor="size" className="text-lg font-bold">
                    Size :
                  </label>
                  <br />
                  <select
                    {...register("Size", { required: true })}
                    className="w-52 border border-solid border-current px-5 py-1"
                    placeholder="Please select"
                  >
                    <option value="small">S - Chest 35-37</option>
                    <option value="medium">M - Chest 38-40</option>
                    <option value="large">L - Chest 40-42</option>
                    <option value="extra-large">XL - Chest 42-44</option>
                    <option value="double-extra-large">
                      2XL - Chest 44-47
                    </option>
                  </select>
                </div>

                <form className="lg:ml-6 ml-2 ">
                  <label htmlFor="size" className="text-lg font-bold mb-2">
                    Quantity :
                  </label>
                  <br />

                  <label
                    className=" bg-white border border-solid border-black px-3 text-lg font-semibold hover:bg-black hover:text-white hover:cursor-pointer "
                    onClick={() => Plus()}
                  >
                    +
                  </label>
                  <p className="inline mx-4 text-lg">{value}</p>
                  <label
                    className=" bg-white border border-solid border-black px-3 text-lg font-bold hover:bg-black hover:text-white hover:cursor-pointer"
                    onClick={() => Minus()}
                  >
                    -
                  </label>
                </form>
              </div>

              <div className="flex my-3 ">
                <button className="btn bg-gradient-to-r from-purple-500 to-fuchsia-700 px-10 text-white rounded-none lg:w-[208px] w-[330px] ">
                  Add TO Cart
                </button>
              </div>
              <hr />
              <div className="py-4">
                <h3 className="font-semibold text-xl">Description : </h3>
                <p className="text-base-500 font-medium mt-1 ">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Praesentium iste ab illum aspernatur voluptate, blanditiis
                  libero eveniet adipisci voluptates deleniti quasi nostrum
                  fugit quia
                </p>
              </div>
              <hr className="lg:block none" />
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <img src={product[0].img} alt="" />
              </div>
            </div>
          </div>
        </div>

        <hr className="mt-8 text-lg font-semibold" />
      </form>
      <div className="flex justify-around mt-5 lg:flex-row flex-col ">
        <div className="grid grid-cols-1 gap-3">
          {reviews?.map((review) => (
            <Rev review={review}></Rev>
          ))}
        </div>
        <Review product={product}></Review>
      </div>
    </>
  );
};

export default DetailsProduct;
