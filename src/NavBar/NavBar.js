import React from 'react'
import './NavBar.scss'
//import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="nav-bar">
      <section className="nav-name">
        <h1>Peyton Jones</h1>
      </section>
      <section className="nav-btns">
        <button>About</button>
        <button>Contact</button>
      </section>
    </div>
  )
}

export default NavBar;