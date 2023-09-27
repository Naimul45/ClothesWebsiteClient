import React from "react";
import { useQuery } from "@tanstack/react-query";
import AllProduct from "./AllProduct";
import { BiSearch } from "react-icons/bi";

const AllProducts = () => {
  const { data: manyproducts = [] } = useQuery({
    queryKey: ["shops"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/manyproducts");
      const data = res.json();
      return data;
    },
  });
  return (
    <div className="lg:px-16 px-0 lg:py-10 py-0 bg-slate-200">
      <div className="flex justify-between  lg:flex-row flex-col pt-1 lg:px-0 px-3">
        <h1 className="text-2xl font-bold mt-3">Products</h1>

        <div className="flex mt-2">
          <input
            type="text"
            placeholder="Search Product"
            className="input input-bordered  w-full max-w-xs h-9"
          />

          <div className="flex items-center justify-center bg-black rounded w-20 h-9">
            <BiSearch className="w-6 h-6 text-white font-bold" />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-2 lg:gap-6 gap-2  mt-10 ml-[10px]">
        {manyproducts?.map((prod) => (
          <AllProduct prod={prod}></AllProduct>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;