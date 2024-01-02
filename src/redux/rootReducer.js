import { createSlice } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import coffeeShopReducer from "./coffeeShopSlice";

const rootReducer = combineReducers({
  coffeeShop: coffeeShopReducer
});

export default rootReducer;