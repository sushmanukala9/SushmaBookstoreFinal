

import  "../assets/css/checkout.css"



import { isCreditCard, isMobilePhone, isvalidEmail } from '../utils';
import {BookItem, CustomerForm, months, OrderDetails,  years} from "../types";
import {CartStore} from "../reducers/CartContext";
import React, {ChangeEvent, FormEvent, useContext, useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import {CartTypes} from "../reducers/CartReducer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlusCircle} from "@fortawesome/free-solid-svg-icons/faPlusCircle";
import {faMinusCircle} from "@fortawesome/free-solid-svg-icons/faMinusCircle";
import {bookImageFileName} from "./CategoryBookListItem";
import axios from "axios";
import {OrderDetailsStore} from "../contexts/OrderDetailsContext";




function CheckoutPage()
{


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

   /*
    * This will be used by the month and year expiration of a credit card
    *  NOTE: For example yearFrom(0) == <current_year>
   */
   function yearFrom(index: number) {
      return new Date().getFullYear() + index;
   }


   const {cart, dispatch} = useContext(CartStore);

   const totalQuantity = cart.reduce((total,cartItem)=>total+cartItem.quantity,0);
   const totalPrice = cart.reduce((total,cartItem)=> total+cartItem.quantity*(cartItem.book.price|| 0),0);

   const navigate = useNavigate();
   var stored_category = JSON.parse(localStorage.getItem("category") || 'clasics');

   const cartTotalPrice = 0; // TO DO code that calculates the total price of your cart

   const cartQuantity = 0 ; // TO DO the code that calculates the total number of items in your cart

   const { dispatched } = useContext(OrderDetailsStore);

   const addToOrders = () => {
      dispatched({ type: 'UPDATE'});
      console.log(dispatched)
   };

   const [nameError, setNameError] = useState("");

   const [addressError, setAddressError] = useState("");

   const [mobileError, setMobileError] = useState("");

   const [emailError, setEmailError] = useState("");

   const [cardError, setCardError] = useState("");

   // TO DO error states for the rest of the input elements

   const [formData, setFormData] = useState({name: "",address:"", phone:"",email: "",ccNumber: "", ccExpiryMonth:0,ccExpiryYear:0});
   const [checkoutStatus, setCheckoutStatus] = useState("");

   function isValidForm()
   {
       return nameError === "" && addressError === "" && mobileError === "" && emailError === "" && cardError === "";
   }


   async function submitOrder(event:FormEvent) {
      event.preventDefault();
      console.log("Submit order");
      const isFormCorrect =  isValidForm();
      console.log(isFormCorrect);
      if (!isFormCorrect) {
         setCheckoutStatus("ERROR");
      } else {
         setCheckoutStatus("PENDING");
         const orders = await placeOrder({
            name: formData.name,
            address: formData.address,
            phone: formData.phone,
            email: formData.email,
            ccNumber: formData.ccNumber,
            ccExpiryMonth: formData.ccExpiryMonth,
            ccExpiryYear:formData.ccExpiryYear
         })
         localStorage.setItem('expMonth',JSON.stringify(formData.ccExpiryMonth));
         localStorage.setItem('expYear',JSON.stringify(formData.ccExpiryYear));
         if(orders) {
            setCheckoutStatus("OK");
            addToOrders();
            navigate('/confirmation');}
         else{
            console.log("Error placing order");
         }
      }
   }

   const placeOrder =  async (customerForm: CustomerForm) =>  {

      const order = { customerForm: customerForm, cart:{itemArray:cart} };

      const orders = JSON.stringify(order);
       console.log(orders);     //you can uncomment this to see the orders JSON on the console
      const url = '/orders';
      const orderDetails: OrderDetails = await axios.post(url, orders,
          {headers: {
                "Content-Type": "application/json",
             }
          })
          .then((response) => {
             dispatch({type: CartTypes.CLEAR});
             return response.data;
          })
          .catch((error)=>console.log(error));
      console.log("order deatils: ", orderDetails);

      localStorage.setItem('orders',JSON.stringify(orderDetails))
      console.log(localStorage.getItem('orders'));
      return orderDetails;
   }
   // TO DO placeOrder function comes here. Needed for project 9 (not 8)

   function handleInputChange(event:ChangeEvent<HTMLInputElement|HTMLSelectElement>) {

      const { name, value } = event.target;


      switch (name) {
         case 'name':
            setFormData((prevFormData) => ({...prevFormData, [name]: value}));
            if(value.length < 4) {
               setNameError("Name must be at least 4 characters long!");
            }
            else if ( value.length > 45) {
                   setNameError("Name must be at max 45 characters long!");
                 }
            else{
               setNameError("");
            }
            break;
         case 'address':

            setFormData((prevFormData) => ({...prevFormData, [name]: value}));
            if(value.length < 4) {
               setAddressError("Name must be at least 4 characters long!");
            }
            else if ( value.length > 45) {
               setAddressError("Name must be at max 45 characters long!");
            }
            else{
               setAddressError("");
            }
            break;
         case 'phone':

            setFormData((prevFormData) => ({...prevFormData, [name]: value}));
            if(isMobilePhone(value)) {
               setMobileError("");

            }
            else{
               setMobileError("Invalid mobile number");
            }
            break;
         case 'email':

            setFormData((prevFormData) => ({...prevFormData, [name]: value}));
            if(!isvalidEmail(value)) {
               setEmailError("Invalid email id");
            }
            else{
               setEmailError("");
            }

            break;
         case 'ccNumber':

            setFormData((prevFormData) => ({...prevFormData, [name]: value}));
            if(!isCreditCard(value)) {
               setCardError("Invalid credit card");
            }
            else{
               setCardError("");
            }

            break;
         case 'ccExpiryMonth':
            setFormData((prevFormData) => ({...prevFormData, [name]:parseInt(value,10)}));
            break;
         case 'ccExpiryYear':
            setFormData((prevFormData) => ({...prevFormData, [name]: parseInt(value,10)}));
            break;
         default:
            break;
      }
   }

  // TO DO submitOrder function comes here. See the project Spec

   return (
       <div>
       {cart.length === 0? (<div className="empty-carty"> <h3>your cart is empty</h3>  <div className="checkout_details">

          <Link to={`/categories/${stored_category}`}><button  className="continue_button">continue shopping</button></Link>

       </div></div>):(
       <section className="checkout-cart-table-view">

          <div className="checkout-page-body">
             <div>
                <form
                    className="checkout-form"
                     onSubmit ={(event)=>submitOrder(event)}
                    method="post"
                >
                   <div>
                      <label htmlFor="fname">Name</label>
                      <input
                          type="text"
                          size={20}
                          name="name"
                          id="fname"
                          value={formData.name}
                          onChange={handleInputChange}
                      />
                   </div>
                   <> {nameError && <div className="error"> {nameError}</div>}</>


                   <div>
                      <label htmlFor="address">Address</label>
                      <input
                          type="text"
                          size={20}
                          name="address"
                          id="address"
                          value={formData.address}
                          onChange={handleInputChange}
                      />
                   </div>
                   <> {addressError && <div className="error"> {addressError}</div>}</>

                   <div>
                      <label htmlFor="phone">Phone</label>
                      <input
                          type="text"
                          size={20}
                          name="phone"
                          id="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                      />
                   </div>
                   <> {mobileError && <div className="error"> {mobileError}</div>}</>

                   <div>
                      <label htmlFor="email">Email</label>
                      <input
                          type="text"
                          size={20}
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleInputChange}
                      />
                   </div>
                   <> {emailError && <div className="error"> {emailError}</div>}</>
                     <br></br>
                   <div>
                      <label htmlFor="ccNumbe">Credit Card</label>
                      <input
                          type="text"
                          size={20}
                          name="ccNumber"
                          id="ccNumbe"
                          value={formData.ccNumber}
                          onChange={handleInputChange}
                      />
                   </div>
                   <> {cardError && <div className="error"> {cardError}</div>}</>


                        {/*  TO DO add the form elements for phone, address, email, and Credit card*/}
                        {/* Together with the error display*/}

                   <div >
                      <label htmlFor="ccExpiryMonth">Exp Date</label>
                      <select style={{color:'black'}} name ="ccExpiryMonth" value ={formData.ccExpiryMonth} onChange={handleInputChange}>
                         { months.map((month, i) => (
                             <option  key={i}  value={i + 1}  >
                                { month }
                             </option>
                         ))}
                      </select>
                      <label htmlFor="ccExpiryYear"></label>
                      <select style={{color:'black'}} name ="ccExpiryYear" value ={formData.ccExpiryYear} onChange={handleInputChange}>
                         { years.map((year, i) => (
                             <option  key={yearFrom(year)}  value={yearFrom(year)}  >
                                { yearFrom(year) }
                             </option>
                         ))}
                      </select>
                     {/*TO DO the select input for the expiration year. Read the spec */}
                     {/* about this*/}


                   </div>
                   <div className="checkout_details">

                      {( <p className="checkout_total">Items({totalQuantity}) : ${(totalPrice/100).toFixed(2)}  </p>)}
                   </div>
                   <div>
                      <p className="checkout_total">Surcharge :     $5      </p>
                   </div>
                   <div>

                      {( <p className="checkout_total">Total : ${((totalPrice/100)+5).toFixed(2)}  </p>)}

                   </div>
                   <br></br>

                   <button type='submit' className="login_button">Complete Purchase</button>
                </form>
             </div>

             {/* TO DO the checkout box with the total cost, tax) */}
             {/* and the Complete Purchase button comes here*/}




                   <div>
                      {/*The following code displays different string based on the */}
                      {/*value of the checkoutStatus*/}
                      {/*Note the ternary operator*/}
                      {
                         checkoutStatus !== ''?
                             <>
                                <section className="checkoutStatusBox" >
                                   { (checkoutStatus === 'ERROR')?
                                       <div>
                                          Error: Please fix the problems above and try again.
                                       </div>: ( checkoutStatus === 'PENDING'?
                                           <div>
                                              Processing...
                                           </div> : (checkoutStatus === 'OK'?
                                               <div>
                                                  Order placed...
                                               </div>:
                                               <div>
                                                  An unexpected error occurred, please try again.
                                               </div>))}
                                </section>
                             </>
                             :<></>}
                   </div>
                </div>

          <div >
             {/*This displays the information about the items in the cart*/}
             <ul className="checkout-cart-info">
                {
                   cart?.map((item, i) => (
                       <div className ="checkout-cart-book-item" key={i}>
                          <div className="checkout-cart-book-image" key = {i} >
                             <img
                                  src={require('../assets/images/'+bookImageFileName(item.book))}
                                   alt="title" className ="checkout-cart-info-img"
                                  width="20%"
                                  height="20%"
                             />
                          </div>
                          <div className="checkout-cart-book-info">
                             <div className="checkout-cart-book-title">{ item.book.title }</div>

                             <div className="checkout-cart-book-subtotal">{ (item.book.price / 100).toFixed(2) || 0}
                             </div>
                             <div className="checkout-cart-book-quantity">
                                <button  className="checkout-icon-button inc-button"      onClick={() => {
                                   dispatch({ type: CartTypes.ADD, item:item, id: item.book.bookId });
                                }} >
                                   <i className="fas fa-plus-circle"><FontAwesomeIcon icon={faPlusCircle} /></i>
                                </button>
                                <button className="checkout-num-button">{ item.quantity }</button>
                                <button className="checkout-icon-button dec-button"
                                        onClick={() => {
                                           dispatch({ type: CartTypes.REMOVE, item:item.book });
                                        }}
                                >
                                   <i className="fas fa-minus-circle"><FontAwesomeIcon icon={faMinusCircle} /></i>
                                </button>
                             </div>
                          </div>

                       </div>
                   )) }
             </ul>
          </div>

       </section>
          )}
</div>
   )}
export default CheckoutPage;