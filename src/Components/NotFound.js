import React from "react";

const NotFound = ({ searchText, NotFoundImage }) => {
  return (
    <div className="notFoundPage">
      <div>
        <h4>
          Sorry we are could not found <br /> your search result of <br />
          <span>"{searchText}"</span>
        </h4>
        <img src={NotFoundImage} alt="NotFound" />
      </div>
    </div>
  );
};

export default NotFound;
