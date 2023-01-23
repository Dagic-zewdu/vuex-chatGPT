import { todosGetters as getters } from './getters'
import { todosMutation as mutations } from './mutations'
import { fetchTodosAsync } from './actions'
const state = {
    loading: false,
    error: false,
    todos: [],
    todo: null
}
const actions = {
    fetchTodosAsync
}
export default { state, getters, actions, mutations }