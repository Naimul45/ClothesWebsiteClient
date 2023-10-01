import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
const Navbar = () => {
  const { logOut, user } = useContext(AuthContext);
  // console.log("user", user);

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

  console.log("orders : ", orders.length);

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Logout successful");
      })
      .catch(() => {});
  };
  return (
    <div className="navbarvai">
      <div className="navbar px-20 navbarvai">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-2xl text-white">
            MUHAMMAD
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end pr-16">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                {orders ? (
                  <span className="badge badge-sm indicator-item">
                    {orders.length}
                  </span>
                ) : (
                  <span className="badge badge-sm indicator-item">0</span>
                )}
              </div>
            </label>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">
                  {orders?.length} Items
                </span>
                {/* <span className="text-info">Subtotal: $999</span> */}
                <div className="card-actions">
                  <Link to="/orders" className="btn btn-primary btn-block">
                    <button>View cart</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="dropdown dropdown-end">
            <div className="flex">
              {user ? (
                <button className="btn btn-ghost text-white">
                  <AiOutlineUser className="w-10 text-white text-2xl  font-bold pr-2" />
                  {user.displayName}
                </button>
              ) : (
                <Link to="/login" className="text-xl text-white font-semibold">
                  Login
                </Link>
              )}
            </div>

            {user ? (
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>

                <li onClick={() => handleLogout()}>
                  <a>Logout</a>
                </li>
              </ul>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>

      <div className="flex py-2 px-20 ">
        <Link to="/">
          <button className="btn btn-ghost hover:btn-primary btn-sm mr-3 text-white">
            Home
          </button>
        </Link>
        <Link to="/allshops">
          <button className="btn btn-ghost hover:btn-primary btn-sm mr-3 text-white">
            Shops
          </button>
        </Link>
        <Link to="/allproducts">
          <button className="btn btn-ghost hover:btn-primary btn-sm mr-3 text-white">
            Products
          </button>
        </Link>
        <Link to="/orders">
          <button className="btn btn-ghost hover:btn-primary btn-sm mr-3 text-white">
            Orders
          </button>
        </Link>
        <Link to="/">
          <button className="btn btn-ghost hover:btn-primary btn-sm mr-3 text-white">
            Delivery Address
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
