import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header/Header';
import ShoppingList from './components/shopping-list/ShoppingList';
import CartList from './components/cart-list/CartList';
import SortOptions from './components/sort/SortOptions';
import './sass/styles.scss';
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SERVICE_API = 'https://api.myjson.com/bins/qzuzi';

/* 
* Created by Madhavan 21/03/2020
**/
class AdobeShopping extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCart: false,
            cartItems: [],
            listItems: [],
            displayItems: [],
        };
        this.updateShowCart = this.updateShowCart.bind(this);
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.sortListItems = this.sortListItems.bind(this);
        this.searchCart = this.searchCart.bind(this);
    }

    componentDidMount() {
        /*
        * Below code implements the caching
        * Fetches only once during the session
        *************************************************/

        let listItems = sessionStorage.getItem("listItems");
        
        if (listItems) {
            listItems = JSON.parse(listItems);
            this.setState((state, props) => {
                return {listItems: listItems};
            });
        } else {
            fetch(SERVICE_API)
            .then((resp) => resp.json())
            .then((items) => {
                console.log(items)
                this.setState((state, props) => {
                    return {listItems: items};
                });
                sessionStorage.setItem("listItems", JSON.stringify(items));
            })
            .catch((error) => {
                console.log(JSON.stringify(error));
                alert("Something went wrong. Please try again!");
            }); 
        }
        
    }

    componentWillUnMount() {
        // clear the session storage
        sessionStorage.clear();
    }

    updateShowCart(bool) {
        this.setState((state, props) => {
            return {showCart: bool};
        });
    }

    addToCart(item) {
        this.setState((prevState, props) => {
            // Add to cart only if an item does not exist in the cart
            if(!prevState.cartItems.some(cartItem => cartItem.id === item.id)) {
                item.discountedPrice = item.price - (item.price * (item.discount/100));
                // Append to previous cart items
                return {cartItems: [...prevState.cartItems, item]};
            } else {
                alert("Item exist in the cart!");
            }
        }, function(){
            // callback
        });
    }

    removeFromCart(removeItem) {
        let cartItems = this.state.cartItems.filter((item, i) => {
            return item.id != removeItem.id;
        })

        this.setState((prevState, props) => {
            return {cartItems: cartItems};
        }, function() {
            // callback
        });

    }

    sortListItems(by) {
        let sortedList = []
        if(by=="low" || by=="high") {
            sortedList = this.state.listItems.sort((a, b) => a.price - b.price)
            if(by=="high")
                sortedList = sortedList.reverse()
        } else if(by=="discount") {
            sortedList = this.state.listItems.sort((a, b) => a.discount - b.discount).reverse()
        }

        // set sorted list items
        this.setState((prevState, props) => {
            return {listItems: sortedList};
        }, function() {
            // callback
        });
    }

    searchCart(searchValue) {
        let searchItems = [];
        if(this.state.showCart) {
            searchItems = this.state.cartItems.filter((item, i) => {
                return item.name.toLowerCase().includes(searchValue.toLowerCase());
            })
        } else {
            searchItems = this.state.listItems.filter((item, i) => {
                return item.name.toLowerCase().includes(searchValue.toLowerCase());
            })
        }
        this.setState((prevState, props) => {
            return {displayItems: searchItems};
        }, function() {
            // callback
        });
    }

    render() {
        return <div>
                    <Header searchCart={this.searchCart} updateShowCart={this.updateShowCart} cartSize={this.state.cartItems.length}/>
                    
                    <div className="content">
                        {
                            this.state.showCart ? <CartList cartItems={this.state.displayItems.length > 0 ? this.state.displayItems : this.state.cartItems } removeFromCart={this.removeFromCart} updateShowCart={this.updateShowCart} /> : 
                            <div>
                                {this.state.listItems.length < 1 ? <FontAwesomeIcon icon={faSpinner} className="fa-spin" size="2x" /> : null}
                                <SortOptions sortListItems={this.sortListItems} />
                                <ShoppingList listItems={this.state.displayItems.length > 0 ? this.state.displayItems : this.state.listItems} addToCart={this.addToCart} />
                            </div> 
                        }
                    </div>
                </div>;
    }
}

ReactDOM.render(<AdobeShopping />, document.getElementById('root'));