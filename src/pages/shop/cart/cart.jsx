import React, { useContext }  from "react";
import { ProductContext } from "../../../context/productscontext";
import { ShopContext } from "../../../context/shop_context";
import './cart_style.css'
import {Carttotal} from './cart_items'

export const Cart = () =>  {
    const { PRODUCTS } = useContext(ProductContext);
    const { cartItems } = useContext(ShopContext);
    const sumOfIds = PRODUCTS.reduce((accumulator, product) => {
        return accumulator + product.id * cartItems[product.id];
    }, 0);

    const sumOfProducts = PRODUCTS.reduce((accumulator, product) => {
        return accumulator + product.price * cartItems[product.id];
    }, 0);
    console.log(sumOfIds,sumOfProducts,cartItems)
    return(
        <div className="Cart">
            <div className="CartTitle">
                Cart
            </div>
            <p>SELECTED PRODUCTS</p>
            <div className="store">
            <div className="side_cart">
            {Object.values(cartItems).some(quantity => quantity > 0) ? (
    PRODUCTS.filter(product => cartItems[product.id] > 0).map((product) => (
        <Carttotal key={product.id} data={product} />
    ))
) : (
    <p className="addpr">NONE</p>
)}

             </div>
             <div className="checkout">
                <div className="title">
                        Checkout
                </div>
                <div className="amt">
                 Net payable amount : {sumOfProducts === NaN ? 0:sumOfProducts }
                </div>
                <div className="delivery">
                <span className="deli">Delivered to :</span> Nulla proident do est aliquip. Consequat voluptate do qui et officia mollit magna do magna pariatur laborum consequat voluptate excepteur. Cillum aute elit laborum ullamco.
                </div>
                <div className="payment">
                    <button className="pay">
                        proceed to payment
                    </button>
                </div>
             </div> 
             </div>
        </div>
    );
}