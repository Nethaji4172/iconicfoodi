import "@testing-library/jest-dom";
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../Utils/store";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { RESTRO_DATA } from "../../__mocks__/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTRO_DATA);
    },
  });
});

test("Test Shimmer Component render", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //   console.log(body);

  const shimmer = body.getByTestId("shimmer");

  expect(shimmer.children.length).toBe(10);
});

test("Test Restro Component render", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //   console.log(body);

  await waitFor(() => expect(body.getByTestId("search")));

  const restoList = body.getByTestId("resto-list");

  expect(restoList.children.length).toBe(15);
});

test("Test Search Result render", async () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  //   console.log(body);

  await waitFor(() => expect(body.getByTestId("search")));

  const input = body.getByTestId("search-input");

  fireEvent.change(input, {
    target: {
      value: "foods",
    },
  });

  const searchClick = body.getByTestId("search");

  fireEvent.click(searchClick);

  const restoList = body.getByTestId("resto-list");

  expect(restoList.children.length).toBe(1);
});
