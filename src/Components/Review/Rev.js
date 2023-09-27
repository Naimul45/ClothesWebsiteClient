import React from "react";

const Rev = ({ review }) => {
  console.log("review  : ", review);
  return (
    <div className="indicator lg:mx-0 mx-3">
      <div className="card border">
        <div className="card-body">
          <p>{review.data.review}</p>
        </div>
      </div>
    </div>
  );
};

export default Rev;
