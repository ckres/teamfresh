import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { SearchIcon, LocationIcon } from './Icons'
import Menu from './Menu'

import './ViewDeals.css'

@inject('dealStore')
@observer
export default class ViewDeals extends Component {
  state = {
    isLoadingDeals: true,
    deals: null,
    dealSearchQuery: '',
  }

  componentDidMount() {
    const { dealStore } = this.props

    dealStore.getDeals().then((deals) => {
      this.setState({ deals })
    })
  }

  onDealSearchQueryChange = (e) => {
    this.setState({
      dealSearchQuery: e.target.value
    })
  }
  
  getDealItems() {
    const { deals, dealSearchQuery } = this.state
    let filteredDeals

    // use regex instead
    if (dealSearchQuery.includes('<') || dealSearchQuery.includes('>')) {
      const isLessThan = !!dealSearchQuery.includes('<')
      filteredDeals = deals.filter((deal) => {
        const { price } = deal
        return isLessThan
          ? price < parseFloat(dealSearchQuery.replace(/<|>/g, ''))
          : price > parseFloat(dealSearchQuery.replace(/<|>/g, ''))
      })
    } else {
      filteredDeals = deals.filter((deal) => {
        const { name } = deal
  
        return name.toLowerCase().includes(dealSearchQuery.toLowerCase())
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
      const { name, price, price_before, unit, distance, distributor, thumbnail } = deal
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
            </div>
          </div>
        </li>
      )
    })
  }

  render() {
    const { deals } = this.state
    return (
      <div className="deals-container">
        <Menu />
        <div className="deals-search">
          <input
            type="text"
            onChange={this.onDealSearchQueryChange}
          />
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