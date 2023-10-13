import React from "react";
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'phosphor-react';
import './navbar.css'

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="brand">
                Harmonic Palette
            </div>
            <div className = 'links'>
                <Link to = '/'><p>Home</p></Link>
                <Link to = '/shop'><p>Shop</p> </Link>
                <Link to = '/cart'>
                    <ShoppingCart size = {32} />
                </Link>
             </div>     
        </div>
    )
}