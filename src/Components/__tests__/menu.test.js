import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTRO_MENU_DATA } from "../../__mocks__/data";
import RestaurantMenu from "../RestaurantMenu";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTRO_MENU_DATA);
    },
  });
});

test("Restro Menu Add cart value render", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <RestaurantMenu />
      </Provider>
    </StaticRouter>
  );
  //   console.log(body);

  await waitFor(() => expect(body.getByTestId("menu")));

  const addBtn = body.getAllByTestId("addBtn");

  fireEvent.click(addBtn[0]);

  const cart = header.getByTestId("cart");

  expect(cart.innerHTML).toBe("1");
});
