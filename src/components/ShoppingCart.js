import React, { Component, Fragment} from 'react'
import { observer, inject } from 'mobx-react'
import { SearchIcon, LocationIcon } from './Icons'

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
			this.setState({ deals })
		})
  }
  
  getDealItems() {
    const { deals } = this.state
    return deals.map((deal, i) => {
      const { name, price, price_before, unit, distance, delivery_date, total_cost, amount_purchased, distributor, thumbnail } = deal
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
								<tbody>
									<tr>
										<td>
											<div className="distance">
													<LocationIcon color="#cecece" />
														{distance} m
												</div>
													<div className="deal-name">{name}</div>
													<div className="deal-price">
														{`$${price}/${unit}`}&nbsp;<span className="deal-price_before"><br />(was ${price_before})</span>
													</div>
											</td>
										<td>	      
											<div className="purchased"># Purchased: {amount_purchased}</div>
												<div className="deal-cost">
													Total: ${total_cost}
												</div>
												<div className="deal-delivery">Delivery Date: {delivery_date}</div>
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
    const { deals } = this.state
    return (
			<Fragment>
				<Menu />
				<div className="shopping-cart-container">
					{
						deals &&
						<Fragment>
							<ul className="deals-list">
								{this.getDealItems()}
							</ul>
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