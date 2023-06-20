import React from 'react';
import {connect} from 'react-redux';
import { addToCart } from '../redux/actions';


const ProductList = ({ products, addToCart }) => {
    return (
        <div>
            <h2>Product List</h2>
            {products.map((product) => (
                <div key={product.id}>
                    <h3>{product.title}</h3>
                    <p>Price: ${product.price}</p>
                    <p>Inventory: {product.inventory}</p>
                    <button
                    onClick={()=>addToCart(product)}
                    disabled={product.inventory === 0}
                    >
                        Add to cart
                    </button>
                </div>
            ))}
        </div>
    );
};

const mapStateToProps = (state) => ({
    products:state.cart.products,
})

const mapDispatchToProps = {
    addToCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);

