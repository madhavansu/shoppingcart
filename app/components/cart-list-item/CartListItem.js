import React from 'react';
import { faShoppingCart, faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* 
*   Created by Madhavan 22/03/2020
**/
const CartListItem = ({item, i, removeFromCart, decreaseCartCount, increaseCartCount}) => {
    return (
        <li className="list-item" key={i}>
            <img src={item.img_url} alt="shopping" />
            <div className="cart-items">
                <div className="item-price">
                    <div>{item.name}</div>
                    <div>
                        <span>₹{item.discountedPrice}</span>&nbsp;&nbsp;
                        <span>{item.price}</span>&nbsp;&nbsp;
                        <span>{item.discount}% off</span>
                    </div>
                </div>
                <div className="cart-counter"> <FontAwesomeIcon onClick={() => decreaseCartCount(item)} className="price-icon" icon={faMinusCircle} size="2x" /> <span>{item.cartCount}</span> <FontAwesomeIcon onClick={() => increaseCartCount(item)} className="price-icon" icon={faPlusCircle} size="2x" /></div>
                <a href="#" className="button" onClick={() => removeFromCart(item)}>REMOVE</a>
            </div>
        </li>
    )
}

export default CartListItem;