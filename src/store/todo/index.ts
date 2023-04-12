import type { InjectionKey } from 'vue'
import { type Store, createStore } from 'vuex'
import actions from './actios'
import mutations from './mutations'
import plugins from './plugins'

export const STORAGE_KEY = 'todo-items'

export interface State {
  todos: Todo[]
}

export const key: InjectionKey<Store<State>> = Symbol('store-state')

export default createStore<State>({
  state: {
    todos: JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]'),
  },
  actions,
  mutations,
  plugins,
})
