import '../assets/css/First.css';
import {Link} from "react-router-dom";
import React from "react";


function AppFooter(){
return(
    <div>
        <br />
        <br />

    <footer>

          <div>

              <Link to="/">
                  <img
                      className="footer-logo"
                      src={require('../assets/images/Circus Tent.png')}
                      alt="Another Bookstore Logo"
                  />
              </Link>
          </div>

          <div className="links">
              <li><Link to="/" className="about">About</Link></li>
              <li><Link to="/" className="contact">Contact Us</Link></li>
              <li><Link to="/" className="directions">Get Direction</Link></li>
          </div>
          <div className="copyright">
              <h5>&copy; 2023 Book Fair Organization Pvt Ltd. All Rights Reserved</h5>
          </div>
          <div className="social-media-links">
              <Link to="/">
                  <img
                      className="Facebook"
                      src={require('../assets/images/Facebook Circled.png')}
                      alt="Another Bookstore Logo"
                  />
              </Link>
              <Link to="/">
                  <img
                      className="Instagram"
                      src={require('../assets/images/Instagram.png')}
                      alt="Another Bookstore Logo"
                  />
              </Link>
              <Link to="/">
                  <img
                      className="Twitter"
                      src={require('../assets/images/Twitter.png')}
                      alt="Another Bookstore Logo"
                  />
              </Link>
              <Link to="/">
                  <img
                      className="YouTube"
                      src={require('../assets/images/YouTube Logo.png')}
                      alt="Another Bookstore Logo"
                  />
              </Link>
          </div>

      </footer>
    </div>
)
}
export default AppFooter;
