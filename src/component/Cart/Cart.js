import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total,course)=> total + course.price,0);
    const vat = total/10;
    return (
        <div className="cart">
             <h2 style={{marginLeft:"50px"}}>Order Summary</h2>
             <br/>
             <h3>Items Ordered: {cart.length}</h3>
             <h3>Course Price: ${total}</h3>
             <h3>Vat: ${vat}</h3>
             <h3>Total: ${total+vat}</h3>
        </div>
    );
};

export default Cart;