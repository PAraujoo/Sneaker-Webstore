import React from "react";
import './Offers.css'
import jumpman_logo from '../Assets/Jumpman_logo.png'

export default function Offers() {
    return (
        <div className="offers">
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>Offers For You</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={jumpman_logo} alt="excl_img" />
            </div>
        </div>
    )
}