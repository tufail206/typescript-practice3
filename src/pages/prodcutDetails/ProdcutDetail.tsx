import { Suspense } from "react"
import { Await, useLoaderData } from "react-router-dom"

const ProdcutDetail = () => {
    const {product}=useLoaderData()
    console.log("sibgle", product)
  return (
    <div>
      <h1>product details</h1>
      <div>
        <Suspense fallback={<h1>loading product details....</h1>}>
       <Await resolve={product} errorElement={ <h2>no product found </h2> 
       }>
      {
        (item)=>{
            return(
                                <div style={{width:"70%",display:"flex",margin:"30px auto"}}>
                    {<img src={item.image} alt={item.name} width={500} height={500} />}
                  <div>
                        {<h2> product name: {item.name}</h2>}
                        {<h2>product price:{item.price}</h2>}
                        {<h2>product description:{item.description}</h2>}
                  </div>
                 
                    
                    </div>
            )
        }
      }
       
           
       </Await>
        </Suspense>
        <div>

        </div>
      </div>
    </div>
  )
}

export default ProdcutDetail
