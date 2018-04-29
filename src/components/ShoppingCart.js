import React, { Component, Fragment} from 'react'
import { observer, inject } from 'mobx-react'
import { LocationIcon } from './Icons'
import LoadingSpinner from './LoadingSpinner'

import './ShoppingCart.css'
import Menu from './Menu';

@inject('dealStore')
@observer
export default class ShoppingCart extends Component {
  state = {
    isLoadingDeals: true,
    deals: null
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
  
  getDealItems() {
    const { deals } = this.state
    return deals.map((deal, i) => {
      const { name, price, price_before, unit, distance, delivery_date, delivery_time, total_cost, amount_purchased, thumbnail } = deal
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
									<tbody>
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
									</tbody>
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
    const { isLoadingDeals } = this.state
    return (

			<Fragment>
				<Menu />
				<div className="baskets-container">
				<br />
          <div className="basket-header">
    	      <label>Grocery Basket</label>
	        </div>
					{
						isLoadingDeals ?
							<LoadingSpinner />
							:
							<Fragment>
								<ul className="baskets-list">
									{this.getDealItems()}
								</ul>
								<div className="basket-total-purchase">Total Purchase Cost: $57.39</div>
								<div className="btn-submit">
									<input type="button" value="Purchase"/>
								</div>
							</Fragment>
					}
				</div>
			</Fragment>

    )
  }
}