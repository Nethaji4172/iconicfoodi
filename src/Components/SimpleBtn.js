import React from "react";
import Input from "./Input";

const SimpleBtn = ({
  cartCount,
  addFoodSimpleItems,
  handleMinus,
  handlePlus,
  cartqty,
  item,
}) => {
  const fun = cartqty;
  if (!fun) return;
  const final = fun.findIndex((fn) => fn.productItem === item?.card?.info?.id);
  const qty0 = fun[final] === undefined ? null : fun[final].qty;
  return (
    <>
      {!cartCount.length || qty0 === 0 ? (
        <button
          data-testis="addBtn"
          className="cart-addBtn"
          onClick={() => addFoodSimpleItems(item)}
        >
          <span>Add</span>
        </button>
      ) : (
        <>
          {cartCount?.map((storeCart, index) => (
            <div key={index}>
              {storeCart?.card?.info?.name === item?.card?.info?.name ? (
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
                  onClick={() => addFoodSimpleItems(item)}
                >
                  <span>Add</span>
                </button>
              )}
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default SimpleBtn;
