
export const addTodo = (data) => {
    return {
        type:'todoList/addTodo',
        payload: data
    }
}

export const toggleTodoStatus = (todoID) => {
    return {
        type:'todoList/toggleTodoStatus',
        payload: todoID
    }
}

export const searchFilterChange = (text) => {
    return {
        type:'fillters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type:'fillters/statusFilterChange',
        payload: status
    }
}

export const priorityFilterChange = (priority) => {
    return {
        type:'fillters/prioritiesFilterChange',
        payload: priority
    }
}