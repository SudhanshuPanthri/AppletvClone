import React from "react";
import "./Header.css";
import AppleIcon from "@material-ui/icons/Apple";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Header() {
  return (
    <div class="header">
      <AppleIcon
        style={{
          fontSize: 34,
          margin: 10,
        }}
      />
      <h2>Apple TV+</h2>
      <AccountCircleIcon style={{ fontSize: 34, margin: 10 }} />
    </div>
  );
}

export default Header;
