import {Routes,Route} from "react-router-dom";
import Nav from  "./components/Nav"
import Basket from "./components/Basket";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import QueryProducts from "./components/QueryProducts";

function App() {
  return (

    <div className="App" >
       <h1>App</h1>
       <Nav/>
       <Routes>
         <Route path="/" element={<Home/>} />
         <Route path="/products" element={<Products/>} />
         <Route path="/query-products" element={<QueryProducts/>} />
         <Route path="/contact" element={<Contact/>} />
         <Route path="/products:productId" element={<SingleProduct/>} />
      
       </Routes>
    </div>
     
  );
}

export default App;
