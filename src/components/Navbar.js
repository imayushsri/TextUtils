import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import {Link} from 'react-router-dom';
export default function Navbar(props) {
  const [visible, invisible] = useState(true);
  const handleStartClick = () =>{
    invisible(false);
  } 
  return (
    <nav className={`width- navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <Link to="/">{visible && (
                <button className="btn btn-primary mx-3 start" onClick={handleStartClick}>
                  Click To Start App
                </button>
              )}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
       
      </ul>

      <div className={`form-check form-switch me-3 text-${props.mode === 'light'? 'dark' : 'light'}`}>
          <input className= "form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.name}</label>
       </div>
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
