import { v4 } from 'uuid'
import { type ActionContext } from 'vuex'
import { type State } from './index'

export default {
  addTodo({ commit }: ActionContext<State, State>, text: string) {
    commit('addTodo', {
      text,
      done: false,
      id: v4(),
    })
  },

  updateTodos({ commit }: ActionContext<State, State>, todos: Todo[]) {
    commit('updateTodos', todos)
  },

  removeTodo({ commit }: ActionContext<State, State>, todo: Todo) {
    commit('removeTodo', todo)
  },

  toggleTodo({ commit }: ActionContext<State, State>, todo: Todo) {
    commit('editTodo', { ...todo, done: !todo.done })
  },

  toggleAll({ state, commit }: ActionContext<State, State>, done: Todo) {
    state.todos.forEach((todo) => {
      commit('editTodo', { todo, done })
    })
  },
}
