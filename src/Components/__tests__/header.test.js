import { render } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import store from "../../Utils/store";
import UserContext from "../../Utils/UserContext";
import { StaticRouter } from "react-router-dom/server";
import Footer from "../Footer";

test("header renders then check logo is loading or not", () => {
  // render header Component
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        {/* <UserContext.Provider value={{ user }}> */}
        <Header />
        {/* </UserContext.Provider> */}
      </Provider>
    </StaticRouter>
  );
  //   console.log(header);

  const logo = header.getAllByTestId("logo");
  console.log(logo[0].src);
  expect(logo[0].src).toBe("http://localhost/fileMock.js");
});

test("header renders then check online status be ticked ✅", () => {
  // render header Component
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Footer />
      </Provider>
    </StaticRouter>
  );

  const onlineStatus = header.getByTestId("onlineStatus");
  //   console.log(onlineStatus.innerHTML);

  expect(onlineStatus.innerHTML).toBe("✅");
});

test("header renders then check cart count is 0", () => {
  // render header Component
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

  const cart = header.getByTestId("cart");
  //   console.log(cart.innerHTML);
  expect(cart.innerHTML).toBe("0");
});
