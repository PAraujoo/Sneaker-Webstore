import React, { useContext } from "react";
import { FaBars, FaTimes } from "react-icons/fa"
import './Navbar.css'

import brand_logo from '../Assets/brand_logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

export default function Navbar() {

    const [menu, setMenu] = React.useState("shop")
    const {getTotalCartItems} = useContext(ShopContext)
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleMobileMenu = () => {
        setIsOpen((open) => !open)
    }
    return (
        <>
        <div className={`navbar ${isOpen ? "responsive_nav" : ""}`}>
            <div className="nav-logo">
                <Link to='/'><img onClick={() => {setMenu("shop")}} src={brand_logo} alt="logo" /></Link>
                <p className="nav-title">SNEAKCITY</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => {setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr />:<></>}</li>
                <li onClick={() => {setMenu("mens")}}><Link to='/mens'>Men</Link>{menu==="mens"?<hr />:<></>}</li>
                <li onClick={() => {setMenu("womens")}}><Link to='/womens'>Women</Link>{menu==="womens"?<hr />:<></>}</li>
                <li onClick={() => {setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr />:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button className="login-btn">Login</button></Link>
                <Link to='/cart'><img className="nav-cart-img" src={cart_icon} alt="cart_icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
            <button className={`nav-btn ${isOpen ? "close-btn" : ""}`} onClick={toggleMobileMenu}>
                <FaTimes/>
            </button>
        </div>
        <button className={`nav-btn ${isOpen ? "is-closed" : ""}`} onClick={toggleMobileMenu}>
            <FaBars/>
        </button>
        </>
    )
}
