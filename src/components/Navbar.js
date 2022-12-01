import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
     

<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Gen-Z Blogs</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item pad">
          <a class="nav-link active" aria-current="page" href="#"><NavLink to="/">Home</NavLink></a>
        </li>
        <li class="nav-item pad2">
          <a class="nav-link" ><NavLink to="/about">About</NavLink></a>
        </li>

        <li class="nav-item pad3">
        <a class="nav-link" ><NavLink to="/contact">Blog</NavLink></a>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>
    </>
  );
};

export default Navbar;
