import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light" data-bs-theme="primary">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="/">{props.aboutText}</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )}
Navbar.propTypes = 
{title : PropTypes.string.isRequired,
aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : 'set title',
    aboutText : 'About'
}