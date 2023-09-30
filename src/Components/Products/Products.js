import React from "react";
import { useQuery } from "@tanstack/react-query";
import ProductsCard from "./ProductsCard";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const Products = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["productsData"],
    queryFn: async () => {
      const res = await fetch("https://camera-shop-server.vercel.app/products");
      const data = res.json();
      return data;
    },
  });

  return (
    <div className="bg-slate-200 mt-6  lg:px-8 rounded">
      <div className="flex justify-between">
        <h1 className="text-3xl font-bold p-6">Products</h1>
        <div className="p-6">
          <Link to="/allproducts">
            <button className="btn btn-sm  button text-white px-4 ">
              See more <AiOutlineArrowRight className="ml-2 text-lg" />
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:gap-6 gap-2 lg:grid-cols-5 lg:pl-0 pl-2">
        {products?.map((product) => (
          <Link to={`/especificprod/${product._id}`}>
            <ProductsCard product={product}></ProductsCard>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
