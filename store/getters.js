const getters = {
  doneTodos: state => state.todos.filter(todo => todo.done),
  gapp: state => state.app.device
}
export default getters
