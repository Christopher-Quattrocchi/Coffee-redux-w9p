import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  inventory: [
    { productType: "arabica", description: "Sweet, fruity taste. High acidity.", origin: "Latin America", roast: "Medium", pricePerUnit: 20, inventory: 130 },
    { productType: "robusta", description: "Strong, bitter, nutty flavor.", origin: "Western Africa", roast: "Dark", pricePerUnit: 25, inventory: 130 },
    { productType: "excelsa", description: "Tart, fruity.", origin: "Southeast Asia", roast: "Light", pricePerUnit: 30, inventory: 130 }
  ],
  orders: [],
  cart: [],
};

export const coffeeShopSlice = createSlice({
  name: 'coffeeShop',
  initialState,
  reducers: {
    addCoffeeSack: (state, action) => {
      state.inventory.push(action.payload);
    },
    placeOrder: (state, action) => {
      const order = action.payload;
      const itemIndex = state.inventory.findIndex(item => item.productType === order.productType);

      if (itemIndex >= 0 && state.inventory[itemIndex].inventory >= order.quantity) {
        state.inventory[itemIndex].inventory -= order.quantity;
        state.orders.push(order);
      }
  
    },
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload.id);
    },
    updateInventory: (state, action) => {
      const { productType, newInventory } = action.payload;
      const itemIndex = state.inventory.findIndex(item => item.productType === productType);
      
      if (itemIndex >= 0) {
        state.inventory[itemIndex].inventory = newInventory;
      }
    },
    resetCart: (state) => {
      state.cart = [];
    },
  },
});

export const { addCoffeeSack, placeOrder, addToCart, removeFromCart, updateInventory, resetCart } = coffeeShopSlice.actions;
export default coffeeShopSlice.reducer;