const mockedData = {
  deals: [
    {
      name: 'Red Gala Apples',
      thumbnail: '',
      price: 2.33,
      price_before: 5.98,
      unit: 'bag',
      distance: 1.9,
      distributor: 'wholefoodsmarket'
    },
    {
      name: 'Ladyfinger Bananas',
      price: 4.20,
      price_before: 8.90,
      unit: 'bag',
      distance: 2.4,
      distributor: 'mytraderjoeslist'
    },
    {
      name: 'Brocoli',
      price: 3.20,
      price_before: 4.90,
      unit: 'bag',
      distance: 5.4,
      distributor: 'wholefoodsmarket'
    },
    {
      name: 'Carrot',
      price: 2.19,
      price_before: 2.99,
      unit: 'bag',
      distance: 0.8,
      distributor: 'foodlion'
    }
  ]
}

class DealStore {
  getDeals() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockedData.deals)
      }, 1000)
    })
  }
}
