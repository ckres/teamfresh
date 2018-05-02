import { action, observable } from 'mobx'

const mockedData = {
  history: [
	{
	  order_date: '3/25/2018',
	  order_num: '#112-7087890-0764499',
	  item1: 'Red Gala Apples',
	  amount1: 12,
	  cost1: 14.57,
	  item2: 'Ladyfinger Bananas',
	  amount2: 5,
	  cost2: 24.52,
	  item3: 'Carrot',
	  amount3: 3,
	  cost3: 2.43,
	  total: 41.51
	},
	{
	  order_date: '3/20/2018',
	  order_num: '#112-6987895-0324576',
	  item1: 'Red Gala Apples',
	  amount1: 15,
	  cost1: 10.57,
	  item2: 'Ladyfinger Bananas',
	  amount2: 11,
	  cost2: 30.40,
	  item3: 'Broccoli',
	  amount3: 10,
	  cost3: 8.44,
	  total: 49.41
	},
	{
	  order_date: '3/17/2018',
	  order_num: '#112-6987795-0286632',
	  item1: 'Red Gala Apples',
	  amount1: 15,
	  cost1: 10.57,
	  item2: 'Carrot',
	  amount2: 3,
	  cost2: 2.42,
	  item3: 'Broccoli',
	  amount3: 9,
	  cost3: 7.32,
	  total: 20.31
	}
  ]
}

class HistoryStore {
  @observable
  history = null

  @action
  getHistory() {
    return this.history ? Promise.resolve(this.history) : new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockedData.history)
        this.history = mockedData.history
      }, 1000)
    })
  }
}

export default new HistoryStore()
