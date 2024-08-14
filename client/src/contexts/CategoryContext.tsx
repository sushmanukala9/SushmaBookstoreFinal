import {CategoryItem} from "../types";
import {createContext, ReactNode, useEffect, useState} from "react";
import axios from "axios";

export const Category = createContext<CategoryItem[] | []>([]);   // creates a context called Category
Category.displayName = 'CategoryContext';

function CategoryContext ({children}:{children:ReactNode} )  {
    const [categories,setCategories] = useState([])
    axios.defaults.baseURL='http://localhost:8080/SushmaBookstoreReactTransact/api/';
    const [data,setData]= useState(0);
    useEffect(()=>{
        axios.get('categories')
            .then((response)=>{
                setCategories(response.data);
            })},[])

    return (
        <Category.Provider value ={categories}>{children}</Category.Provider>
    );
}
export default CategoryContext;