import {Route} from 'react-router-dom'
import App from '../App'
import appPaths from '../utils/pathConstant'

export const appRoutes=(
    <Route  path={appPaths.ROOT} element={<App/>} >

    <Route path={appPaths.PRODUCTS} lazy={()=>import("../pages/products")}  errorElement={<div><h1>products erorr</h1></div>}/>
    <Route path={appPaths.PRODUCTSDETAILS} lazy={()=>import("../pages/prodcutDetails")}  errorElement={<div><h1>products details erorr</h1></div>}/>

    </Route>
)