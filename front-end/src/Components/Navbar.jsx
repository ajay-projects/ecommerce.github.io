import React from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
function Navbar() {
  const [{ basket}, dispatch] = useStateValue();
  return (
    <div>
      <nav>
        <h1>ShoppyNow</h1>
        <ul>
          <li>Home</li>
          <li>SignIn</li>
          <li>SignUp</li>
         
            <div className="icons">
              <Link exact to="/Checkout">
              <i class="fa fa-shopping-cart" aria-hidden="true"><span> {basket?.length}</span></i>
              </Link>
            </div>

        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
