import Product from "../components/Product";
import "./Catalog.css";
import { catalog, categories } from "../services/DataService";


function Catalog(){
    return(
        <div>
            <h1 className="h1-backround">Check our amazing catalog!</h1>

            <div className="filter-list">
                {categories.map(cat => <button className="btn btn-outline-secondary">{cat}</button>)}
            </div>

            <div className="product-list">
                {catalog.map(prod => <Product data={prod} />)}
            </div>
        </div>
    );
}

export default Catalog;