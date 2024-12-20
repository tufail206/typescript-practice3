import { Suspense } from "react"
import { Await, useLoaderData, useNavigate } from "react-router-dom"
import { ProductsSchem } from "./type"


const Products = () => {
  const  {products} =useLoaderData()  as ProductsSchem
  const navigate=useNavigate()
  return (
    <div>
      <h1>prdocuts  page</h1>
      <Suspense fallback={<h1>loading.....</h1>}  >
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <Await resolve={products} errorElement={<h2>no products founds</h2>}>
            {data => data.map((item) => (
              <div style={{ width: "20%" ,cursor:"pointer"}} onClick={()=>{navigate(`/products/${item.id}`)}}>
                <div>
                  <img src={item.image} alt={item.name} width={200} height={200} />
                </div>
                <div key={item.id}>
                  <h2>{item.name}</h2>
                  <p>{item.description.substring(0,130)}</p>
                </div>
              </div>
            ))}
          </Await>
        </div>
      </Suspense>
    </div>
  )
}

export default Products
