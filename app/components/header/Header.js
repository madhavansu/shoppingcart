import React from 'react';
import style from './style.scss';
import { faShoppingCart, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from '../search/Search';

/* 
*   Created by Madhavan 22/03/2020
**/
const Header = ({cartItems, updateShowCart, searchCart}) => {
  
  const cartSize = cartItems.length > 0 ? cartItems.map(item => item.cartCount).reduce((prev, next) => prev + next) : 0;
  
  return (
    <nav>
        <ul className="primary-nav">
            <li className="left" onClick={() => updateShowCart(false)}><FontAwesomeIcon icon={faStar} className="logo" size="2x" /></li>
            
            <li className="right"> <Search searchCart={searchCart} /> </li>
            <li className="right" onClick={() => updateShowCart(true)}><FontAwesomeIcon icon={faShoppingCart} size="2x" className="badge" /><span className="cart-size">{cartSize}</span></li>
        </ul>
    </nav>
  )
}

export default Header;