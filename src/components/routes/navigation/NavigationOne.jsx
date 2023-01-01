import React from "react"
import "../../styles/navigation/navOne.styles.scss"

export default function NavigationOne() {
  return (
    <div className="nav-one-container">
      <img src="#" alt="Logo" className="logo" />
      <nav>
        <ul className="nav-links">
          <li className="nav-link-item">
            <span>Home</span>
          </li>
          <li className="nav-link-item">
            <span>Pricing</span>
          </li>
          <li className="nav-link-item">
            <span>About us</span>
          </li>
          <li className="nav-link-item">
            <span>Contact us</span>
          </li>
        </ul>
      </nav>
      <div className="cta" href="/">
        <div className="login-cont">
          <button className="login-button">Log in</button>
        </div>
        <div className="sign-up-cont">
          <button className="sign-up-button">Sign up</button>
        </div>
      </div>
    </div>
  )
}
