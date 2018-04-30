import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import Popup from 'reactjs-popup'
import { SearchIcon, LocationIcon } from './Icons'
import Menu from './Menu'
import LoadingSpinner from './LoadingSpinner'

import './ViewDeals.css'


@inject('dealStore')
@observer
class ViewDeals extends Component {
  state = {
    isLoadingDeals: true,
    deals: null,
    dealSearchQuery: '',
    searchQueryType: 'name',
  }

  componentDidMount() {
    const { dealStore } = this.props

    dealStore.getDeals().then((deals) => {
      this.setState({
        isLoadingDeals: false,
        deals,
      })
    })
  }

  searchIfPressEnter = (e) => {
    if (e.key === 'Enter') {
      this.onDealSearchQueryChange()
    }
  }

  onDealSearchQueryChange = () => {
    this.setState({
      dealSearchQuery: this.searchQuery.value
    })
  }

  onChangeSearchQueryType = (e) => {
    this.setState({
      searchQueryType: e.target.value
    })
  }
  
  getDealItems() {
    const { deals, dealSearchQuery, searchQueryType } = this.state
    let filteredDeals

    // use regex instead
    if (dealSearchQuery.includes('<') || dealSearchQuery.includes('>')) {
      const isLessThan = !!dealSearchQuery.includes('<')
      const isPrice = searchQueryType === 'price' ? true : false
      filteredDeals = deals.filter((deal) => {
        const { price, distance } = deal
        return isLessThan
          ? ((isPrice ? price : distance) < parseFloat(dealSearchQuery.replace(/<|>/g, '')))
          : ((isPrice ? price : distance) > parseFloat(dealSearchQuery.replace(/<|>/g, '')))
      })
    } else {
      filteredDeals = deals.filter((deal) => {
        const { name, location } = deal
  
        return (searchQueryType === 'name' ? name : location).toLowerCase().includes(dealSearchQuery.toLowerCase())
      })
    }


    if (filteredDeals.length === 0) {
      return (
        <li className="no-deals">
          Sorry, there is no deal that satisfies what you've searched...
        </li>
      )
    }

    return filteredDeals.map((deal, i) => {
      const { name, price, price_before, unit, distance, thumbnail } = deal
      return (
        <li
          key={i}
          className="deal-item"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="deal-item-container">
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
              <Popup 
                trigger={<button className="more-details-btn"> More details </button>}
                style={{
                  width: '75%',
                  borderRadius: '5px',
                }}
                modal
              >
                {close => (
                  <div className="popup">
                    <a className="close" onClick={close}>
                      &times;
                    </a>
                    <div className="header"> Deal Info </div>
                    <div className="content">
                      {" "}
                      <img className="popup-image" src={thumbnail} alt="Product"/>
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
                      <input 
                        type="button"
                        value="Add to Cart"
                        onClick={this.checkout}
                      />
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
    const { history } = this.props
    history.push('/shoppingcart')
  }

              
                    
  render() {
    const { isLoadingDeals } = this.state

    return (
      <div className="deals-container">
        <Menu />
        <div className="deals-search">
          <select 
            className="query-type-select"
            onChange={this.onChangeSearchQueryType}
          >
            <option value="name">Name</option>
            <option value="location">Location</option>
            <option value="price">Price</option>
            <option value="distance">Distance</option>
          </select>
          <input
            type="text"
            ref={(searchQuery) => this.searchQuery = searchQuery}
            onKeyPress={this.searchIfPressEnter}
          />
          <span onClick={this.onDealSearchQueryChange}>
            <SearchIcon color="gray" />
          </span>
        </div>
        {
          isLoadingDeals ?
            <LoadingSpinner />
            :
            <ul className="deals-list">
              {this.getDealItems()}
            </ul>
        }
      </div>
    )
  }
}

export default withRouter(ViewDeals)
