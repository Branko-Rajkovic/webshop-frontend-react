import { createContext, useReducer } from "react";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
});

function reducer(state, action) {
  if (action.type === "ADD_ITEM_TO_CART") {
    const updatedItems = [...state.items];

    const itemInCart = updatedItems.find(
      (element) => element.id === action.payload.id
    );

    if (itemInCart) {
      itemInCart.quantity = itemInCart.quantity + 1;
      return {
        ...state,
        items: updatedItems,
      };
    } else {
      updatedItems.push({
        id: action.payload.id,
        name: action.payload.title,
        price: action.payload.price,
        image: action.payload.image,
        quantity: 1,
      });

      return {
        ...state,
        items: updatedItems,
      };
    }
  }

  if (action.type === "UPDATE_ITEM_IN_CART") {
    const updatedItems = [...state.items];
    const updatedItemIndex = updatedItems.findIndex(
      (item) => item.id === action.payload.productId
    );

    const updatedItem = {
      ...updatedItems[updatedItemIndex],
    };

    updatedItem.quantity += action.payload.amount;

    if (updatedItem.quantity <= 0) {
      updatedItems.splice(updatedItemIndex, 1);
    } else {
      updatedItems[updatedItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
    };
  }
  return state;
}

export default function CartContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, { items: [] });

  function handleAddItemToCart({ id, image, title, price, description }) {
    dispatch({
      type: "ADD_ITEM_TO_CART",
      payload: { id, image, title, price, description },
    });
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    dispatch({ type: "UPDATE_ITEM_IN_CART", payload: { productId, amount } });
  }

  const ctxValue = {
    items: state.items,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
  };

  return <CartContext value={ctxValue}>{children}</CartContext>;
}
