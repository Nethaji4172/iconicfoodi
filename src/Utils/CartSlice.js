import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "CartSlice",
  initialState: {
    productQTY: [],
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      // const deleteItem = state.items.indexOf(action);
      // console.log(action.payload);
      state.productQTY.splice(action.payload, 1);
    },
    clearcart: (state) => {
      state.productQTY = [];
    },

    qtyItem: (state, action) => {
      // console.log(action.payload);
      state.productQTY.push(action.payload);
    },
    qtyChooseItem: (state, action) => {
      const arrIndex = action.payload[0];
      const arrAddons = action.payload[1];

      state.productQTY[arrIndex] = {
        ...state.productQTY[arrIndex],
        addons: arrAddons,
        qty: state.productQTY[arrIndex].qty + 1,
      };
    },

    updateItem: (state, action) => {
      const actionId = action.payload.productItem;
      const result = state.productQTY.findIndex(
        (fn) => actionId === fn.productItem
      );

      state.productQTY[result] = {
        ...state.productQTY[result],
        qty: action.payload.qty,
      };
    },

    updateConfigItem: (state, action) => {
      const result = action.payload;

      state.productQTY[result] = {
        ...state.productQTY[result],
        qty: state.productQTY[result].qty + 1,
      };
    },

    updateOneItem: (state, action) => {
      const updateCount = action.payload;
      state.productQTY[updateCount] = {
        ...state.productQTY[updateCount],
        qty: 1,
      };
    },

    removeQty: (state, action) => {
      state.productQTY.splice(action.payload, 1);
    },
  },
});

export const {
  addItem,
  removeItem,
  clearcart,
  qtyItem,
  updateItem,
  removeQty,
  updateOneItem,
  updateConfigItem,
  qtyChooseItem,
} = CartSlice.actions;

export default CartSlice.reducer;
