import axios from "axios";

const BASE_AXIOS=axios.create({baseURL:"https://fakestoreapi.com/products"});

 export const fetchProducts=()=> BASE_AXIOS.get("/products");
 export const fetchSingleProduct =(product) => BASE_AXIOS.get("/products");
 