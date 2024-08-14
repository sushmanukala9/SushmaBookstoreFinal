import {ShoppingCartItem, BookItem, OrderDetails, initialOrderState} from "../types";
import {Dispatch, ReducerAction} from "react";


export const OrderTypes = {
    CLEAR:'CLEAR',
    UPDATE:'UPDATE'
};

export type AppActions = {
    type: 'CLEAR' | 'UPDATE';
}

export const OrderDetailsReducer = (state:OrderDetails, action:AppActions) => {


    switch (action.type) {


        case OrderTypes.UPDATE:

            return state = JSON.parse(localStorage.getItem('orders') || '[]');

        case OrderTypes.CLEAR:

            localStorage.removeItem('orders');
            return state = initialOrderState;
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
};