import React , { createContext , useState } from "react";
import { useContext,useEffect } from "react";
import { ProductContext } from "./productscontext";


export const ShopContext = createContext(null);

const getDefaultCart = (PRODUCTS) => {
    let cart = {};
    for (let i = 1;i <= PRODUCTS.length;i++){
        cart[i] = 0;
}
return cart;
};

export const ShopContextProvider = (props) => {

    const { PRODUCTS } = useContext(ProductContext);
    const [cartItems , setCartItems] = useState(getDefaultCart(PRODUCTS));

    useEffect(() => {
        setCartItems(getDefaultCart(PRODUCTS));
    }, [PRODUCTS]);

    const addToCart = (itemId) => setCartItems((prev) => ({...prev,[itemId] :  prev[itemId] >= 0 ? prev[itemId]  + 1:1 }))

    const removeFromCart = (itemId) => setCartItems((prev) => ({...prev,[itemId] : prev[itemId] > 0? prev[itemId]  - 1:0}))

    const contextValue = {cartItems,addToCart,removeFromCart};

    

    return <ShopContext.Provider value = {contextValue}>
        {
            props.children
        }
    </ShopContext.Provider>;
}