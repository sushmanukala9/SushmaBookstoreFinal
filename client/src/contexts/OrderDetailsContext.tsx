import React, {createContext, Dispatch, ReactNode, useEffect, useReducer} from "react";
import { OrderDetailsReducer, AppActions } from "../reducers/OrderDetailsReducer";
import {initialCartState, initialOrderState, Order, OrderDetails, ShoppingCartItem} from "../types";


export const OrderDetailsStore = createContext<{
    orderDetails: OrderDetails;
    dispatched: Dispatch<any>;
}>({
    orderDetails: initialOrderState,
    dispatched: () => null as any, // Initialize dispatch with a dummy function of appropriate type
});

OrderDetailsStore.displayName = "OrderDetailsContext";
export const OrderDetailsContext = ({ children }: { children: ReactNode }) => {
    const [orderDetails, dispatched] = useReducer(
        OrderDetailsReducer as (state: OrderDetails, action: AppActions) => OrderDetails,
        initialOrderState, (initialState) => {
            try {
                const storedCart = JSON.parse(localStorage.getItem('orders') || '[]');
                return storedCart as OrderDetails || initialState;
            } catch (error) {
                console.log('Error parsing cart', error);
                return initialState;
            }
        },
    );

    return <OrderDetailsStore.Provider value={{ orderDetails, dispatched }}>{children}</OrderDetailsStore.Provider>;
};