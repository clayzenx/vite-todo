import { type State } from './index'

export default {
  addTodo(state: State, todo: Todo) {
    state.todos.push(todo)
  },

  updateTodos(state: State, todos: Todo[]) {
    state.todos.splice(0, state.todos.length, ...todos)
  },

  removeTodo(state: State, todo: Todo) {
    state.todos.splice(state.todos.indexOf(todo), 1)
  },

  editTodo(state: State, todo: Todo) {
    const index = state.todos.findIndex(({ id }) => id === todo.id)

    state.todos.splice(index, 1, todo)
  },
}
