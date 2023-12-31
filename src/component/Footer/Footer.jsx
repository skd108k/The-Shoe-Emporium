import "./Footer.css";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <>
      <footer className="dp_row dp_rowdir_clmn_onlyMob text-alignMob justify-contentspaceAround footer">
        <div className="dp_row dp_rowdir_clmn footer-item">
          <div className="footer-copy fw-bold">
            Copyright © 2023 The-Shoe-Emporium.
          </div>
          <div>All Rights Reserved</div>
          <div className="dp_row justifycenter footer-icons fs-1-25">
            <a
              href="https://github.com/skd108k"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <i className="fa-brands fa-github fa-icon"></i>
            </a>

            <a
              href="https://twitter.com/sk23137550?t=RpCTqRbU6fl3VTfBRd1ycg&s=08 "
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <i className="fa-brands fa-twitter fa-icon"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/shaileshkumar-dahekar-2a6648205"
              target="_blank"
              rel="noreferrer"
              className="footer-link"
            >
              <i className="fa-brands fa-linkedin-in fa-icon"></i>
            </a>
          </div>
        </div>
        <div className="footer-item">
          <span className="fw-600">Quick Links</span>
          <div className="dp_row dp_rowdir_clmn quick-links">
            <Link to="/product">Products</Link>
            <Link to="/cart">Cart</Link>
            <Link to="/wishlist">Wishlist</Link>
          </div>
        </div>
        <div className="footer-item">
          <span className="fw-600">Contact Us</span>
          <div className="dp_row dp_rowdir_clmn contact-details">
            <span>
              <i className="fa-solid fa-location-dot fa-icon"></i>
              <span className="ml-0-5">Dadar East, Mumbai</span>
            </span>
            <span>
              <i className="fa-solid fa-phone fa-icon"></i>
              <span className="ml-0-5">+91 9322766373</span>
            </span>
            <span>
              <i className="fa-solid fa-envelope fa-icon"></i>
              <span className="ml-0-5">support@theshoeemporium.com</span>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
};
