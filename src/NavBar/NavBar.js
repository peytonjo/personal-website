import React, {Component} from 'react'
import './NavBar.scss'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <Router>
      <div className="nav-bar">
        <section className="nav-name">
          <h1>PEYTON JONES</h1>
        </section>
        <section className="nav-btns">
          <Link to="/about">
            <button type="btn" >
                  About
            </button>
          </Link>
          <Link to="/contact">
            <button type="btn">
                  Contact
            </button>
          </Link>
          <Link to="/">
            <button type="btn">
                  Home
            </button>
          </Link>
        </section>
      </div>
    </Router>
  )
}

export default NavBar;