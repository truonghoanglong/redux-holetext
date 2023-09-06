export const todoListSelector = (state) => {
    const todosRemanining = state.todoList.filter((todo)=>{
        return todo.name.includes(state.filter.search)
    })
    return  todosRemanining
   
}

export const searchTextSelector = (state) => state.filter.search