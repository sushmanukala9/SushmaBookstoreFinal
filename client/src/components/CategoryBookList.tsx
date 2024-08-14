import   '../types';
import '../assets/css/First.css';
import '../assets/css/Second.css';
import CategoryBookListItem from './CategoryBookListItem';
import CategoryNav from './CategoryNav';
import  "../types";
import {BookItem, CatProp} from "../types";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";

function CategoryBookList() {
    const {catId} = useParams();
  localStorage.setItem('category',JSON.stringify(catId));
    axios.defaults.baseURL='http://localhost:8080/SushmaBookstoreReactTransact/api/';
    const [book,setBook]= useState([]);
    useEffect(()=>{
        axios.get(`categories/name/${catId}/books`)
            .then((response)=>{
                setBook(response.data);
            })},[catId]);

  return (

          <div className="Category-page">
              <CategoryNav/>
              <div className="Book-boxes">
                  {book.map((book:BookItem,i) => (
                      <CategoryBookListItem key={i} bookId={book.bookId} isPublic={book.isPublic} price={book.price} title={book.title} author={book.author}  categoryId={book.categoryId} />))}

              </div>
          </div>

)
}

export default CategoryBookList;
