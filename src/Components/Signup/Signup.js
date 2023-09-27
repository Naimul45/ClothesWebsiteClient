import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, profileUpdate } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log("data : ", data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("signup successfully");

        const userInfo = {
          displayName: data.firstName,
        };

        profileUpdate(userInfo)
          .then(() => {})
          .catch(() => {});

        fetch("http://localhost:4000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((res) => res.json())
          .then((data) => console.log(data));
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
        <div className=" flex-shrink-0 w-full max-w-[690px] shadow-2xl bg-base-100 ">
          <h1 className="text-3xl font-bold text-center pt-6">Signup</h1>
          <div className="card-body flex-row">
            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered lg:w-[300px]"
                  {...register("firstName")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text lg:w-[300px]">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email")}
                />
              </div>
            </div>

            <div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered lg:w-[300px]"
                  {...register("lastName")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text lg:w-[300px]">Password</span>
                </label>
                <input
                  {...register("password")}
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
            </div>
          </div>

          <div className="form-control mx-6 mb-6">
            <button className="btn btn-primary">Signup</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
