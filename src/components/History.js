
import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { SearchIcon, LocationIcon } from './Icons'
import './History.css'

import logo from '../assets/logo.png'
import logoTitle from '../assets/FreshSpire-Brandmark_Combination-Green.png';

@inject('historyStore')
@observer
export default class History extends Component {

	  state = {
			  isLoadingHistory: true,
			    history: null
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
		  const { historyStore } = this.props

		    historyStore.getHistory().then((history) => {
		      this.setState({ history })
		    })
	  }
	  
	  getHistoryItems() {
	    const { history } = this.state
	    return history.map((history, i) => {
	      const { name, price, price_before, unit, distance, delivery_date, total_cost, amount_purchased, distributor, thumbnail, purchase_date } = history
	      return (
	        <li
	          key={i}
	          className="deal-item"
	          style={{ backgroundImage: `url(${thumbnail})` }}
	        >
	          <div className="deal-item-container">
	            <div className="deal-description">
	            
	            	<div className="information">
	            	<table className="table">
	            		<tr>
	            			<td>
			                    <div className="deal-name">{name}</div>
			                    <div className="deal-price">
			                    	{`$${price}/${unit}`}&nbsp;
			                    </div>
			                </td>
	            			<td>	      
	            				<div className="purchase-date">Date of Purchase: {purchase_date}</div>
		            			<br />
	            				<div className="purchased"># Purchased: {amount_purchased}</div>
				                <div className="deal-cost">
				                	Total: ${total_cost}
				                </div>
				                <div className="deal-delivery">Delivery Date: {delivery_date}</div>
	            			</td>
	            		</tr>
	            	</table>
	                </div>
	            </div>
	          </div>
	        </li>
	      )
	    })
	  }

  render() {
	  const { history } = this.state
	    return (
	    
	      <div className="deals-container">
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
    		<input type="button" value="Order History"/>
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
	        <br/><br/>
	        <div className="header">
	        	<label>Order History</label>
        	</div>
	        	
	        {
	          history &&
	          <ul className="deals-list">
	            {this.getHistoryItems()}
	          </ul>
	        }
	      </div>
	    )
	  }

}