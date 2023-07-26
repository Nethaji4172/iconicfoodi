import React from "react";

const ShimmerLoading = ({ count }) => {
  return (
    <div className="row" data-testid="shimmer">
      {Array(count)
        .fill()
        .map((_, index) => (
          <div className="card shimmer" key={index}>
            <div className="img loading-animation"></div>
            <div className="title loading-animation"></div>
            <div className="cuisines"></div>
            <div className="otherInfo">
              <div className="ratings"></div>
              <div className="deliveryTime"></div>
              <div className="cost"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ShimmerLoading;
