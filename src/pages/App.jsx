import  {Navbar}  from '../components/navbar.jsx';
import './App.css'
import { ShopContextProvider } from '../context/shop_context.js';
import {BrowserRouter  as Router , Routes , Route} from 'react-router-dom';
import { Shop }  from '../pages/shop/shop/shop';
import { Cart } from '../pages/shop/cart/cart';
import { Home } from './home/home.jsx';
import { ProductDetails } from './shop/productdetail/productsep.jsx';
import { ProductContextProvider } from '../context/productscontext.js';
export const App = () => {
    return(
        <div className='App'>

    <ProductContextProvider> 
        <ShopContextProvider> 
        
            <Router>
                <Navbar />
                <Routes>
                    <Route path='/' element = {<Home />}/>
                    <Route path='/cart' element = {<Cart />}/>
                    <Route path='/shop' element = {<Shop/>}/>
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </Router>
        </ShopContextProvider>
    </ProductContextProvider>
        </div>

    );}