import React, { useEffect } from "react";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CategoryProduct from "./CategoryProduct";
import { useQuery } from "@tanstack/react-query";

const ProductOfShop = () => {
  const shop = useLoaderData();
  // console.log(shop);
  const [prod, setProd] = useState([]);

  useEffect(() => {
    fetch(`https://camera-shop-server.vercel.app/category?name=${shop?.name}`)
      .then((res) => res.json())
      .then((data) => {
        setProd(data);
        // console.log(data);
      });
  });
  // console.log("shop", shop);
  // const { data: products = [] } = useQuery({
  //   queryKey: ["productsData"],
  //   queryFn: async () => {
  //     const res = await fetch(
  //       `https://camera-shop-server.vercel.app/category?name=${shop?.name}`
  //     );
  //     const data = res.json();

  //     return data;
  //   },
  // });

  return (
    <div>
      <div className="mx-3 mt-3 border-solid border border-zinc-400 rounded shadow-xl ">
        <div className="p-4 flex flex-row">
          <img src={shop.img} alt="" className="w-32 h-32" />
          <div className="ml-4">
            <h1 className="text-xl font-bold">{shop.name}</h1>
            <h2 className="text-xl font-bold">Dhaka , Bangladesh</h2>
          </div>
        </div>
      </div>

      <div className="bg-slate-200">
        <h1 className="text-2xl font-bold mx-8 mt-8 pt-4">Products</h1>

        <div className="px-6 py-6 grid lg:grid-cols-5 grid-cols-2 gap-6 lg:ml-2 ml-[-10px]">
          {prod?.map((prod) => (
            <Link to={`/especificproduct/${prod._id}`}>
              <CategoryProduct product={prod}></CategoryProduct>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductOfShop;
