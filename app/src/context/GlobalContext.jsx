import { createContext } from 'react';

const GlobalContext = createContext({
    cart: [],
    addProductToCart: () => {},
    removeProductFromCart: () => {},
    clearCart: () => {}
});

export default GlobalContext;