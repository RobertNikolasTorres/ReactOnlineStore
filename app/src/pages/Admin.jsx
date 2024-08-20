import "./Admin.css";


function Admin(){
    return(
        <div className="admin">
            <h1>Store administration</h1>

            <div className="parent">
                <div className="products">

                    <h4>Manage Products</h4>
                    <div>
                        <label className="form-label">Title</label>
                        <input type="text" />
                        <label className="form-label">Price</label>
                        <input type="text" />
                        <label className="form-label">Image</label>
                        <input type="text" />
                        <label className="form-label">Category</label>
                        <input  className="input" type="text" />
                        
                    </div>
                    <button className='btn btn-sm btn-dark'>Add Product</button>
                </div>
                <div className="coupons">
                    <h3>Manage Coupons</h3>
                    <div>
                        <label className="form-label">Code</label>
                        <input className="input" type="text" />
                        <label className="form-label">Discount</label>
                        <input className="input" type="text" />
                    </div>
                        <button className='btn btn-sm btn-dark'>Save Coupon Code</button>
                </div>
            </div>
        </div>
    );
}

export default Admin;