import {defer, LoaderFunction } from "react-router-dom"
import { ProductsSchem } from "../products/type"

const loader:LoaderFunction=async({params})=>{
    const {id} = params
   try {
       const product = fetch(`https://fakestoreapi.com/products/${id}`).then((response) => response.json())
    return defer({product}) as unknown 

   } catch (error) {
    console.log("error fetching product")
   }
}

export default loader