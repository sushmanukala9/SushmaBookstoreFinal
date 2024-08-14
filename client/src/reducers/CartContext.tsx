                import React, {createContext, Dispatch, ReactNode, useEffect, useReducer} from "react";
import { cartReducer, AppActions } from "../reducers/CartReducer";
import {initialCartState, ShoppingCartItem} from "../types";


                export const CartStore = createContext<{
    cart: ShoppingCartItem[];
    dispatch: Dispatch<any>;
}>({
    cart: initialCartState,
    dispatch: () => null as any, // Initialize dispatch with a dummy function of appropriate type
});

CartStore.displayName = "CartContext";
                const storageKey="carts";
export const CartContext = ({ children }: { children: ReactNode }) => {
    const [cart, dispatch] = useReducer(
        cartReducer as (state: ShoppingCartItem[], action: AppActions) => ShoppingCartItem[],
        initialCartState, (initialState) => {
            try {

                const storedCart = JSON.parse(localStorage.getItem(storageKey) || '[]');
                return storedCart as ShoppingCartItem[] || initialState;
            } catch (error) {
                console.log('Error parsing cart', error);
                return initialState;
            }
        },
    );


    useEffect(() => {localStorage.setItem('carts',JSON.stringify(cart))},[cart]);

    return <CartStore.Provider value={{ cart, dispatch }}>{children}</CartStore.Provider>;
};