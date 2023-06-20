import {combineReducers} from 'redux';
import { ADD_TO_CART, CHECKOUT } from './actions';

const initialState = {
    products: [
        {"id": 1, "title": "iPad 4 Mini", "price": 500.01, "inventory": 2},
        {"id": 2, "title": "H&M T-Shirt White", "price": 10.99, "inventory": 10},
        {"id": 3, "title": "Charli XCX - Sucker CD", "price": 19.99, "inventory": 5}
      ],
    cart: [],
    totalPrice: 0,
};

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.payload;
            const {cart, totalPrice} = state;

            const existingProduct = cart.find((item) => item.id === product.id);
            const inventory = state.products.find((item) => item.id === product.id)?.inventory;

            if (existingProduct) {
                if (inventory > 0) { 

                const productPrice = parseFloat(product.price);
                const updatedTotalPrice = Number((totalPrice + productPrice).toFixed(2))

                const updateCart = cart.map((item)=> 
                item.id === product.id ? {...item, quantity: item.quantity + 1} : item
                );
                const updateProducts = state.products.map((item) =>
                item.id === product.id ? { ...item, inventory: item.inventory - 1}: item
                );
                return {
                    ...state,
                    cart: updateCart,
                    totalPrice: updatedTotalPrice,
                    products: updateProducts,
                };
            }
            } else if (inventory > 0) {
                const productPrice = parseFloat(product.price);
                const updatedTotalPrice = Number((totalPrice + productPrice).toFixed(2))

                const updateCart = [...cart, {...product, quantity: 1}];
                const updateProducts = state.products.map((item) =>
                item.id === product.id ? {...item, inventory: item.inventory - 1} : item
                );

                return {
                    ...state,
                    cart: updateCart,
                    totalPrice: updatedTotalPrice,
                    products: updateProducts,
                    };
                }

                return state;
            }

            case CHECKOUT: {
                return {
                    ...state,
                    cart: [],
                    totalPrice: 0,
            };
        }

        default:
            return state;
    }
};

const rootReducer = combineReducers({
    cart: cartReducer,
})

export default rootReducer;