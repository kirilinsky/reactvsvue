import { useReducer, createContext, useContext } from "react";

const GlobalDispatch = createContext(null);
const CartContext = createContext(null);

const initialState = [];

const reducer = (state, action) => {
  let currentItem = action.payload;
  switch (action.type) {
    case "ADD":
      let cart = [...state];

      const itemExists = cart.some((item) => item.id === currentItem.id);

      if (!itemExists) {
        cart.push({ ...currentItem, quantity: 1 });
      } else {
        cart = cart.map((item) => {
          if (item.id === currentItem.id) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
      }
      return cart;
    case "DELETE": 
      let store = [...state].map((item) => {
        if (item.id === currentItem) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
      return store.filter((x) => x.quantity > 0);

    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const CartStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalDispatch.Provider value={dispatch}>
      <CartContext.Provider value={state}>{children}</CartContext.Provider>
    </GlobalDispatch.Provider>
  );
};

export function useCartStore() {
  return useContext(CartContext);
}
export function useCartDispatch() {
  return useContext(GlobalDispatch);
}
