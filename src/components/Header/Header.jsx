import React from 'react'
import './Header.scss'
import Nav from '../Nav/Nav'

const Header = () => {
  const HEADER_IMG_URL =
    'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
  const REMAX_LOGO_URL =
    'https://www.remax.com.py/Common/images/2019/remax_balloon.png'
  return (
    <header
      className="min-vh-100 bg-image-full d-flex align-items-center"
      style={{
        backgroundImage: 'url( ' + HEADER_IMG_URL + ' )',
      }}
    >
      <Nav />
      {/* <!-- Header - set the background image for the header in style.backgroundImg--> */}
      <div className="container pt-5">
        <img
          className="logo img-fluid rounded-circle mb-4"
          src={REMAX_LOGO_URL}
          alt="..."
        />
        <h1 className="text-white display-1">
          Conviértete en Agente Inmobiliario
        </h1>
        <p className="lead text-white mb-0">
          Forma parte del equipo de RE/MAX Luxury Paraguay!
        </p>
        <a className="btn btn-lightBlue my-4" href="#form-section">
          Inscribirme
        </a>
      </div>
    </header>
  )
}

export default Header
