import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import AllShopsCard from "./AllShopsCard";
import { Link } from "react-router-dom";

const getFilteredItems = (query, shops) => {
  if (!query) {
    return shops;
  }
  return shops.filter((shop) => shop.name.includes(query));
  // || (
  //   <h1>
  //     Sorry Sir , the product you are looking for is not availble in our
  //     store
  //   </h1>
  // )
};

const AllShops = () => {
  const [query, setQuery] = useState("");
  const { data: shops = [] } = useQuery({
    queryKey: ["shops"],
    queryFn: async () => {
      const res = await fetch("https://camera-shop-server.vercel.app/shops");
      const data = res.json();
      return data;
    },
  });
  const filteredItems = getFilteredItems(query, shops);
  return (
    <div className="bg-slate-50 lg:px-16 px-0  py-10 ">
      <div className="flex justify-between lg:flex-row flex-col pt-1 lg:px-0 px-3 ">
        <h1 className="text-2xl font-bold">Shops</h1>

        <div className="flex lg:mt-0 mt-2">
          <input
            type="text"
            placeholder="Search Shop"
            className="input input-bordered  rounded-none w-full max-w-xs h-9"
            onChange={(e) => setQuery(e.target.value)}
          />

          <div className="flex items-center justify-center bg-black rounded w-20 h-9">
            <BiSearch className="w-6 h-6 text-white font-bold  " />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-3 pt-10 lg:mr-4 mr-5">
        {filteredItems?.map((shop) => (
          <Link to={`/shop/${shop._id}`}>
            <AllShopsCard shop={shop}></AllShopsCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AllShops;
