import React from "react";
import "./footer.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <footer>
        <p className="copyright">All rights reserved &copy; {year} </p>
      </footer>
    </>
  );
};

export default Footer;
