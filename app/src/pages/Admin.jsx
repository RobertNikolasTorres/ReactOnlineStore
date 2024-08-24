import { useState, useContext } from "react";
import "./Admin.css";
import GlobalContext from "../context/GlobalContext";


function Admin(){
    const addProductsToCatalog = useContext(GlobalContext).addProductsToCatalog;
    const [allCoupons, setAllCoupons] = useState([]);
    const [coupon, setCoupon] = useState({
        code:'',
        discount:0,
    });

    const [allProducts, setAllProducts] = useState([]);
    const [products, setProducts] = useState({
        title:'',
        price:0,
        image:'',
        category:"",
    });

    function handleProductsChange(e){
        let name = e.target.name;
        let copy = {...products};
        copy['image'] ="/images/" + copy['image'];
        copy['price'] = parseFloat(copy['price']);
        copy[name] = e.target.value;
        setProducts(copy);
    }
    

    function handleCouponChange(e){
        let name = e.target.name;
        let copy = {...coupon};
        copy[name] = e.target.value;
        setCoupon(copy);
    }

    function saveCoupon(){
        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    function saveProduct(){
        let copy = [...allProducts];
        copy.push(products);
        setAllProducts(copy);
    }

    return(
        <div className="admin">
            <h1>Store administration</h1>

            <div className="parent">
                <div className="products">

                    <h4>Manage Products</h4>
                    
                    <div className="div1">
                        <label className="form-label">Title</label>
                        <input onBlur={handleProductsChange} name="title" type="text" className="form-label"/>
                    </div>
                    <div className="div1">    
                        <label className="form-label">Price</label>
                        <input onBlur={handleProductsChange} name="price" type="text" className="form-label"/>
                    </div>
                    <div className="div1">    
                        <label className="form-label">Image</label>
                        <input onBlur={handleProductsChange} name="image" type="text" className="form-label"/>
                    </div>
                    <div className="div1">
                        <label className="form-label">Category</label>
                        <input onBlur={handleProductsChange} name="category" type="text" className="form-label"/>
                    </div>
                    <div>
                        <button onClick={saveProduct} className='btn btn-sm btn-dark'>Add Product</button>
                    </div> 
                    {allProducts.map((prod)=>(
                        <p key={prod.title}>
                            {prod.title} - {prod.price} - {prod.image} - {prod.category}
                        </p>
                    ))}              
                </div>


                <div className="coupons">
                    <h3>Manage Coupons</h3>

                    <div className="div1">
                        <label className="form-label">Code</label>
                        <input onBlur={handleCouponChange} name="code" type="text" className="form-label"/>
                    </div>
                    <div className="div1">       
                        <label className="form-label">Discount</label>
                        <input onBlur={handleCouponChange} name="discount" type="number" className="form-label"/>
                    </div>
                    <div>
                        <button onClick={saveCoupon} className='btn btn-sm btn-dark'>Save Coupon Code</button>
                    </div>    
                    {allCoupons.map((coupon)=>(
                        <p key={coupon.code}>
                            {coupon.code} - {coupon.discount}
                        </p>

                    ))}
                </div>
            </div>
        </div>
    );
}

export default Admin;   