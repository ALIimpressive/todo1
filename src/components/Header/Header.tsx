import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BlurOnIcon from "@mui/icons-material/BlurOn";
import { Link } from "react-router-dom";

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <div>
      <div id="header">
        <div className="container">
          <div className="header">
            <BlurOnIcon sx={{ color: "white", fontSize: "55px" }} />
            <Link to="/admin">
              <h2>Admin</h2>
            </Link>
            <Link to="/">
              <h2>Home</h2>
            </Link>
            <Link to="/favor">
              <h2>Favor</h2>
            </Link>
            <ShoppingCartIcon sx={{ color: "white" }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
