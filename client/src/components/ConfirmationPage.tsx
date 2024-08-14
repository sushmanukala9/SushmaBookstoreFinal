// You can use the following Css file



import '../assets/css/ConfirmationTable.css'
import ConfirmationTable from "./ConfirmationTable";
import {useContext} from "react";
import {OrderDetailsStore} from "../contexts/OrderDetailsContext";
import {CustomerForm, OrderDetails} from "../types";


function ConfirmationPage()
{
    const { orderDetails,dispatched} = useContext(OrderDetailsStore);


    const orderDate =  () => {
        console.log(orderDetails);
        let date = new Date(orderDetails.order.dateCreated);
        return ( date.toLocaleString());
    };

    const ccExpDate =  (): Date =>{
        return new Date(orderDetails.customer.ccExpDate);
    };
    const lastFourDigits = orderDetails?.customer?.ccNumber.toString().slice(-4);
    const reformatTimestamp = (timestamp: string | number) => {
        const date = new Date(timestamp);
        const month = (date.getMonth() + 1).toString().padStart(2, '0'); // Months are 0-based
        const year = date.getFullYear().toString().slice(2);
        return `${month}/${year}`;
    };
    const clearOrders = () => {
        dispatched({ type: 'CLEAR'});
        console.log(dispatched)
    };

    return(
        <div className="confirmationView">
            <h2>Confirmation Page</h2>
            <ul className="ulclass">
                <li className="liclass">Confirmation #: {orderDetails?.order.confirmationNumber}</li>
                <li className="liclass">{orderDate()}</li>
            </ul>
            <ConfirmationTable />
            <ul  className="ulclass">
                <li className="liclass"><b>Name:</b> { orderDetails?.customer?.customerName}</li>
                <li className="liclass"><b>Address:</b> { orderDetails?.customer?.address }</li>
                <li className="liclass"><b>Email:</b> { orderDetails?.customer?.email }</li>
                <li className="liclass"><b>Phone:</b>{ orderDetails?.customer?.phone }</li>
                <li className="liclass"><b>Credit Card:</b> **** **** **** {lastFourDigits} ({localStorage.getItem('expMonth')}/{localStorage.getItem('expYear')})</li>
            </ul>

            <div id="customerInfo"></div>

        </div>

    )
}
export default ConfirmationPage;