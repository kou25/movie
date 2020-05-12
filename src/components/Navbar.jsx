import React from 'react'

export default function Navbar() {
    return (
        <div>
        <nav className="navbar  navbar-light  bg-dark mb-5">
        <div className="container">
          <div className="navbar-header">
            <a className="navbar-brand text-white text-lg brand-text" href="/">
              <span style={{color:"yellow"}}>Movies</span> Info
            </a>
          </div>
          <ul className="navbar-nav ml-auto text-light d-inline-block">
            <li className="nav-item d-inline-block mr-4">
              <i className="fab fa-imdb fa-3x" id="imdb-logo" />
            </li>
            <li className="nav-item d-inline-block mr-4">
              <i className="fas fa-user fa-3x" id="user-logo" />
            </li>
          </ul>
        </div>
      </nav>
        </div>
    )
}
