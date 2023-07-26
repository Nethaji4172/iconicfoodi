import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ShimmerLoading from "./ShimmerLoading";
import { IMGURL } from "./Config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import useRestaurant from "../Utils/useRestaurant";
import { RESTUARANT_MENU } from "../Components/Config";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  qtyItem,
  updateItem,
  removeQty,
  updateOneItem,
} from "../Utils/CartSlice";
import Input from "./Input";
import SimpleBtn from "./SimpleBtn";
import ConfigBtn from "./ConfigBtn";

const RestaurantMenu = () => {
  const [count, setCount] = useState(1);
  const [countItem, setCountItem] = useState(1);
  const [proCard, setProCard] = useState({});
  const [menuList, setMenuList] = useState([]);
  const { id } = useParams();

  const menumain = useRestaurant(RESTUARANT_MENU, id);

  const cartCount = useSelector((store) => store.cart.items);
  const cartqty = useSelector((store) => store.cart.productQTY);
  // Set data to the AllRestro
  useEffect(() => {
    const menuCard = menumain?.data?.cards[0]?.card?.card?.info;
    const findMenu = menumain?.data?.cards.find((fn) => fn.groupedCard);
    setProCard(menuCard);
    // console.log(findMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    setMenuList(findMenu?.groupedCard?.cardGroupMap?.REGULAR?.cards);
    return () => {};
  }, [menumain, cartCount, cartqty]);

  const handleDropDown = (index) => {
    setCount(index);
  };

  const dispatch = useDispatch();

  const addFoodSimpleItems = (item) => {
    const plus = cartqty.findIndex(
      (fn) => item?.card?.info?.id === fn.productItem
    );

    const init = () => {
      dispatch(addItem(item));
      const newObject = {
        productItem: item?.card?.info?.id,
        productName: item?.card?.info?.name,
        productPrice: item?.card?.info?.price,
        productImage: item?.card?.info?.imageId,
        productDescription: item?.card?.info?.description,
        qty: countItem,
      };
      dispatch(qtyItem(newObject));
    };

    if (cartqty.length === 0) {
      init();
    } else if (cartqty.length >= 0) {
      if (plus === -1) {
        init();
      } else {
        cartqty[plus].qty === 0 && dispatch(updateOneItem(plus));
      }
    }
  };

  const handleMinus = (item) => {
    const plus = cartqty.findIndex((fn) => item?.id === fn.productItem);

    if (cartqty[plus].qty === 0) {
      dispatch(removeQty(plus));
    } else {
      const newObject = {
        productItem: item?.id,
        productName: item?.name,
        productPrice: item?.price,
        productImage: item?.imageId,
        productDescription: item?.description,
        qty: cartqty[plus].qty - 1,
      };
      dispatch(updateItem(newObject));
    }
  };
  const handlePlus = (item) => {
    const plus = cartqty.findIndex((fn) => item?.id === fn.productItem);
    const newObject = {
      productItem: item?.id,
      productName: item?.name,
      productPrice: item?.price,
      productImage: item?.imageId,
      productDescription: item?.description,
      qty: cartqty[plus].qty + 1,
    };
    dispatch(updateItem(newObject));
  };

  return (
    <div className="container">
      <div className="containerInner">
        {!proCard ? (
          <ShimmerLoading count={4} />
        ) : (
          <div className="productMenuCard">
            <div className="product-card">
              <div className="product-img">
                <img
                  src={
                    proCard?.cloudinaryImageId &&
                    IMGURL + proCard?.cloudinaryImageId
                  }
                  alt=""
                />
              </div>
              <div className="product-des">
                <h1>{proCard?.name}</h1>
                <h3>
                  {proCard?.areaName}
                  {",  "}
                  <span>{proCard?.sla?.lastMileTravelString}</span>
                </h3>
              </div>
            </div>
            <div className="menulist">
              {menuList?.map((item, index) => (
                <div key={index}>
                  {!item?.card?.card?.itemCards ||
                  item?.card?.card?.itemCards.length === 0 ? null : (
                    <div
                      count={index}
                      onClick={() => handleDropDown(index)}
                      className={
                        count === index ? "menuListItem active" : "menuListItem"
                      }
                    >
                      <>
                        <div className="category">
                          <div className="category-title">
                            {item?.card?.card?.title}{" "}
                            <span>({item?.card?.card?.itemCards.length})</span>
                          </div>

                          <span>
                            <FontAwesomeIcon icon={faAngleDown} />
                          </span>
                        </div>
                        <div className="categoryItem" data-testid="menu">
                          {item?.card?.card?.itemCards?.map((item) => (
                            <div
                              key={item?.card?.info?.id}
                              className="menuItem"
                            >
                              <div className="menuItem-left">
                                <div className="menuItem-veg-or-nonveg">
                                  {item?.card?.info?.itemAttribute
                                    ?.vegClassifier === "NONVEG" ? (
                                    <div className="icon-nonveg">
                                      <div className="triangle-top"></div>
                                    </div>
                                  ) : (
                                    <div className="icon-veg">
                                      <div className="circle"></div>
                                    </div>
                                  )}
                                </div>
                                <div className="menuItem-title">
                                  {item?.card?.info?.name}
                                </div>
                                <div className="menuItem-price">
                                  &#8377;{" "}
                                  {item?.card?.info?.price
                                    ? item?.card?.info?.price / 100
                                    : item?.card?.info?.defaultPrice / 100}
                                </div>
                                <div className="menuItem-description">
                                  {!item?.card?.info?.description
                                    ? item?.card?.info?.name
                                    : item?.card?.info?.description}
                                </div>
                              </div>
                              <div
                                className={
                                  item?.card?.info?.imageId
                                    ? "menuItem-right"
                                    : "menuItem-right noimg"
                                }
                              >
                                {item?.card?.info?.imageId && (
                                  <div className="menuItem-img">
                                    <img
                                      src={IMGURL + item?.card?.info?.imageId}
                                      alt=""
                                    />
                                  </div>
                                )}

                                {!item?.card?.info?.addons ? (
                                  <SimpleBtn
                                    cartCount={cartCount}
                                    addFoodSimpleItems={addFoodSimpleItems}
                                    handleMinus={handleMinus}
                                    handlePlus={handlePlus}
                                    cartqty={cartqty}
                                    item={item}
                                  />
                                ) : (
                                  <ConfigBtn item={item} cartqty={cartqty} />
                                )}
                              </div>
                            </div>
                          ))}
                        </div>
                      </>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantMenu;
