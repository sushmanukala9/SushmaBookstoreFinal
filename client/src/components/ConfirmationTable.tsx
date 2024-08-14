

import '../assets/css/ConfirmationTable.css'

import { asDollarsAndCents } from "../utils";

import { BookItem, OrderDetails } from '../types'

import {OrderDetailsStore} from "../contexts/OrderDetailsContext";
import {useContext} from "react";

function ConfirmationTable() {
  const { orderDetails} = useContext(OrderDetailsStore);

// A helper function - optional to use
  const bookAt = function (orderDetails: OrderDetails, index: number): BookItem {
  return orderDetails.books[index];
};
  return (
      <table className="confirmation_table">
        {
            orderDetails.books?.map((book: BookItem, bookIndex: number) => {
                // Find the corresponding LineItem for the current book
                const lineItem = orderDetails.lineItems.find(item => item.bookId === book.bookId);

                return (
                    <tr className="confirmation_tr" key={bookIndex}>
                        <td className="confirmation_td">{book.title}</td>
                        <td className="confirmation_td">{lineItem?.quantity}</td>
                        <td className="confirmation_td">{asDollarsAndCents((book.price))}</td>
                    </tr>
                );
            })}
        <tr>
          <td><b>Total + Surcharge (5$) :</b></td>
          <td></td>
         <td>{asDollarsAndCents((orderDetails.order.amount))}</td>
         </tr>
    </table>
  )}

export default ConfirmationTable;