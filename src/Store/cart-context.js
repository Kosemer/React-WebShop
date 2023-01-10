import React from "react";

const CartContext = React.createContext({   // Ezeket az adatokat nem fogom használni, de jobb automatikus kiegészítést biztosít a komponensekbe.
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
})

export default CartContext;