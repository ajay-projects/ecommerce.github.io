import React from "react";
import "../css/Footer.css";
function Footer() {
  return (
    <>
      <footer>
        <div className="left">
          <h3>Ajs Shooping</h3>
          <div className="social">
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>

            <small class="rights"> Ajay All Rights Reserved.</small>
          </div>
        </div>
        <div className="center">
          <h6>
            <b>MENU</b>
          </h6>
          <ul>
            <li>Home</li>
            <li>SignIN</li>
            <li>SignUP</li>
          </ul>
          <h6>
            <b>AJAY VISHWAKARMA </b>
          </h6>
          <small>
            <span>
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            ajay@gmail.com
          </small>
        </div>
        <div className="right">
          <h6>
            <b>ADDRESS</b>
          </h6>
          <p>605, RATAN ICON BUILDING</p>
          <p>SEAWOODS SECTOR</p>
          <h6 class="text-muted bold-text">
            <b>REHAN SHAIKH</b>
          </h6>
          <small>
            <span>
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </span>
            rehan@gmail.com
          </small>
        </div>
      </footer>
    </>
    
  );
}

export default Footer;
