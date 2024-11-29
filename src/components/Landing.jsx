import React from "react";
import Header from "../Header";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Header />
      <div className="landing-page">
        <div className="content-container">
          <div className="stats-card">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum pulvinar vel.
            </p>
            <div className="stats">
              <div>
                <h3>25K</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <h3>12K</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <h3>187</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
              <div>
                <h3>10.9K</h3>
                <p>Lorem ipsum dolor sit amet</p>
              </div>
            </div>
          </div>

          <div className="main-text">
            <h1>Travel to see the world different</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus
              imperdiet sed id elementum. Quam vel aliquam sit vulputate.
              Faucibus nec gravida ipsum pulvinar vel.
            </p>
            <Link to='/login'><button className="cta-button">Get started</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
