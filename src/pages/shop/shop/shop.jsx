import React,{ useState}  from "react";
import { useContext } from "react";
import { ProductContext } from "../../../context/productscontext";
import { Products } from "./products";
import './shop_style.css'

export const Shop = () =>  {
   
    const { PRODUCTS } = useContext(ProductContext);

    const sets = new Set(PRODUCTS.flatMap((product) => product.tags));

    const [selectedTag, setSelectedTag] = useState(null);

    
    const filterProducts = (tag) => {
        setSelectedTag(tag);
    };


    return(
        <div className="shop">
            <div className="ShopTitle">
                POSTER
            </div>
            <div className="shop_box">
            <div className="catalog">
            <p>
                Filter
            </p>
                <button onClick={() => filterProducts(null)}>All
                        </button>
            {
                    Array.from(sets).map((set) => (
                        <button
                            key={set}
                            onClick={() => filterProducts(set)}
                            className={selectedTag === set ? 'active' : ''}
                        >{set}
                        </button>
                    ))
                }
            </div>
            <div className="products">
            {PRODUCTS.map((product) => (
        product.tags.includes(selectedTag) || selectedTag === null ? (
            <Products data={product} key={product.id} />
        ) : null
    ))}
             </div>
             </div> 
        </div>
    );
}