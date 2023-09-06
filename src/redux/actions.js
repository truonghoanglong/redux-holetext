
export const addTodo = (data) => {
    return {
        type:'todoList/addTodo',
        payload: data
    }
}


export const searchFilterChange = (text) => {
    return {
        type:'fillter/searchFilterChange',
        payload: text
    }
}