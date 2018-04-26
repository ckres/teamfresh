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
    searchQueryType: 'name',
  }

  componentDidMount() {
    const { dealStore } = this.props

    dealStore.getDeals().then((deals) => {
      this.setState({ deals })
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
          deals &&
          <ul className="deals-list">
            {this.getDealItems()}
          </ul>
        }
      </div>
    )
  }
}