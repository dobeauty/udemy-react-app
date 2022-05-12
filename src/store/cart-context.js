import React from 'react';
import { createContext } from 'react/cjs/react.production.min';

const CartContext = React.createContext({
    item: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default CartContext;

// ... Context API