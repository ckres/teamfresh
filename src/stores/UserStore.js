import { action, observable, computed } from 'mobx'
import store from 'store'

const users = [
  {
    name: 'freshspire',
    password: 'pineapple'
  }
]

const FRESHSPIRE_USER = '__freshSpire_user'

class UserStore {
  @observable user = null
  @computed get hasLoggedIn() {
    return !!this.user
  }

  @action
  initUser() {
    this.user = store.get(FRESHSPIRE_USER) || this.user
  }

  @action
  register() {
    // pending on backend
  }

  @action
  logout() {
    this.removeUser()
    store.remove(FRESHSPIRE_USER)

    return new Promise((resolve, reject) => {
      // fake backend
      setTimeout(() => {
        resolve()
      }, 500)
    })
  }

  @action
  login(username, password) {
    // fake backend for now
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const user = users.find(u => u.name === username)
        if (user && user.password === password) {
          // cache
          this.setUser(user)

          // localStorage
          store.set(FRESHSPIRE_USER, user)

          // resolve
          resolve('success')
        } else if (!user) {
          reject('User doesn\'t exist.')
        } else {
          reject('Password is incorrect.')
        }
      }, 500)
    })
  }

  @action
  setUser(user) {
    this.user = user
  }

  @action
  removeUser() {
    this.user = null
  }
}

export default new UserStore()
