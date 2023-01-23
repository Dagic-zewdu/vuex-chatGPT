import { createStore } from "vuex"
import todos from "./Todos"
const store = createStore({
    modules: {
        todos
    }
})

export default store;