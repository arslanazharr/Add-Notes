import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="outer-div">
        <footer>
          <p className="copyright">All rights reserved &copy; {year} </p>
        </footer>
      </div>
    </>
  );
};

export default Footer;
