# Shopping Cart Application

Application performs the functionality of shopping cart behaviors 
[Live Demo](https://madhavansu.github.io/shoppingcart/)

@author: Madhavan Subramanian
@email: madhavan.manian@gmail.com

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
    Implemented es6 feature such as Arrow function, filter, map, some, let const, spread[...] operator etc.,
    Used CSS3 styling,
    Used media queries for responsiveness,
    Used Webpack for building and bundling,
    Javascript and CSS minifying using loaders and bundlers,
    Used Verdana font locally,
    Used Fontawesome for icons,
    Used react for separation of modules and components,
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

    $ build-prod
