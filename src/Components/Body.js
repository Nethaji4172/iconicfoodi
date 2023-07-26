import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import NotFound from "./NotFound";
import ShimmerLoading from "./ShimmerLoading";
import NotFoundImage from "../image/not-found.gif";
import { Link } from "react-router-dom";
import { searchFilter } from "../Utils/helper";
import { HOME_URL } from "./Config";
import useRestuarant from "../Utils/useRestaurant";
import useOnline from "../Utils/useOnline";

import Offline from "./Offline";

const Body = () => {
  // State Managament
  const [searchText, setSearchText] = useState("");
  const [allRestro, setAllRestro] = useState([]);
  const [filter, setFilter] = useState([]);

  // checking user in online or not
  const checkOnline = useOnline();

  // fetching API
  const restroObject = useRestuarant(HOME_URL);

  // Set data to the AllRestro
  useEffect(() => {
    const restroMain = restroObject?.data?.cards[2]?.data?.data?.cards;
    setAllRestro(restroMain);
  }, [restroObject]);

  // handling Search and setting the Fiter data
  useEffect(() => {
    handleSearch();
    return () => {};
  }, [searchText]);

  // handling Submit and setting the Fiter data
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  // handling Search and call Utils Filter
  const handleSearch = () => {
    const handleSearchItem = searchFilter(allRestro, searchText);
    setFilter(handleSearchItem);
  };

  if (!checkOnline) {
    return <Offline NotFoundImage={NotFoundImage} />;
  }

  //Return JSX
  return (
    <div className="container">
      <div className="containerInner p-8">
        {!allRestro ? (
          <ShimmerLoading count={10} />
        ) : (
          <>
            <Search
              searchText={searchText}
              setSearchText={setSearchText}
              handleSubmit={handleSubmit}
            />
            <div className="row" data-testid="resto-list">
              {searchText === "" ? (
                allRestro.map((item) => (
                  <Link to={"/restaurant/" + item.data.id} key={item.data.id}>
                    <RestaurantCard {...item.data} />
                  </Link>
                ))
              ) : searchText.length && filter.length ? (
                filter.map((item) => (
                  <Link to={"/restaurant/" + item.data.id} key={item.data.id}>
                    <RestaurantCard key={item.data.id} {...item.data} />{" "}
                  </Link>
                ))
              ) : (
                <NotFound
                  searchText={searchText}
                  NotFoundImage={NotFoundImage}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Body;
