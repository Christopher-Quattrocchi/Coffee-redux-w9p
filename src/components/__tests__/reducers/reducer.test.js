import { coffeeShopSlice, addCoffeeSack, placeOrder, addToCart, removeFromCart, updateInventory, resetCart } from './../../../redux/coffeeShopSlice';

describe('coffeeShop reducer', () => {
  const initialState = {
    inventory: [
      { productType: "arabica", inventory: 130 },
      { productType: "robusta", inventory: 130 }
    ],
    orders: [],
    cart: []
  };

  it('should handle initial state', () => {
    expect(coffeeShopSlice.reducer(undefined, { type: 'unknown' })).toEqual({
      inventory: [
        { productType: "arabica", description: "Sweet, fruity taste. High acidity.", origin: "Latin America", roast: "Medium", pricePerUnit: 20, inventory: 130 },
        { productType: "robusta", description: "Strong, bitter, nutty flavor.", origin: "Western Africa", roast: "Dark", pricePerUnit: 25, inventory: 130 },
        { productType: "excelsa", description: "Tart, fruity.", origin: "Southeast Asia", roast: "Light", pricePerUnit: 30, inventory: 130 }
      ],
      orders: [],
      cart: [],
    });
  });

  it('should handle addCoffeeSack', () => {
    const actual = coffeeShopSlice.reducer(initialState, addCoffeeSack({ productType: "liberica", inventory: 100 }));
    expect(actual.inventory).toEqual([...initialState.inventory, { productType: "liberica", inventory: 100 }]);
  });

  it('should handle placeOrder', () => {
    const actual = coffeeShopSlice.reducer(initialState, placeOrder({ productType: "arabica", quantity: 30 }));
    expect(actual.inventory.find(item => item.productType === "arabica").inventory).toEqual(100);
    expect(actual.orders.length).toEqual(1);
  });

  it('should handle addToCart', () => {
    const actual = coffeeShopSlice.reducer(initialState, addToCart({ id: '1', productType: "arabica", quantity: 30 }));
    expect(actual.cart).toEqual([{ id: '1', productType: "arabica", quantity: 30 }]);
  });

  it('should handle removeFromCart', () => {
    const state = {
      ...initialState,
      cart: [{ id: '1', productType: "arabica", quantity: 30 }]
    };
    const actual = coffeeShopSlice.reducer(state, removeFromCart({ id: '1' }));
    expect(actual.cart).toEqual([]);
  });

  it('should handle updateInventory', () => {
    const actual = coffeeShopSlice.reducer(initialState, updateInventory({ productType: "robusta", newInventory: 120 }));
    expect(actual.inventory.find(item => item.productType === "robusta").inventory).toEqual(120);
  });

  it('should handle resetCart', () => {
    const state = {
      ...initialState,
      cart: [{ id: '1', productType: "arabica", quantity: 30 }]
    };
    const actual = coffeeShopSlice.reducer(state, resetCart());
    expect(actual.cart).toEqual([]);
  });
});