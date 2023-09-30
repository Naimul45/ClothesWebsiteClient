import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Orders = () => {
  const [order, setOrder] = useState({});
  console.log("order :", order);
  const { user } = useContext(AuthContext);
  // const totalPrice = order.data.RecentPrice * order.value;

  // console.log(totalPrice);

  const { register, handleSubmit } = useForm();

  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(
        `https://camera-shop-server.vercel.app/addtocart?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  const handleDelete = (order) => {
    fetch(`https://camera-shop-server.vercel.app/confirmorder/${order._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Your order has been successfully deleted");
        refetch();
      });
  };

  const onSubmits = (data) => {
    // console.log("data :", data);
    fetch(`https://camera-shop-server.vercel.app/cartTotal`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
        // toast.error("error.message");
      });
  };

  return (
    <div className=" flex lg:mx-8 lg:my-6 lg:flex-row flex-col">
      <div className="overflow-x-auto ">
        <table className="table lg:w-[835px]">
          {/* head */}
          <thead className="bg-slate-300">
            <tr>
              <th></th>
              <th className="text-xl font-bold">Product</th>
              <th className="text-xl font-bold">Price</th>
              <th className="text-xl font-bold">Quantity</th>
              <th className="text-xl font-bold">Total</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {orders?.map(
              (order) => (
                <tr className="bg-base-100">
                  <th></th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className=" font-semibold">
                          {order.data.productName}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className=" font-semibold">৳{order.data.RecentPrice}</td>
                  <td className=" font-semibold">{order.value}</td>
                  <td className=" font-semibold">
                    ৳{order.data.RecentPrice * order.value}
                  </td>
                  <th>
                    <button
                      className="btn btn-red bg-red-500 btn-xs text-white hover:text-black"
                      onClick={() => handleDelete(order)}
                    >
                      Delete
                    </button>
                  </th>
                  {/* setOrder={order} */}
                </tr>
              )

              // <Order order={order} setOrder={setOrder}></Order>
            )}
          </tbody>
        </table>
      </div>

      <form
        onSubmit={handleSubmit(onSubmits)}
        className="border border-solid border-blue-100 lg:ml-4 ml-2 lg:w-96 w-[345px] lg:mt-0 mt-4"
      >
        <h1 className="text-2xl font-semibold text-slate-500 m-4">
          CART TOTALS
          <div className="flex justify-between py-4 mt-4">
            <h4 className="text-lg">Subtotal</h4>
            <p className="text-lg">
              ৳{" "}
              <input
                type="text"
                {...register("subtotal")}
                readOnly
                className="w-8"
              />
            </p>
          </div>
          <hr />
          <div className="flex justify-between py-4">
            <h4 className="text-lg">Shipping To</h4>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Your Address"
              className="text-base px-2  border border-solid  border-neutral-400"
              {...register("address")}
            />
          </div>
          <hr />
          <div className="flex justify-between py-4  text-emerald-800">
            <h4 className="text-2xl">Total </h4>
            <p className="text-2xl">
              ৳{" "}
              <input
                type="text"
                {...register("total")}
                readOnly
                className="w-8"
              />
            </p>
          </div>
          <button
            className="btn btn-primary w-full px-12 bg-gradient-to-r from-emerald-800 to-slate-800 text-white text-lg"
            onClick={() => document.getElementById("booking-modal").showModal()}
          >
            CHECKOUT
          </button>
        </h1>
        {/* {order && <BookingModal prodDet={order}></BookingModal>}; */}
      </form>
    </div>
  );
};

export default Orders;
