import React from "react";
import CartTable from "./CartTable";
import {Link} from "react-router-dom";
import '../assets/css/First.css';
import {ShoppingCartItem} from "../types";
import '../assets/css/First.css';
function Cart() {


        return (
        <div>
            <div className="cart_buttons">
            <h2>Cart Page</h2>

            </div>
            <CartTable></CartTable>
            </div>
            )
}

export default Cart;