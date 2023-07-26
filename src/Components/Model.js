import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { qtyItem } from "../Utils/CartSlice";
const Model = ({ item, hideModel }) => {
  const [addonsArray, setAddonsArray] = useState([]);
  const [addpro, setaddpro] = useState([]);
  const [addonsPrice, setAddonsPrice] = useState(null);
  const [showAddon, setShowAddon] = useState(false);
  const [countItem, setCountItem] = useState(1);

  useEffect(() => {
    priceUpdate();
  }, [addonsArray, addonsPrice]);

  const addArray = (name) => {
    const findAddons = addonsArray.findIndex((fn) => fn === name);

    if (addonsArray.length === 0) {
      setAddonsArray([name]);
    } else if (findAddons === -1) {
      setAddonsArray([...addonsArray, name]);
    } else {
      addonsArray.splice(findAddons, 1);
    }
  };

  const priceUpdate = () => {
    const initialValue = 0;
    const sumWithInitial = addonsArray
      .map((fn) => fn.price)
      .reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        initialValue
      );
    setAddonsPrice(sumWithInitial / 100);
  };

  const checkboxclick = (name) => {
    addArray(name);
    priceUpdate();
  };

  const showMore = () => {
    setShowAddon(!showAddon);
  };

  const init = () => {
    const newObject = {
      productItem: item?.card?.info?.id,
      productName: item?.card?.info?.name,
      qty: countItem,
    };
    dispatch(qtyItem(newObject));
  };

  const dispatch = useDispatch();

  const addConfigProduct = (item, addonsArray) => {
    console.log(item);
    const newObject = {
      productItem: item?.id,
      productName: item?.name,
      productPrice: item?.price,
      productImage: item?.imageId,
      productDescription: item?.description,
      qty: countItem,
      addons: addonsArray,
    };
    dispatch(qtyItem(newObject));
    hideModel();
  };

  return (
    <div className="model">
      <div className="model_overlay" onClick={() => hideModel()}></div>
      <div className="model_block">
        <div className="model-content">
          <div className="model_head">
            <div className="menuItem-veg-or-nonveg">
              {item?.card?.info?.itemAttribute?.vegClassifier === "NONVEG" ? (
                <div className="icon-nonveg">
                  <div className="triangle-top"></div>
                </div>
              ) : (
                <div className="icon-veg">
                  <div className="circle"></div>
                </div>
              )}
            </div>
            <div className="model-head-inner">
              <div className="menuItem-title">
                Customize "{item?.card?.info?.name}"
              </div>
              <div className="menuItem-price">
                &#8377; {item?.card?.info?.price / 100}
              </div>
            </div>
            <FontAwesomeIcon icon={faXmark} onClick={() => hideModel()} />
          </div>
          <div className="model_body">
            {item?.card?.info?.addons.map((addon) => (
              <div className="addons-group" key={addon.groupId}>
                <div className="addons-title">
                  {addon.groupName} <span>(optional)</span>
                </div>

                {addon.choices.map((choice, index) => (
                  <div className="addons-choices" key={index}>
                    <input
                      type="checkbox"
                      id={choice.name}
                      name={choice.name}
                      onClick={() => checkboxclick(choice)}
                    />
                    <label htmlFor={choice.name}>
                      <div className="choices-name">{choice.name}</div>
                      <div className="choices-price">
                        &#8377; {choice.price / 100}
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="model_foot">
            <div className="added-item-list">
              {addonsArray.length <= 2 ? (
                <>
                  <div className="added-item-inner">
                    {addonsArray.map((fn) => (
                      <div className="added-item" key={fn.id}>
                        <>{fn.name},&nbsp;</>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  {showAddon ? (
                    <>
                      <div className="added-item-inner">
                        {addonsArray.map((fn) => (
                          <div className="added-item" key={fn.id}>
                            <>{fn.name},&nbsp;</>
                          </div>
                        ))}
                      </div>
                      <div className="addShow" onClick={() => showMore()}>
                        Hide
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="added-item-inner">
                        {addonsArray.slice(0, 2).map((fn) => (
                          <div className="added-item" key={fn.id}>
                            {fn.name},&nbsp;
                          </div>
                        ))}
                      </div>
                      <div className="addShow" onClick={() => showMore()}>
                        +{addonsArray.slice(2).length} Add on
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
            <div
              className={addonsArray.length === 0 ? "addBtn notadd" : "addBtn"}
              onClick={() => addConfigProduct(item?.card?.info, addonsArray)}
            >
              {addonsArray.length === 0 ? (
                <>Total &#8377; {item?.card?.info?.price / 100}</>
              ) : (
                <>Total &#8377; {item?.card?.info?.price / 100 + addonsPrice}</>
              )}
              <span>add item</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
