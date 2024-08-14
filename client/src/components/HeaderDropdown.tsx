import '../assets/css/First.css';
import {CategoryItem, CatProp} from '../types';
import { Link } from 'react-router-dom';
import React, {useContext} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {Category} from "../contexts/CategoryContext";

function HeaderDropdown() {
    const categories = useContext<CategoryItem[]>(Category);
  return (

          <div className="Categories">
              <button className="Categories_button">
                  <FontAwesomeIcon icon={faBars} /> Categories
                  <div className="dropdown-options">
                          {categories.map((item,i) =>    <li key={i}>
                              <Link  className="each-category" to ={`/categories/${item.name}`}>
                                  {item.name}</Link></li>)}
                  </div>
              </button>
          </div>

)
}
export default HeaderDropdown

