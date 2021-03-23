import React from "react";
import Navbar from "./Navbar";
import "../css/homepage.css";
import Productpage from "./Productpage";
function Homepage() {
  return (
    <div>
      <Navbar />
      <div
        id="myCarousel"
        className="main-container carousel slide"
        data-bs-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
          ></li>
          <li
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
          ></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="mask flex-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-12 order-md-1 order-2 ">
                    <h4>
                      Present your <br />
                      awesome product
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
                      quidem rerum <br />
                      necessitatibus praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <a href="#">BUY NOW</a>
                  </div>
                  <div className="col-md-5 col-12 order-md-2 order-1 image">
                    <img
                      src="https://i.imgur.com/NKvkfTT.png"
                      className="mx-auto"
                      alt="slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="mask flex-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-12 order-md-1 order-2">
                    <h4>
                      Present your <br />
                      awesome product
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
                      quidem rerum <br />
                      necessitatibus praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <a href="#">BUY NOW</a>{" "}
                  </div>
                  <div class="col-md-5 col-12 order-md-2 order-1">
                    <img
                      src="https://i.imgur.com/duWgXRs.png"
                      className="mx-auto"
                      alt="slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="mask flex-center">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-md-7 col-12 order-md-1 order-2">
                    <h4>
                      Present your <br />
                      awesome product
                    </h4>
                    <p>
                      Lorem ipsum dolor sit amet. Reprehenderit, qui blanditiis
                      quidem rerum <br />
                      necessitatibus praesentium voluptatum deleniti atque
                      corrupti.
                    </p>
                    <a href="#">BUY NOW</a>{" "}
                  </div>
                  <div className="col-md-5 col-12 order-md-2 order-1">
                    <img
                      src="https://i.imgur.com/DGkR4OQ.png"
                      className="mx-auto"
                      alt="slide"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Productpage />
    </div>
  );
}

export default Homepage;
