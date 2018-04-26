import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { SearchIcon, LocationIcon } from './Icons'

import './ShoppingCart.css'
import logo from '../assets/logo.png'


@inject('dealStore')
@observer
export default class ShoppingCArt extends Component {
  state = {
    isLoadingDeals: true,
    deals: null
  }

  constructor(props){
	    super(props);

	    this.state = {
	      show: false
	    }
	    this.doSomething = this.doSomething.bind(this);
	    this.toggleShow = this.toggleShow.bind(this);
	    this.hide = this.hide.bind(this);
	  }

	  doSomething(e){
	    e.preventDefault();
	    console.log(e.target.innerHTML);
	  }

	  toggleShow(){
	    this.setState({show: !this.state.show});
	  }

	  hide(e){
	    if(e && e.relatedTarget){
	      e.relatedTarget.click();
	    }
	    this.setState({show: false});
	  }
	  
  componentDidMount() {
	  const { dealStore } = this.props

	    dealStore.getDeals().then((deals) => {
	      this.setState({ deals })
	    })
  }
  
  getDealItems() {
    const { deals } = this.state
    return deals.map((deal, i) => {
      const { name, price, price_before, unit, distance, delivery_date, delivery_time, total_cost, amount_purchased, distributor, thumbnail } = deal
      return (
        <li
          key={i}
          className="basket-item"
          style={{ backgroundImage: `url(${thumbnail})` }}
        >
          <div className="basket-item-container">
            <div className="basket-description">
            
            	<div className="information">
            	<table>
            		<tr>
            			<td>
	            			<div className="distance">
		                		<LocationIcon color="#cecece" />
		                			{distance} m
		                	</div>
		                    <div className="basket-name">{name}</div>
		                    <div className="basket-price">
		                    	{`$${price}/${unit}`}&nbsp;<span className="deal-price_before"><br />(was ${price_before})</span>
		                    </div>
		                </td>
            			<td>	      
	            			<div className="purchased"># Purchased: {amount_purchased}</div>
			                <div className="basket-cost">Total: ${total_cost}</div>
			                <div className="basket-delivery">Arrival: {delivery_date} {delivery_time}</div>
            			</td>
            		</tr>
            	</table>
                </div>
            </div>
            <div className="btn-basic">
		      <input type="button" value="Delete"/>
	        </div>
          </div>
        </li>
      )
    })
  }

  render() {
    const { deals } = this.state
    return (
      <div className="baskets-container">
        <div className="top-logo" style={{zIndex:999}} >
        	<button className="btn-primary" type="button" onClick={this.toggleShow} onBlur={this.hide}>
        	<img src={logo} alt="logo" style={{zIndex:999}} />
        		<span className="caret"></span>
        	</button>       	
        <div className="dropdown-menu" >
        {
        	this.state.show &&
      (
        <ul className="dropdown-menu" style={{display: 'block'}}>
        <li><div className="btn-submit" style={{zIndex:200}}>
        	<input type="button" value="Profile"/>
        </div></li>
        <li><div className="btn-submit" style={{zIndex:200}}>
    		<input type="button" value="View Deals"/>
    	</div></li>
        <li><div className="btn-submit" style={{zIndex:200}}>
    		<input type="button" value="Shopping Cart"/>
    	</div></li>
    	<li><div className="btn-submit" style={{zIndex:200}}>
    		<input type="button" value="Log Out"/>
    	</div></li>
    	<div className="background-circle" style={{zIndex:10}} ></div>
        </ul>
      )
      }
        </div>
        </div>
        <br />
        <div className="basket-header">
    	  <label>Grocery Basket</label>
	    </div>
        {
          deals &&
          <ul className="baskets-list">
            {this.getDealItems()}
          </ul>
        }
        <div className="basket-total-purchase">Total Purchase Cost: $57.39</div>
        <div className="btn-submit">
	      <input type="button" value="Purchase"/>
        </div>
      </div>
    )
  }
}