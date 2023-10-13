import React from "react";
import './home_style.css'
import sparkle from '../../assets/Sparkle.png'

export const Home = () => {
    return(
        <div className="total_home">
            <div className="banner">
                    <img src = {sparkle}></img>
            </div>
            <div className="abt_site">
                    <p>
                        COVER YOUR INTERIORS WITH OUR CUSTOM 
                        
                    </p>
                    <p>
                    HAND CRAFTED POSTERS
                    </p>
            </div>
            <div className="about">
                </div> 
                <div className="follow">
                    <div className="follow_text">
                        Lets Connect
                    </div>  
                    <div className="socials">
                        <div className="icons">
                        
                        </div>
                    </div>
                </div>
                </div>
    )
}