import '../types'
import "../types";
import {BookItem} from "../types";
import '../assets/css/First.css';
import '../assets/css/Second.css';
import {useContext} from "react";
import {CartContext, CartStore} from "../reducers/CartContext";
import {CartTypes} from "../reducers/CartReducer";

export const bookImageFileName =  (book:BookItem) => {
  let name = "book";
  let number =book.bookId - book.categoryId +1;
  name = name+number;
  return `${name}.png`;
};

function CategoryBookListItem(props:BookItem) {
    const { dispatch } = useContext(CartStore);

    const addToCart = () => {
        dispatch({ type: 'ADD', item: props, id: props.bookId });
        console.log(dispatch)
    };

    return (
      <div className="Book-box">
          <img
              className="book-image"
              src={require('../assets/images/'+bookImageFileName(props))}
              alt='books-image'
              style={{width: 130, height: 160}}
          />
          {props.isPublic?<button className="btn">Read Now</button>:<></>}
          <p className="book-name">{props.title }</p>
          <p className="author-name">{ props.author }</p>
          <p className="book-price">${ (props.price / 100).toFixed(2) }</p>
          <button className="add_to_cart_button" onClick={addToCart}>Add To Cart</button>
      </div>

)
}
export default CategoryBookListItem;
