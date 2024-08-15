import { useState } from 'react';
import "./Product.css";
import QuantityPicker from "./QuantityPicker" ;

function Product(props){
    const [quantity, setQuantity] = useState(1);

    function handleQuantity(qty) {
        setQuantity(qty);
    }

    function getTotal() {
        let total = props.data.price * quantity;
        return total.toFixed(2);
    }

    return(
        <div className="product">

            <img src={props.data.image} alt=" " />
            
            <h3>{props.data.title}</h3>
            
            <div className="prices">
                <label>Total: ${getTotal()}</label>
                <label>Price: ${props.data.price.toFixed(2)}</label>
            </div>

            <div>
                <QuantityPicker onChange={handleQuantity} />
                <button className="btn btn-sm btn-primary">Add</button>
            </div>
        </div>
    );
}

export default Product;