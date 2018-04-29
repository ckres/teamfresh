import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import Menu from './Menu'
import LoadingSpinner from './LoadingSpinner'

import './History.css'

@inject('historyStore')
@observer
export default class History extends Component {
	  state = {
			isLoadingHistory: true,
			history: null
		}
		  
	  componentDidMount() {
		  const { historyStore } = this.props

			historyStore.getHistory().then((history) => {
				this.setState({ 
					isLoadingHistory: false,
					history,
				})
			})
	  }
	  
	  getHistoryItems() {
	    const { history } = this.state
	    return history.map((history, i) => {
	      const { name, price, unit, delivery_date, total_cost, amount_purchased, thumbnail, purchase_date } = history
	      return (
	        <li
	          key={i}
	          className="basket-item"
	          style={{ backgroundImage: `url(${thumbnail})` }}
	        >
	          <div className="basket-item-container">
	            <div className="basket-description">
	            	<div className="information">
									<table className="table">
										<tbody>
											<tr>
												<td>
													<div className="basket-name">{name}</div>
													<div className="basket-price">
														{`$${price}/${unit}`}&nbsp;
													</div>
												</td>
												<td>	      
													<div className="purchase-date">Date of Purchase: {purchase_date}</div>
													<br />
													<div className="purchased"># Purchased: {amount_purchased}</div>
													<div className="basket-cost">
														Total: ${total_cost}
													</div>
													<div className="basket-delivery">Delivery Date: {delivery_date}</div>
												</td>
											</tr>
										</tbody>
									</table>
								</div>
	            </div>
	          </div>
	        </li>
	      )
	    })
	  }

  render() {
	  const { isLoadingHistory } = this.state
	    return (
	      <div className="baskets-container">
	        <Menu />
	        <br/>
	        <div className="header">
	        	<label>Order History</label>
        	</div>
	        {
						isLoadingHistory ?
							<LoadingSpinner />
							:
							<ul className="baskets-list">
								{this.getHistoryItems()}
							</ul>
	        }
	      </div>
	    )
	  }

}