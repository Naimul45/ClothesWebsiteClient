import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const { register, handleSubmit } = useForm();
  const { createUser, profileUpdate, signinwithGoogle } =
    useContext(AuthContext);

  const navigate = useNavigate();

  const googleSignUp = () => {
    signinwithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("signup successfully");
        navigate("/");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  const onSubmit = (data) => {
    console.log("data : ", data);

    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("signup successfully");
        navigate("/");

        const userInfo = {
          displayName: data.firstName,
        };

        profileUpdate(userInfo)
          .then(() => {})
          .catch(() => {});

        fetch("https://camera-shop-server.vercel.app/users", {
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
    <form
      className="hero min-h-screen bg-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center lg:text-left ">
          <img src="https://www.smartpos.website/Login.jpg" alt="" />
        </div>
        <div className=" flex-shrink-0  lg:w-[690px] w-[340px] shadow-2xl bg-base-100 lg:ml-[0px] ml-[-5px] ">
          <h1 className="text-3xl font-bold text-center pt-6">Signup</h1>
          <div className="card-body lg:flex-row flex-col">
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
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered lg:w-[300px]"
                  {...register("lastName")}
                />
              </div>
            </div>

            <div>
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

          <div className="flex flex-col w-full border-opacity-50">
            <div className="form-control mx-6 mb-6">
              <button className="btn btn-primary">Signup</button>
            </div>
            <div className="divider">OR</div>
            <div className="form-control mx-6 mb-6">
              <button
                className="btn bg-black text-white hover:text-black"
                onClick={() => googleSignUp()}
              >
                <FcGoogle className="mr-4 text-2xl " />
                Signup with Googgle
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Signup;
