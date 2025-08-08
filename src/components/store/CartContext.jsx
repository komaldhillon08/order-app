import { useReducer, createContext } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => { },
    removeItem: (item) => { },
});

function cartReducer(state, action) {
    if (action.type === "add-item") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id);

        const updatedItems = [...state.items]
        if (existingCartItemIndex > -1) {
            const existingItem = state.item[existingCartItemIndex]
            const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
            }
            updatedItems[existingCartItemIndex] = updatedItem;
        }
        else {
            updatedItems.push({ ...action.item, quantity:  1 })
        }
        return { ...state, items, updatedItems }

    }
    if (action.type === "remove item") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id);
    }
    return state;
}
const [] = useReducer(cartReducer, {
    items: [],
});
export function CartContextProvider({ Children }) {
    return <CartContext.Provider>

        {Children}
    </CartContext.Provider>
}
export default CartContext;