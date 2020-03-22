import React from 'react';

/* 
*   Created by Madhavan 22/03/2020
**/
class ShoppingListItem extends React.Component {
    
    render() {
        const {item ,i} = this.props;
        
        return  <li className="list-item" key={i}>
                    <img src={item.img_url} />
                    <div>{item.name}</div>
                    <div>
                        <span>₹{item.price - (item.price * (item.discount/100))}</span>&nbsp;&nbsp;
                        <span>{item.price}</span>&nbsp;&nbsp;
                        <span>{item.discount}% off</span>
                    </div>
                    <button onClick={() => this.props.addToCart(item)}>Add to Cart</button>
                </li>;
    }
}

export default ShoppingListItem;