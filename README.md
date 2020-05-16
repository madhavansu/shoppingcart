# Shopping Cart Application

    Application performs the functionality of shopping cart behaviors 

    Author: Madhavan Subramanian
    Email: madhavan.manian@gmail.com

## Live Demo
### [https://madhavansu.github.io/shoppingcart/](https://madhavansu.github.io/shoppingcart/)

## Implemented Features
    Add to cart, 
    Remove from cart, 
    Dynamic cart update,
    Calculate total cart value, 
    Calculate total cart discounts, 
    Validate existing cart item,
    Total amount payable,
    Responsive design for mobile and desktop versions,
    Flow implementation,
    Calculations,
    Data persistance with state management,
    Event management,
    Search functionality,
    Increase or decrease the count of cart items,
    Sort by discounted price ascending and descending,
    Sort by discounts descending

## Technical Implementations
    Used Fetch to fetch the api from endpoint,
    Implemented the cashing mechanism to maintain the records locally for the session. 
        there will be only once the api will be called, to re-fetch from endpoint close and reopen the browser tab.
    Used SASS, SCSS for styling,
    Implemented es6 feature such as Arrow function, filter, map, some, let, const, spread[...] operator etc.,
    Used CSS3 styling,
    Used media queries for responsiveness,
    Used Webpack for bundling and packaging the resources,
    Used Babel for transpiling the es6 into es5.
    Javascript and CSS minifying using loaders and bundlers,
    Used Verdana font locally,
    Used Fontawesome for icons,
    Used react for to create scalable component development and state management,
    Used bundlers for bundling CSS, JS, fonts and images,

## Components
    Search Component
    Cart Icon Component
    Sort Component
    Shopping list Component
    Header

## Install

    $ git clone https://github.com/madhavansu/shoppingcart.git
    $ cd shoppingcart
    $ npm install

## Running the project

    $ npm run build

    open http://localhost:8080/ in the browser
    
    Note: For live refresh replace ./dist/bundle with ./bundle from index.html for both css and Javascript, this will be fixed in next release.  

## Simple build for production

    $ npm run build-prod

## Useful  links for this project

    https://appdividend.com/2017/03/28/beginners-guide-to-setup-es6-development-environment/

    https://dev.to/pixelgoo/how-to-configure-webpack-from-scratch-for-a-basic-website-46a5

    https://jsbin.com/zarakid/edit?html,css,js,output

    https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data

    http://thesassway.com/intermediate/responsive-web-design-in-sass-using-media-queries-in-sass-32

    https://www.w3schools.com/css/css_rwd_mediaqueries.asp    