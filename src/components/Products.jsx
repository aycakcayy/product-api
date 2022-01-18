import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Placeholder } from "react-bootstrap";
import { ErrorComponent, Loading, LoadingComponent } from "./helperComponents";
import axios from "axios";

const Products =(props)  => {
    const [products, setProducts]= useState([])
    const [isLoading, setLoading] =useState(true)
    const [isError, setError] =useState('')


    /*

      useEffect(()=> {
         const URL="https://fakestoreapi.com/products"
         fetch(URL).then(res=>res.json()).then(data=>{
             setProducts(data);
             setLoading(false);
         })
         .catch((err)=> {
             console.log(err.message);
             setError(err.message);
         });

     }, [])  // []comp did mount


    */

     useEffect(()=> {
         //const URL="https://fakestoreapi.com/products";
         const BASE_AXIOS=axios.create({baseURL:"https://fakestoreapi.com/products"})
         BASE_AXIOS.get("/products")
         .then(res => {
            setProducts(res.data);
            setLoading(false);

         })
     }, [])  // []comp did mount

     console.log("isloadinggg:::", isLoading);
     console.log("products:::" ,products);
     console.log("error:::", isError);


     if(isError){
        return <ErrorComponent message={isError}/>;
    }

     if(isLoading){
         return <LoadingComponent/>; 
     }

    return (
    <>

     <h1>Products</h1>
     <ul>
         {products.map(item=> <li key={item.id} > 
         {item.title}- { item.price}</li>)}
     </ul>
    
    </>
    );
}

export default Products;