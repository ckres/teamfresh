import React, { Component } from 'react'
import { SearchIcon, LocationIcon } from './Icons'
import DealStore from './stores/DealStore'

import './ViewDeals.css'
import logo from '../assets/logo.png'

import Popup from 'reactjs-popup'

export default class ViewDeals extends Component {
  state = {
    isLoadingDeals: true,
    deals: null
  }

  componentDidMount() {
    DealStore.getDeals().then((deals) => {
      this.setState({ deals })
    })
  }
  
  getDealItems() {
    const { deals } = this.state
    return deals.map((deal, i) => {
      const { name, price, price_before, unit, distance, distributor, thumbnail } = deal
      return (
        <li
          key={i}
          className="deal-item"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="deal-item-container">
            <div className="deal-distributor-avatar">
              <img src={`//logo.clearbit.com/${distributor}.com`} alt="distributor" />
            </div>
            <div className="deal-description">
              <div className="distance">
                <LocationIcon color="#cecece" />
                {distance} m
              </div>
              <div className="deal-name">{name}</div>
              <div className="deal-price">
                {`$${price}/${unit}`}&nbsp;<span className="deal-price_before">(was ${price_before})</span>
              </div>
              <div className="deal-more-details">
              <Popup trigger={<button className="button"> More Details </button>} modal>
                {close => (
                  <div>
                    <a className="close" onClick={close}>
                      &times;
                    </a>
                    <div className="header"> Deal Info </div>
                    <div className="content">
                      {" "}
                      <img class="popup-image" src={thumbnail} alt="Product"/>
                      <div><strong>Product Name/Type: </strong>{name}</div>
                      <br />
                      <div>
                        <strong>Distance to Distributor:</strong>  {distance} m
                      </div>
                      <br/>
                      <div>
                        <strong>Price per unit:</strong> ${price}
                      </div>
                      <br/>
                      
                      <div>
                        <strong>Quantity Required (in lbs):</strong>
                        <select id="quantity">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="65">65</option>
                        <option value="75">75</option>
                        </select>
                        
                      </div>
                      <br/>
                      <div>
                        <strong> Amount: </strong> ${price * 10}
                      </div>
                      <br/>
                      <div>
                        <strong>Deliver by:</strong><input type="date" name="deliverby"/>
                        <select id="time">
                        <option value="9">9 AM</option>
                        <option value="10">10 AM</option>
                        <option value="11">11 AM</option>
                        <option value="12">12 PM</option>
                        <option value="1">1 PM</option>
                        </select>
                      </div>
                      </div>
                    
                    <div className="btn-submit">
                      <input type="button" value="Add to Cart" onClick={this.checkout}/>
                    </div>
                  </div>
                  
              )}
            </Popup>
              </div>
            </div>
          </div>
        </li>
        
      )
    })
   }
  
   checkout = () => {
    //route to shopping cart
}

              
                    
  render() {
    const { deals } = this.state
    return (
      <div className="deals-container">
        <div className="top-logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="deals-search">
          <input type="text" />
          <SearchIcon color="gray" />
        </div>
        {
          deals &&
          <ul className="deals-list">
            {this.getDealItems()}
          </ul>
        }
      </div>
    )
  }
}