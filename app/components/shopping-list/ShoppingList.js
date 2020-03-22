import React from 'react';
import style from './style.scss';
import ShoppingListItem from '../shopping-list-item/ShoppingListItem';

/* 
*   Created by Madhavan 22/03/2020
**/
class ShoppingList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const listItems = this.props.listItems;

        return  <ul className="shopping-list">
                    {listItems.map((item, i) => <ShoppingListItem addToCart={() => this.props.addToCart(item)} item={item} i={i}/>)}
                </ul>;
    }
}

export default ShoppingList;