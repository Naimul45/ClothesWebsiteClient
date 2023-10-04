import React, { useContext, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ prodDet }) => {
  const [toastData, setToastData] = useState();
  if (toastData) {
    toast.success("Your order has been successful !");
  }

  const { user } = useContext(AuthContext);
  // console.log("user : ", user);
  const { data: total = [] } = useQuery({
    queryKey: ["total"],
    queryFn: async () => {
      const res = await fetch(
        "https://camera-shop-server.vercel.app/cartTotal"
      );
      const data = res.json();

      return data;
    },
  });

  const OrderData = (event) => {
    event.preventDefault();

    const form = event.target;
    const userName = form.name.value;
    const email = form.email.value;
    const number = form.number.value;
    const district = form.district.value;
    const city = form.city.value;
    const streetAddress = form.streetAddress.value;

    console.log(total, userName, email, number, district, city, streetAddress);
    const orderDetails = {
      total,
      userName,
      email,
      number,
      district,
      city,
      streetAddress,
    };
    // console.log(orderDetails);

    fetch("https://camera-shop-server.vercel.app/confirmorder", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(orderDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setToastData(data);
      })
      .catch((error) => {
        console.log(error);
        // toast.error("error.message");
      });
  };

  return (
    <dialog id="booking-modal" className="modal lg:w-full w-[360px]">
      <div className="modal-box lg:w-full w-[320px]">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
        <h3 className="font-bold text-lg">Confirm Your Order</h3>
        <div className="border border-solid border-gray-400 text-lg font-base rounded mt-3">
          <div className="flex justify-between mt-3 ml-6 lg:mr-60 mr-24 ">
            <h3>Subtotal </h3>
            <p>৳ {}</p>
          </div>
          <div className="flex justify-between mt-3 ml-6 lg:mr-28  ">
            <h3>Shipping</h3>
            <p className="lg:ml-6 ml-[68px]"> Shipping To Dhaka</p>
          </div>

          <div className="flex justify-between mt-3 ml-6 lg:mr-60 mb-4 mr-24 ">
            <h3 className="text-emerald-800 text-xl font-semibold">Total </h3>
            <p> ৳</p>
          </div>
        </div>

        <form onSubmit={OrderData}>
          <div className="mt-3">
            <label className="text-lg font-semibold text-slate-600">
              Your Name
            </label>
            <br />
            <input
              type="text"
              value={user?.displayName}
              name="name"
              readOnly
              className=" border border-solid border-neutral-400  w-full px-4 py-2 rounded"
            />
            <br />
          </div>

          <div className="mt-3">
            <label className="text-lg font-semibold  text-slate-600">
              Your Email
            </label>
            <br />
            <input
              value={user?.email}
              name="email"
              type="email"
              readOnly
              className=" border border-solid border-neutral-400  w-full px-4 py-2 rounded"
            />
            <br />
          </div>
          <div className="mt-3">
            <label className="text-lg font-semibold text-slate-600">
              Phone Number
            </label>
            <br />
            <input
              type="number"
              name="number"
              placeholder="Enter Your Phone Number"
              className=" border border-solid border-neutral-400  w-full px-4 py-2 rounded"
              required
            />
            <br />
          </div>

          <div className="mt-3">
            <label className="text-lg font-semibold text-slate-600">
              Town / City
            </label>
            <br />
            <input
              name="city"
              type="text"
              placeholder="Enter Your Town / City Address"
              className=" border border-solid border-neutral-400  w-full px-4 py-2 rounded"
              required
            />
            <br />
          </div>

          <div className="mt-3">
            <label className="text-lg font-semibold text-slate-600">
              District
            </label>
            <br />
            <input
              name="district"
              type="text"
              placeholder="Enter Your District Address"
              className=" border border-solid border-neutral-400  w-full px-4 py-2 rounded"
              required
            />
            <br />
          </div>

          <div className="mt-3">
            <label className="text-lg font-semibold text-slate-600">
              Street Address
            </label>
            <br />
            <input
              name="streetAddress"
              type="text"
              placeholder="Enter Your Street Address"
              className=" border border-solid border-neutral-400  w-full px-4 py-2 rounded"
              required
            />
            <br />
          </div>
          <input
            type="submit"
            className="btn mt-4 w-full px-12 bg-gradient-to-r from-emerald-800 to-slate-800 text-white text-lg"
          />
        </form>
      </div>
    </dialog>
  );
};

export default BookingModal;
