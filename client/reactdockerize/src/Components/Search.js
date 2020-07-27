import React, { useState } from "react";
import ReactDOM from "react-dom";


export default function Search() {
  const [id, setID] = useState("Search");
  const [background, setColor] = useState("grey");
  function handleOnChange(event) {
    setID(event.target.value);
  }
  function handleClick() {
    console.log(id)
  }
  function handleMouseOver() {
    setColor("black");
  }
  function handleMouseOut() {
    setColor("grey");
  }
    return (
        <nav class="navbar navbar-expand-lg navbar navbar-dark bg-dark">
  <a class="navbar-brand" href="#">Samarthanam</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Explore</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">My Books</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">About Us</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Sponsors</a>
      </li>
      {/* <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
      {/* <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li> */}
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input   onChange={handleOnChange}
        type="text" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      {/* <button onClick={handleClick}         style={{ backgroundColor: background }, {color:"white"}} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}class="btn btn-outline-success my-2 my-sm-0" type="submit" >Search</button> */}
        <button onClick={handleClick}         style={{ backgroundColor: background }, {color:"white"}} 
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut} type="submit" class="btn btn-dark">Search</button>
    </form>
  </div>
</nav>
      )
    }
