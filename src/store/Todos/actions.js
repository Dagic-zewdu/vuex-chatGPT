import axios from 'axios'

export const fetchTodosAsync = async ({ commit }) => {
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
        commit("addTodos", res.data)
    }
    catch (err) {
        console.log(err.message)
        commit("setError", err?.message)
    }
}