
import  "../assets/css/CartTable.css"
import {BookItem, ShoppingCartItem} from "../types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft} from '@fortawesome/free-solid-svg-icons/faChevronLeft';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons/faChevronRight';
import {faMinusCircle} from '@fortawesome/free-solid-svg-icons/faMinusCircle';
import {faPlusCircle} from '@fortawesome/free-solid-svg-icons/faPlusCircle';
import {useContext} from "react";
import {CartStore} from "../reducers/CartContext";
import React from "react";
import {bookImageFileName} from "./CategoryBookListItem";
import {CartTypes} from "../reducers/CartReducer";
import {Link} from "react-router-dom";
import '../assets/css/First.css';

const getBookImageUrl = function (book: BookItem): string {
    let filename = book.title.toLowerCase();
    filename = filename.replace(/ /g, "-");
    filename = filename.replace(/'/g, "");
    filename = filename + ".gif";
    try {
        return require('../assets/images/books/' + filename);
    } catch (_) {
        return require('../assets/images/books/the-iliad.gif');
    }
};
function CartTable()
{
    const { cart,dispatch} = useContext(CartStore);
    console.log({cart});

    function addBookFromCart(book:BookItem) {
        dispatch({type:CartTypes.ADD, item:book , id: book.bookId})
    }
    function removeBookFromCart(cartItem: ShoppingCartItem) {
        console.log("sush"+cartItem);
        dispatch({type:CartTypes.REMOVE, item: cartItem.book})
    }

    function clearCart() {
        dispatch({type:CartTypes.CLEAR})
    }

    const totalQuantity = cart.reduce((total,cartItem)=>total+cartItem.quantity,0);
    const totalPrice = cart.reduce((total,cartItem)=> total+cartItem.quantity*(cartItem.book.price|| 0),0);
    var stored_category = JSON.parse(localStorage.getItem("category") || 'Classics');
    return (


<div>
    {cart.length === 0? (<div className="empty-carty"> <h3>your cart is empty</h3> </div>):(
        <div>
        <div className="cart-table">


            <ul className = "cart2">
                <li className="table-heading">
                    <h3 className="heading-book">Book</h3>
                    <h3 className="heading-price">Price / Quantity</h3>
                    <h3 className="heading-subtotal">Amount</h3>
                </li>
                {cart.map((cartItem,index)=>(

                    <React.Fragment key={index}>
                {/* TODO : You need to iterate through the cart and display book image, */}
                {/*        Book Title, unit price/quantity and total price for each item in the cart*/}
                {/*        Note that the following simply display hardcoded data*/}
                <li>
                    <div className="cart-book-image">
                        <img
                            className="book-image"
                            src={require('../assets/images/'+bookImageFileName(cartItem.book))}
                            alt='books-image'
                            style={{width: 100, height: 130}}
                        />
                    </div>

                    <h3 className="cart-book-title">{cartItem.book.title || "No title"}</h3>
                    <div className="cart-book-price">{ (cartItem.book.price / 100).toFixed(2) || 0}</div>
                    <div className="cart-book-quantity">

                        <button onClick={()=>addBookFromCart(cartItem.book)}
                            className="icon-button inc-button"
                        >
                            <i className="fas fa-plus-circle"><FontAwesomeIcon icon={faPlusCircle} /></i>
                        </button>
                        <span className="quantity">{cartItem.quantity || "No quantity"}</span>&nbsp;
                        <button onClick={()=>removeBookFromCart(cartItem)}
                            className="icon-button dec-button"
                        >
                            <i className="fas fa-minus-circle">  <FontAwesomeIcon icon={faMinusCircle} /></i>
                        </button>
                    </div>
                    <div className="cart-book-subtotal">${(cartItem.book.price / 100)*cartItem.quantity}</div>
                </li>
                        <li className="line-sep"></li>

                    </React.Fragment>
                    ) )}
                    </ul>


            <li className="line-sep"></li>
        </div>
    <div className="cart_details">
         <button className="clear_cart" onClick={()=>clearCart()}>clearCart</button>
        {totalQuantity=== 1?(
        <h3 className="subtotal">Total Price : ${(totalPrice/100).toFixed(2)} for {totalQuantity} book</h3>): ( <h3 className="subtotal">Subtotal : ${(totalPrice/100).toFixed(2)} for {totalQuantity} books</h3>)}

    </div>

    <div className="checkout_details">

        <Link to={`/categories/${stored_category}`}><button  className="continue_button">continue shopping</button></Link>
        <Link to="/checkout"><button className="checkout_button">Proceed to Checkout</button></Link>
    </div>
        </div>
)}
</div>
    )
}

export default CartTable;

