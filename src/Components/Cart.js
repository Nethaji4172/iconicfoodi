import { useDispatch, useSelector } from "react-redux";
import { IMGURL } from "./Config";
import { clearcart, removeItem } from "../Utils/CartSlice";

const Cart = () => {
  const cartItem = useSelector((item) => item.cart.productQTY);

  // console.log(cartItem);

  localStorage.setItem("user", JSON.stringify(cartItem));
  const userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);

  const dispatch = useDispatch();

  const handleclearCart = () => [dispatch(clearcart())];

  const handleDeleteItem = (item) => {
    dispatch(removeItem(cartItem.indexOf(item)));
    // console.log(item);
    // console.log(cartItem.indexOf(item));
  };

  return (
    <div className="cart-page">
      <div className="container">
        <h1>your cart: {cartItem.length}</h1>
        <button className="clearBtn" onClick={() => handleclearCart()}>
          Clear cart
        </button>
        <div className="cart-main-container">
          {cartItem.map((item, index) => (
            <div className="cart-container" key={index}>
              <img src={IMGURL + item?.productImage} alt={item?.productName} />
              <h4>{item?.productName}</h4>
              <h5> &#8377; {Number(item?.productPrice / 100)}</h5>
              <div className="cart-addons">
                {item.addons &&
                  item.addons.map((itemAddons) => (
                    <div key={itemAddons.id}>{itemAddons.name},&nbsp;</div>
                  ))}
              </div>
              <button onClick={() => handleDeleteItem(item)}>
                Delete Item
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
