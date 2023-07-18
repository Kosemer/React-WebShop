import React from "react";

const CartContext = React.createContext({
  // Ezeket az adatokat nem fogom használni, de jobb automatikus kiegészítést biztosít a komponensekbe.
  items: [],
  totalAmount: 0,
  shippingCost: 1699,
  orderStatus: {
    cart: false,
    order: false,
    data: false,
    confirmation: false,
  },
  navigatePages: {
    deliveryMethod: '/delivery-method',
    deliveryDetails: '/delivery-details'
  },
  addItem: (item) => {},
  removeItem: (id) => {},
  cssMobile: true,
  setCssMobile: () => {},
  setCartItems: (items) => {},
  replaceCartItems: (items) => {},
  isLoggedIn: false,
  setIsLoggedIn: () => {},
});

export default CartContext;
