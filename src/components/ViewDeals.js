import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { SearchIcon, LocationIcon } from './Icons'
import DealStore from './stores/DealStore'

import './ViewDeals.css'
import logo from '../assets/logo.png'

ReactModal.setAppElement('#root')

export default class ViewDeals extends Component {
  state = {
    isLoadingDeals: true,
    deals: null,
    isModalOpen: false,
    modalDeal: null,
    dealSearchQuery: '',
  }

  componentDidMount() {
    DealStore.getDeals().then((deals) => {
      this.setState({ deals })
    })
  }
  
  handleOpenModal = () => {
    this.setState({ isModalOpen: true });
  }
  
  handleCloseModal = () => {
    this.setState({ isModalOpen: false });
  }

  showDealPopup = (modalDeal) => {
    this.setState({ 
      isModalOpen: true,
      modalDeal
    })
  }

  onDealSearchQueryChange = (e) => {
    this.setState({
      dealSearchQuery: e.target.value
    })
  }

  renderDealModal = () => {
    if (!this.state.modalDeal) return

    const { 
      name,
      price,
      price_before,
      unit,
      distance,
      distributor,
    } = this.state.modalDeal

    return (
      <div className="deal-modal-container">
        <div className="deal-name">Name: {name}</div>
        <div className="deal-distributor">distributor: {distributor}</div>
        <div className="deal-price">Price: ${price}/${unit}</div>
        <div className="deal-price-before">Price Before: ${price_before}/${unit}</div>
        <div className="deal-distance">Distance: {distance} miles</div>
        <br />
        <div className="deal-description">Description: {DealStore.getMeaninglessDescription()}</div>
      </div>
    )
  }

  getDealItems() {
    const { deals, dealSearchQuery } = this.state
    const filteredDeals = deals.filter((deal) => {
      const { name } = deal
      return name.toLowerCase().includes(dealSearchQuery.toLowerCase())
    })

    if (filteredDeals.length === 0) {
      return (
        <li className="no-deals">
          Sorry, there is no deal that contains the name you've searched...
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
          onClick={() => this.showDealPopup(deal)}
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
    const { deals, isModalOpen, modalDeal } = this.state
    return (
      <div className="deals-container">
        <div className="top-logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="deals-search">
          <input 
            type="text"
            onChange={this.onDealSearchQueryChange}
          />
          <SearchIcon color="gray" />
        </div>
        <ReactModal
          isOpen={isModalOpen}
          style={{ overlay: {}, content: {
            outline: 'none',
            border: '1px solid gray',
            borderRadius: '0.3rem',
            lineHeight: '1.5rem'
          } }}
          shouldCloseOnEsc={true}
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.handleCloseModal}
          closeTimeoutMS={150}
        >
          { this.renderDealModal() }
        </ReactModal>
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