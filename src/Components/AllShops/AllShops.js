import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiSearch } from "react-icons/bi";
import AllShopsCard from "./AllShopsCard";
const AllShops = () => {
  const { data: shops = [] } = useQuery({
    queryKey: ["shops"],
    queryFn: async () => {
      const res = await fetch("http://localhost:4000/shops");
      const data = res.json();
      return data;
    },
  });
  return (
    <div className="bg-slate-50 lg:px-16 px-0  py-10 ">
      <div className="flex justify-between lg:flex-row flex-col pt-1 lg:px-0 px-3 ">
        <h1 className="text-2xl font-bold">Shops</h1>

        <div className="flex lg:mt-0 mt-2">
          <input
            type="text"
            placeholder="Search Shop"
            className="input input-bordered  rounded-none w-full max-w-xs h-9"
          />

          <div className="flex items-center justify-center bg-black rounded w-20 h-9">
            <BiSearch className="w-6 h-6 text-white font-bold  " />
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-3 pt-10 lg:mr-4 mr-5">
        {shops?.map((shop) => (
          <AllShopsCard shop={shop}></AllShopsCard>
        ))}
      </div>
    </div>
  );
};

export default AllShops;
