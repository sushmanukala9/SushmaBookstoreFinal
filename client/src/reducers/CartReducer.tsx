import {ShoppingCartItem, BookItem} from "../types";
import {Dispatch, ReducerAction} from "react";


export const CartTypes = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    CLEAR:'CLEAR'
};

export type AppActions = {
    id:number;
    type: 'ADD' | 'REMOVE'  | 'CLEAR';
    item: BookItem;
}

export const cartReducer = (state:ShoppingCartItem[], action:AppActions) => {
     const existingItem = state.find((cartItem) => cartItem.id === action.id);


    switch (action.type) {
        case CartTypes.ADD:

            console.log(action.item.title || "no");
            if (existingItem) {

                // If it exists, increment the quantity
                return state.map((cartItem) =>

                    cartItem.id === action.id
                        ?   {...cartItem, quantity: cartItem.quantity + 1}
                        : cartItem




                );
            } else {
                // If it doesn't exist, add a new item to the cart
                return [
                    ...state,
                    {id: action.id, book: action.item, quantity: 1},

                ];

            }

        case CartTypes.REMOVE:

                return state
                    .map((book) =>
                        book.id === action.item.bookId
                            ? { ...book, quantity: book.quantity - 1 }
                            : book
                    )
                    .filter((book) => book.quantity >= 1);

        case CartTypes.CLEAR:

            return state=[];    // will be defined in Project 7
        default:
            throw new Error(`Invalid action type ${action.type}`);
    }
};