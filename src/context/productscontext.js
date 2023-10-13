import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext(null);

export const ProductContextProvider = ({ children }) => {
    const [PRODUCTS, setProducts] = useState([]);

    useEffect(() => {
        fetch("None")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);

    return (
        <ProductContext.Provider value={{ PRODUCTS}}>
            {children}
        </ProductContext.Provider>
    );
}

export default ProductContextProvider;
