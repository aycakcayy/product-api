import { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import { Placeholder } from "react-bootstrap";
import { ErrorComponent, Loading, LoadingComponent } from "./helperComponents";
import axios from "axios";
import { useQuery } from "react-query";
import { fetchProducts } from "../api";


const QueryProducts =(props)  => {
  const {isLoading, isError, error,data,isFetched, isFetching, ...query}=
  useQuery('products', fetchProducts, {retry: false} );

  if(isError){
    return <ErrorComponent  message={error.message} />
  }

   if(isLoading){
       return <LoadingComponent/>
   }
   
    return (
    <>

     <h1>QueryProducts</h1>
     <ul>
         {data?.data?.map((item)=>(
             <li key={item.id}>
                 <Link to={`/products/${item.id}`}>
                 {item.title} - {item.price}
                 </Link>
             </li>
         ))}
     </ul>
    
    </>
    );
}

export default QueryProducts;