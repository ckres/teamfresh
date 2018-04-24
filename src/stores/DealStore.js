import { action, observable, computed } from 'mobx'

const mockedData = {
  deals: [
    {
      name: 'Red Gala Apples',
      thumbnail: 'data:image/jpeg;base64,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',
      price: 2.33,
      price_before: 5.98,
      unit: 'bag',
      distance: 1.9,
      delivery_date: '3/20/2018',
      total_cost: 14.57,
      amount_purchased: 12,
      distributor: 'wholefoodsmarket'
    },
    {
      name: 'Ladyfinger Bananas',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTm67fk7BDdXE3oYHF_LbQ2UH0HHiuSwc6qev6Aj756wHi1Yes',
      price: 4.20,
      price_before: 8.90,
      unit: 'bag',
      distance: 2.4,
      delivery_date: '3/20/2018',
      total_cost: 24.57,
      amount_purchased: 5,
      distributor: 'mytraderjoeslist'
    },
    {
      name: 'Brocoli',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVMxizq9vS4Zj5zOcUZ4ROcTrd84boGBDggq3pD64IbLkj8hI',
      price: 3.20,
      price_before: 4.90,
      unit: 'bag',
      distance: 5.4,
      delivery_date: '3/20/2018',
      total_cost: 8.57,
      amount_purchased: 10,
      distributor: 'wholefoodsmarket'
    },
    {
      name: 'Carrot',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJbelelmoqJjeDGjWirTujzU6oxH9fuf2KPp7_rhTTQOoO2MZR5Q',
      price: 2.19,
      price_before: 2.99,
      unit: 'bag',
      distance: 0.8,
      delivery_date: '3/20/2018',
      total_cost: 9.68,
      amount_purchased: 10,
      distributor: 'foodlion'
    }
  ]
}

class DealStore {
  @observable
  deals = null

  @action
  getDeals() {
    return this.deals ? Promise.resolve(this.deals) : new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(mockedData.deals)
        this.deals = mockedData.deals
      }, 1000)
    })
  }
}

export default new DealStore()