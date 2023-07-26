import React from "react";

const Offline = ({ NotFoundImage }) => {
  return (
    <div className="notFoundPage containerInner">
      <div style={{ padding: "50px 0" }}>
        <h4>You are Offline please check you internet connection</h4>
        <img src={NotFoundImage} alt="NotFound" />
      </div>
    </div>
  );
};

export default Offline;
