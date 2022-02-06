import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <nav className="navbar bg-dark navbar-dark text-center">
        <Link to={"/"} className="navbar-brand ml-5">
          Dashboard
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
