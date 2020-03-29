import React from 'react';
import style from './style.scss';
import CartListItem from '../cart-list-item/CartListItem';
import { faShoppingCart, faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* 
*   Created by Madhavan 22/03/2020
**/
const CartList = ({cartItems, updateShowCart, removeFromCart, increaseCartCount, decreaseCartCount}) => {

    const cartValue = cartItems.length > 0 ? cartItems.map(item => item.price * item.cartCount).reduce((prev, next) => prev + next) : 0;
    const cartDiscountValue = cartItems.length > 0 ?  cartItems.map(item => item.discountedPrice * item.cartCount).reduce((prev, next) => prev + next) : 0;

    return  (
        <div>
            <div className="cart">
                <ul className="cart-list">
                    { cartItems.length > 0 ? cartItems.map((item, i) => <CartListItem key={i} increaseCartCount={() => increaseCartCount(item)} decreaseCartCount={() => decreaseCartCount(item)} item={item} i={i} removeFromCart={() => removeFromCart(item)} /> ) : <li>No cart items available</li>}
                </ul>
                <div className="price-details">
                    <div>PRICE DETAILS</div>
                    <div>
                        <span>Price ({cartItems.length} item{cartItems.length > 1? "s" : null}) </span><span>:</span><span>{cartValue}</span>
                    </div>
                    <div>
                        <span>Discount</span><span>:</span><span>{cartValue - cartDiscountValue}</span>
                    </div>
                    <div>
                        <span>Total Payable</span><span></span><span>{cartDiscountValue}</span>
                    </div>
                </div>
            </div>
            <button onClick={() => updateShowCart(false)}>Continue Shopping</button>
        </div>
    );
}

export default CartList;