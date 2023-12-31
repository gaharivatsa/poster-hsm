import React, { useContext } from "react";
import './product_style.css'
import { ShopContext } from "../../../context/shop_context";

export const Products = (props) => {
    
    const {id,productname,price,productImage} = props.data;
    
    const {addToCart , cartItems,removeFromCart } = useContext(ShopContext);
    
    const cartItemAmount = cartItems[id];

    return (
        <div>
        <div className="box">
        <div className="heading">
            {productname}
        </div>
        <div className = 'image'>
            <img src = {productImage}></img>
        </div>
        <div className="price">
            {price}
        </div>
        <div className="items">
            <button onClick={() => addToCart(id)}>
            +
            </button>
            <div className="val">{cartItemAmount > 0 ? cartItemAmount:<p>None</p>}</div>
            <button onClick={() => removeFromCart(id)}>
                -
            </button>

        </div>
        </div>
        </div>
    )

} 