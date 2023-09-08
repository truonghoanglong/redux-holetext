import { combineReducers } from 'redux'

import filterReducer from "../components/Filters/FiltersSlice"
import todoslistReduce from "../components/TodoList/TodosSlice"


// const rootReducer = ( state = {} , action) => {
//     return {
//         filters: filterReducer(state.filters , action),
//         todoList: todoslistReduce(state.todoList , action)
//     }
// }


const rootReducer = combineReducers({
    filters: filterReducer,
    todoList: todoslistReduce
})

export default rootReducer