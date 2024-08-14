import HeaderDropdown from './HeaderDropdown';
import '../assets/css/First.css';
import { Link } from 'react-router-dom';
import {CatProp} from "../types";
import {CartStore} from "../reducers/CartContext";
import React, {useContext} from "react";
import {Category} from "../contexts/CategoryContext";
import categoryBookList from "./CategoryBookList";
function AppHeader(){
    const { cart } = useContext(CartStore);
    const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);
console.log(cartQuantity);
    return(

    <header className="container">
        <div className="title-logo-bar">
            <Link to="/">
                <img
                    className="logo"
                    src={require('../assets/images/Circus Tent.png')}
                    alt="Another Bookstore Logo"
                />
            </Link>
            <Link className={"title"} to="/" >
                <h1 className="title-text">Book Fair</h1>
            </Link>
        </div>
        <div className="nav-bar">
            <div className="search-bar">
                <form action="" className="search-form">
                    <input
                        type="text"
                        className="search-box"
                        placeholder="Search for books..."
                    />
                    <input
                        type="image"
                        src={require('../assets/images/search.png')}
                        className="search-button"
                        alt="submit"
                    />
                </form>
            </div>
            <Link to="/"><div className="Home">
                <button className="home_button">Home</button>
            </div></Link>
            <HeaderDropdown/>
            <div className="login">
                <button className="login_button">Login</button>
            </div>

            <div className="cart">
                <Link to="/cart">
                <button className="cart_button"><span className="badge">{cartQuantity}</span> <img
                    className="cart-image"
                    src={require('../assets/images/cart.png')}
                    alt='cart-image'
                    style={{width: 35, height: 25}}
                /></button>
                </Link>

            </div>

        </div>
        <br />
        <br />
    </header>
)
}
export default AppHeader;

