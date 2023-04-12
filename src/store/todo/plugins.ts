import { type Store, createLogger } from 'vuex'
import { STORAGE_KEY, type State } from './index'

function localStoragePlugin(store: Store<State>) {
  store.subscribe(
    (_, { todos }) => {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    })
}

export default process.env.NODE_ENV !== 'production'
  ? [createLogger(), localStoragePlugin]
  : [localStoragePlugin]
