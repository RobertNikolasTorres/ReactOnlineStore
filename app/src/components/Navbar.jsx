import { useContext } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

function Navbar(){

    const cart = useContext(GlobalContext).cart;

    function getNumOfProducts() {
       let total = 0;
       for(let i=0; i < cart.length; i++) {
        let prod = cart[i];
        total += prod.quantity;
       }

       return total;
    }
   
    return(
        <div>
            <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">
      Gear X
    </Link>
    <button
      className="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/catalog">
            Catalog
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/shoppingList">
            Shopping List
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">
            About us
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/admin">
            Admin
          </Link>
        </li>
       
      </ul>
      <form className="d-flex" role="search">
        <Link className="btn btn-outline-dark" type="/cart" to="/cart">
          {getNumOfProducts()} View Cart
        </Link>
      </form>
    </div>
  </div>
</nav>

        </div>
    );
}

export default Navbar;