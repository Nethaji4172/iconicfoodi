import React, { useContext } from "react";
import { IMGURL } from "./Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import UserContext from "../Utils/UserContext";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  slaString,
  costForTwoString,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card">
      <img src={`${IMGURL}${cloudinaryImageId}`} alt="" />
      <div className="title">{name}</div>
      <div className="cuisines">
        {cuisines.join(", ").length < 40
          ? cuisines.join(", ")
          : `${cuisines.join(", ").slice(0, 80)}...`}
      </div>
      <div className="otherInfo">
        <div className="ratings">
          <FontAwesomeIcon icon={faStar} className="star" />
          {avgRating}
        </div>
        <div className="deliveryTime">{slaString}</div>
        <div className="cost">{costForTwoString}</div>
      </div>
      {/* <p>{user.name}</p>
      <p>{user.email}</p> */}
    </div>
  );
};

export default RestaurantCard;
