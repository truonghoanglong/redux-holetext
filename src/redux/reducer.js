import { combineReducers } from 'redux'

import filterReducer from "../components/Filters/filtersSlice"
import todoslistReduce from "../components/TodoList/todosSlice"


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