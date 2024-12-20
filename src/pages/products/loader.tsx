import {defer, LoaderFunction } from "react-router-dom";

const loader:LoaderFunction=async()=>{
    const products = fetch("https://fakestoreapi.com/products").then(response => response.json())
    return defer({ products }) 
}
export default loader