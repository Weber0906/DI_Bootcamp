export const ADD_TO_CART = 'ADD_TO_CART';
export const CHECKOUT = 'CHECKOUT';

export const addToCart = (product) => ({
    type: ADD_TO_CART,
    payload: {...product, price: product.price },
});

export const checkout = () => ({
    type: CHECKOUT,
});
