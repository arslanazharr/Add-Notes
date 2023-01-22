import React from "react";
import "./header.css";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";

const Header = () => {
  return (
    <>
      <div className="header">
        <StickyNote2Icon className="icon" />
        <h1>Note Here</h1>
      </div>
    </>
  );
};

export default Header;
