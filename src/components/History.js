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
	      const { order_date, order_num, item1, amount1, cost1, item2, amount2, cost2, item3, amount3, cost3, total } = history
	      return (
	        <li
	          key={i}
	          className="history-item"
	        >
	          <div className="history-item-container">
	            <div className="history-description">
						<table className="table-history">
							<tbody>
								<th>
								    <td>
										<div className="history-name"><h3>Order Placed on {order_date}</h3></div>
									</td>
									<td>
										<div className="history-name"><h3>TOTAL {total}</h3></div>
									</td>
									<hr />
								</th>
								<tr> 
									<div className="history-name">• {item1}</div>
									<div className="history-text">Amount Purchased: {amount1}</div>
									<div className="history-text">Total Cost for Item: {cost1}</div>
									<div className="history-name">• {item2}</div>
									<div className="history-text">Amount Purchased: {amount2}</div>
									<div className="history-text">Total Cost for Item: {cost2}</div>
									<div className="history-name">• {item3}</div>
									<div className="history-text">Amount Purchased: {amount3}</div>
									<div className="history-text">Total Cost for Item: {cost3}</div>
									<div className="ordernum">ORDER {order_num}</div>
								</tr>
							</tbody>
						</table>
	            </div>
	          </div>
	        </li>
	      )
	    })
	  }

  render() {
	  const { isLoadingHistory } = this.state
	    return (
	      <div className="historys-container">
	        <Menu />
	        <br/>
	        <div className="header">
	        	<label>Order History</label>
        	</div>
	        {
				isLoadingHistory ?
					<LoadingSpinner />
					:
					<ul className="historys-list">
						{this.getHistoryItems()}
					</ul>
	        }
	      </div>
	    )
	  }

}