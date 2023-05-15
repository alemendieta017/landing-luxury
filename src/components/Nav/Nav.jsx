import React from 'react'
import './Nav.scss'
import remaxLogo from '../../assets/remax_luxury_logo.png'

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="#!">
          <img className="logo" src={remaxLogo} alt="RE/MAX" />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#!">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#!">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
