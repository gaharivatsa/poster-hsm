import React, { useContext } from "react";
import './product_style.css'
import { ShopContext } from "../../../context/shop_context";
import { Link } from "react-router-dom";

export const Products = (props) => {
    
    const {id,productname,price,productImage} = props.data;
    
    const {addToCart , cartItems,removeFromCart } = useContext(ShopContext);
    
    const cartItemAmount = cartItems[id];

    console.log(cartItems)

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
            <div className="val">{cartItemAmount > 0 ? cartItemAmount:<p>{typeof cartItemAmount}</p>}</div>
            <button onClick={() => removeFromCart(id)}>
                -
            </button>
        </div>
        <div className="linkwrap">
            <Link className = "productlink" to={`/product/${id}`}>Open Up</Link>
        </div>
        </div>
        </div>
    )

} 