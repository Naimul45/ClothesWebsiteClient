import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signinUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    signinUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Login successfully");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.message);
      });
  };

  return (
    <form className="hero min-h-screen" onSubmit={handleSubmit(onSubmit)}>
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left ">
          <img src="https://www.smartpos.website/Login.jpg" alt="" />
        </div>
        <div className=" flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 ">
          <h1 className="text-3xl font-bold text-center pt-6">Login</h1>
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                {...register("email")}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password")}
                type="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <Link
                  to="/signup"
                  className="label-text-alt link link-hover text-sm"
                >
                  Don't have an account ? please create one.
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
