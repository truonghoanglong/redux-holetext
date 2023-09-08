import { createSelector } from "reselect"


export const searchTextSelector = (state) => state.filters.search
export const StatusFilterSelector = (state) => state.filters.status
export const todoListSelector = (state) => state.todoList
export const StatusPrioritiesSelector = (state) => state.filters.priority

export const filterPrioritiesSelector = (state) => state.filters.priorities




// export const todoListSelector = (state) => {

//     const searchText = searchTextSelector(state)

//     const todosRemanining = state.todoList.filter((todo)=>{
//         return todo.name.includes(state.filter.search)
//     })
//     return  todosRemanining
// }

export const todosRemaniningSelector = createSelector(
    todoListSelector,
    StatusFilterSelector,
    searchTextSelector,
    filterPrioritiesSelector,
    (todoList,status, searchText,priorities) => {
        return todoList.filter((todo) => {
            if ( status === 'All') {
                return priorities.length
                ? todo.name.includes(searchText) && priorities.includes(todo.priority)
                : todo.name.includes(searchText) ;
                
            } 
            return todo.name.includes(searchText) && 
            ( status ==='Completed' ? todo.completed :  !todo.completed ) 
            && (priorities.length ? priorities.includes(todo.priority) : true )
        })
    }
)
