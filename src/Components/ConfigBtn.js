import { useDispatch } from "react-redux";
import {
  addItem,
  removeItem,
  removeQty,
  updateItem,
  updateConfigItem,
} from "../Utils/CartSlice";
import Model from "./Model";
import { useEffect, useState } from "react";
import Input from "./Input";
import RepeatModel from "./RepeatModel";
import ModelUpdate from "./ModelUpdate";

const ConfigBtn = ({ item, cartqty }) => {
  const [model, setModel] = useState(false);
  const [modelUpdate, setModelUpdate] = useState(false);
  const [repeatModel, setRepeatModel] = useState(false);
  const find = cartqty.findIndex(
    (fn) => item?.card?.info?.id === fn.productItem
  );
  const dispatch = useDispatch();
  const addFoodConfigItems = (item) => {
    setModel(!model);
  };

  const hideModel = () => {
    setModel(!model);
  };

  useEffect(() => {}, [cartqty]);

  const handleMinus = (item) => {
    const plus = cartqty.findIndex((fn) => item?.id === fn.productItem);
    if (cartqty[plus].qty <= 1) {
      dispatch(removeQty(plus));
    } else {
      const newObject = {
        productItem: item?.id,
        productName: item?.name,
        qty: cartqty[plus].qty - 1,
      };
      dispatch(updateItem(newObject));
    }
  };
  const handlePlus = () => {
    setRepeatModel(!repeatModel);
  };

  const choose = () => {
    setRepeatModel(!repeatModel);
    setModelUpdate(!modelUpdate);
  };
  const repeat = () => {
    dispatch(updateConfigItem(find));
    setRepeatModel(!repeatModel);
  };

  model || repeatModel || modelUpdate
    ? document.querySelector("body").classList.add("overlay")
    : document.querySelector("body").classList.remove("overlay");
  return (
    <div>
      {(cartqty.length === 0 || find === -1 || cartqty[find].qty <= 1) && (
        <button
          data-testis="addBtn"
          className="cart-addBtn"
          onClick={() => addFoodConfigItems(item)}
        >
          <span>Add</span>
          <p>customization</p>
        </button>
      )}

      {cartqty.length >= 1 &&
        cartqty.map((store, index) => (
          <div className="index" key={store?.productItem}>
            {store?.productItem === item?.card?.info?.id ? (
              <>
                <div className="qty">
                  <div
                    className="minus"
                    onClick={() => handleMinus(item?.card?.info)}
                  >
                    -
                  </div>
                  <div className="input">
                    <Input cartqty={cartqty} data={item?.card?.info?.id} />
                  </div>
                  <div
                    className="plus"
                    onClick={() => handlePlus(item?.card?.info)}
                  >
                    +
                  </div>
                </div>
              </>
            ) : (
              <button
                data-testis="addBtn"
                className="cart-addBtn"
                onClick={() => addFoodConfigItems(item)}
              >
                <span>Add</span>
                <p>customization</p>
              </button>
            )}
          </div>
        ))}

      {model && <Model item={item} hideModel={hideModel} />}
      {modelUpdate && (
        <ModelUpdate
          item={item}
          hideModel={hideModel}
          cartqty={cartqty}
          setModelUpdate={setModelUpdate}
          modelUpdate={modelUpdate}
        />
      )}

      {repeatModel && (
        <RepeatModel
          find={find}
          cartqty={cartqty}
          choose={choose}
          repeat={repeat}
        />
      )}
    </div>
  );
};

export default ConfigBtn;
