import React, { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Rev = ({ review }) => {
  const { user } = useContext(AuthContext);
  // console.log("review  : ", review);
  return (
    <div className="indicator lg:mx-0 mx-3 lg:w-[400px] w-[340px] lg:h-[155px] ">
      <div className="card  lg:w-[400px] w-[340px] lg:h-[155px]">
        <div className="mt-10 lg:w-[400px] w-[340px] lg:h-[155px]">
          <div className="flex">
            <FaUserCircle className="text-5xl mr-4" />
            <h4 className="text-lg text-slate-700">{review.data.name}</h4>
          </div>

          <p className="ml-[65px] mt-[-15px] lg:w-full">{review.data.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Rev;
