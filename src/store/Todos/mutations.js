export const todosMutation = {
    addTodos: (state, todos) => {
        state.todos = todos
        state.loading = false
        state.error = false
    },
    todosLoading: (state) => { state.loading = true },
    setError: (state, payload) => {
        state.loading = false
        state.error = payload
    },
    addTodo: (state, todo) => {
        state.todo = todo
    }
}