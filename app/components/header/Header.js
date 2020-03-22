import React from 'react';
import style from './style.scss';
import { faShoppingCart, faSearch, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/* 
*   Created by Madhavan 22/03/2020
**/
class Header extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
    const cartSize = this.props.cartSize;
    return <nav>
                <ul className="primary-nav">
                    <li className="left" onClick={() => this.props.updateShowCart(false)}><FontAwesomeIcon icon={faStar} className="logo" size="2x" /></li>
                    
                    <li className="right"><FontAwesomeIcon icon={faSearch} style={{ color: '#fff' }} size="2x" /></li>
                    <li className="right" onClick={() => this.props.updateShowCart(true)}><FontAwesomeIcon icon={faShoppingCart} size="2x" className="badge" /><span className="cart-size">{cartSize}</span></li>
                </ul>
            </nav>; 
  }
}

export default Header;