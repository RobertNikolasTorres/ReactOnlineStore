import React, { useContext } from "react";
import { createContext } from "react";
import "./Cart.css";
import GlobalContext from "../context/GlobalContext";
import Product from "../components/Product";


function Cart(){

    let cart = useContext(GlobalContext).cart;

    function getNumOfProducts() {
        let total = 0;
        for(let i=0; i < cart.length; i++) {
         let prod = cart[i];
         total += prod.quantity;
        }
 
        return total;
    }

    function getCartTotal() {
        let total = 0;
        for(let i=0; i < cart.length; i++) {
         let prod = cart[i];
         total += (prod.quantity * prod.price);
        }
 
       return total.toFixed(2);
    }

    function goToPay() {
        console.log("User wants to pay")
    }

    
    return(
        <div className="cart">
            <h1>Your cart is ready</h1>
            <h3>We have {getNumOfProducts()} products ready for your order</h3>
            <div className="list">
                {cart.map(prod => <div className="cart-prod">
                    <img src={prod.image} alt=""/>
                    <h5>{prod.title}</h5>
                    <label>Price: ${prod.price}</label>
                    <label>Quantity: {prod.quantity}</label>
                    <label>Total: ${(prod.quantity * prod.price).toFixed(2)}</label>
                    <button className='btn btn-sm btn-dark'>Remove item</button>

                </div>
                )}
            </div>

            <div className="total">
                <h5>Your total is:</h5>
                <h3>{getCartTotal()}</h3>
                <hr />
                <button onClick={goToPay} className="btn btn-sm btn-dark">Proceed to payment &gt;</button>
                
            </div>
        </div>
    );
}

export default Cart;