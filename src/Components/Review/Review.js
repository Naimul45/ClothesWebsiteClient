import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const Review = ({ product, setReviewVai }) => {
  // console.log("product  :", product);
  const { register, handleSubmit } = useForm();
  const reviewhandler = (data) => {
    console.log("data :", data);
    const customerReview = {
      product: product[0].name,
      data,
    };
    // console.log(customerReview);
    fetch("https://camera-shop-server.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customerReview),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Your review has been successfully added");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        // toast.error("error.message");
      });
  };

  // const ratingHandler = (rating) => {
  //   console.log("data :", rating);

  //   // ekhane if er kaj ta dekhanor jonno rating star a double click korte hocche
  //   if (rating) {
  //     setReviewVai(rating);
  //   }
  // };
  return (
    <form
      onSubmit={handleSubmit(reviewhandler)}
      className="lg:mt-0 mt-6 lg:mx-0 mx-3 pb-6"
    >
      <h1 className="text-xl font-semibold">Add A Review</h1>
      {/* <label>
        Your rating :{" "}
        <div className="rating inline mt-2">
          <input
            type="radio"
            className="mask mask-star"
            {...register("rating", { required: true })}
            onClick={() => setReviewVai("rating : 1")}
          />
          <input
            type="radio"
            className="mask mask-star"
            checked
            {...register("rating", { required: true })}
            onClick={() => setReviewVai("rating : 2")}
          />
          <input
            type="radio"
            className="mask mask-star"
            {...register("rating", { required: true })}
            onClick={() => setReviewVai("rating : 3")}
          />
          <input
            type="radio"
            className="mask mask-star"
            {...register("rating", { required: true })}
            onClick={() => setReviewVai("rating : 4")}
          />
          <input
            type="radio"
            className="mask mask-star"
            {...register("rating", { required: true })}
            onClick={() => setReviewVai("rating : 5")}
          />
        </div>
      </label> */}
      <br />
      <label className="mt-2">Your review : </label>
      <br />
      <textarea
        {...register("review", { required: true })}
        type="text"
        className="textarea textarea-ghost  w-full border-solid border border-stone-500 lg:h-44 bg-white"
        required
      ></textarea>
      <br />
      <label>Name : </label>
      <br />
      <input
        type="text"
        className="input  w-full border-solid border border-stone-500"
        required
        {...register("name", { required: true })}
      />
      <br />
      <label>Email : </label>
      <br />
      <input
        {...register("email", { required: true })}
        type="email"
        className="input w-full  lg:w-[566px] border-solid border border-stone-500"
        required
      />
      <br />
      <button className="btn btn-red bg-red-500  text-white hover:text-black w-44 mt-2">
        Submit
      </button>
    </form>
  );
};

export default Review;
