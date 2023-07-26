import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import UserContext from "../Utils/UserContext";
import Logo from "../assets/images/logo-iconicfoodi.png";
import { useSelector } from "react-redux";

const Header = () => {
  // const { user } = useContext(UserContext);

  const cartItems = useSelector((item) => item.cart.productQTY);

  const cartCount = cartItems.filter((fn) => fn.qty >= 1);

  return (
    <header>
      <div className="containerInner">
        <nav>
          <div className="logo">
            <Link to="/">
              <img data-testid="logo" src={Logo} alt="iconic Foodi" />
            </Link>
          </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/menu">Menu</Link>
            </li> */}
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/instamart">Instamart</Link>
            </li>
            <li>
              <Link to="/cart">
                Cart <span data-testid="cart">{cartCount.length}</span>
              </Link>
            </li>
            {/* <li>{user.name}</li> */}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
