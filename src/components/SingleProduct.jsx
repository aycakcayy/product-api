import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import { fetchSingleProduct } from "../api";
import { fetchProducts } from "../api";
import { ErrorComponent, LoadingComponent } from "./helperComponents";

const SingleProduct =(props)  =>{
    const {productId}=useParams();
    
    const {isLoading, isError, error,data,isFetched, isFetching, ...query}=
    useQuery(
        ["product", productId], 
        () => fetchSingleProduct(productId),
        {
            retry:false,
            select: (data)=>data.data
        });
   


    if(isError){
        return <ErrorComponent message={error.message}/>;
    }

     if(isLoading){
         return <LoadingComponent/>; 
     }
    
    return (
        <div>
            <h1>{
                    data?.title
                }</h1>
            <img src={data?.image} alt="" style={{ width:'200px'}}/>
            <p>
                {
                    data?.title
                }
            </p>
            <p>
                {
                    data?.price
                }
            </p>
            
        </div>
    )

}

export default SingleProduct;