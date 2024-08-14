import '../assets/css/First.css';
import '../assets/css/Second.css';
import {CategoryItem, CatProp} from '../types';
import {Link, useParams} from "react-router-dom";
import React, {useContext, useEffect, useState} from "react";
import axios from "axios/index";
import {Category} from "../contexts/CategoryContext";

function CategoryNav() {
  const {catId} = useParams();
  const categories = useContext<CategoryItem[]>(Category);

  return (
  <div className="Category-bar">
    <ul >

      {categories.map((category,i) => (
          category.name===catId? <li className="selectedCat" key={i} >
               <Link  className="selected" to ={`/categories/${category.name}`}>
                  {category.name}</Link> </li>: <li className="unselectedCat" key={i}>
            <Link  className="unselected" to ={`/categories/${category.name}`}>
              {category.name}</Link>
          </li>
          ))}

    </ul>
    </div>
)
}

export default CategoryNav;

