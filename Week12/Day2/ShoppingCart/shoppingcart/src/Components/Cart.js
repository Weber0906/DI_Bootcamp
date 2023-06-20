import React from 'react';
import {connect} from 'react-redux';
import { checkout } from '../redux/actions';

const Cart = ({ cart, totalPrice, checkout}) => {
    return (
        <div>
            <h2>Cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : ( 
                <>
                    {cart.map((item) => (
                        <div key={item.id}>
                            <p>{item.title}</p>
                            <p>Quantity: {item.quantity}</p>
                        </div>
                    ))}
                    <p>Total Price: ${totalPrice}</p>
                    <button onClick={checkout}>Checkout</button>               
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart,
    totalPrice: state.cart.totalPrice,
})

const mapDispatchToProps = {
    checkout
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);