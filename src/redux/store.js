import { configureStore } from "@reduxjs/toolkit";
import coffeeReducer from "./coffeeShopSlice";
import rootReducer from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,

});