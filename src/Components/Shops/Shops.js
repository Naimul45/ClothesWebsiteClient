import React from "react";
import { AiOutlineArrowRight, AiOutlineUnorderedList } from "react-icons/ai";
import { useQuery } from "@tanstack/react-query";
import ShopsCard from "./ShopsCard";
import { Link } from "react-router-dom";

const Shops = () => {
  const { data: shops = [] } = useQuery({
    queryKey: ["shopsData"],
    queryFn: async () => {
      const res = await fetch("https://camera-shop-server.vercel.app/shops");
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="bg-base-200 mt-6  lg:px-8 rounded ">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold p-6">Shops</h1>
        <div className="p-6">
          <Link to="/allshops">
            <button className="btn btn-sm  button text-white px-6 w-[160px]">
              See more <AiOutlineArrowRight className="ml-2 text-lg" />
            </button>
          </Link>
        </div>
      </div>

      <div className="grid lg:grid-cols-6 grid-cols-2 gap-6  pb-4 pl-2 pr-4">
        {shops?.map((shop) => (
          <Link to={`/shop/${shop._id}`}>
            <ShopsCard key={shop._id} shop={shop}></ShopsCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Shops;
