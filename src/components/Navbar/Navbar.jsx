import React from 'react'
import'./navbar.scss'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <div className="navbar">
        <div className="container">
          <div className="logo">
            {/* <Link to="/"> */}
            <span className="text">PakFreelance</span>
            {/* </Link> */}
            <span className="dot">.</span>
            </div>
            <div className="links">
              <span>Business</span>
              <span>Explore</span>
              <span>English</span>
              <span>Sign in</span>
              <span>Become a Seller</span>
              <button>Join</button>
              </div>
        </div>
        <hr />
        <div className="container">

        <div className="menu">
          <span>jfj</span>
          <span>fj</span>
        </div>
        </div>
      </div>
    </div>
  )
}
