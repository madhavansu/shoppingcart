import React from 'react';
import style from './style.scss';
import ShoppingListItem from '../shopping-list-item/ShoppingListItem';

/* 
*   Created by Madhavan 22/03/2020
**/
const ShoppingList = ({listItems, addToCart}) => {
    return (
        <ul className="shopping-list">
            {listItems.map((item, i) => <ShoppingListItem addToCart={() => addToCart(item)} item={item} i={i} key={i}/>)}
        </ul>
    )
}

export default ShoppingList;