import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

import './Menu.css'

export default class Menu extends Component {
  state = {
    isMenuOpen: false,
  }

  onToggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen,
    }))
  }

  render() {
    const { isMenuOpen } = this.state
    return (
      <div className="menu-container">
        <div 
          className="top-logo"
          onClick={this.onToggleMenu} 
        >
          <img src={logo} alt="logo" />
        </div>
        <ul className={`dropdown-menu ${isMenuOpen ? 'open' : ''}`}>
          <li className="menu-item">
            <Link to="/profile">
              Profile
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/deals">
              Deals
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/shoppingcart">
              Grocery Basket
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/history">
              Order History
            </Link>
          </li>
          <li className="menu-item">
            <Link to="/login">
              Logout
            </Link>
          </li>
        </ul>
      </div>
    )
  }
}
