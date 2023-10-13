import React, {useContext} from "react";
import { ShopContext } from "../../../context/shop_context";
import './cart_style.css'
import './cartitems_style.css'


export const Carttotal = (props) => {
    
    const {id,productname,price,productImage} = props.data;

    const {cartItems} = useContext(ShopContext);
    

    return(
        <div className="cartbox">
        <div className="product">
            {productname}
        </div>
        <div className = 'cartimg'>
            <img src = {productImage}></img>
        </div>
        <div className="cartprice">
            Rs. : {price}
        </div>
        <div className="pieces">
            No : {cartItems[id]}
        </div>
        </div>  
    );
}