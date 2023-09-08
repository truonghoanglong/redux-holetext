
const initalState = {
        search: '',
        status: 'All',
        priorities: []
}


const filterReducer = ( state = initalState, action) => {
    /*
        {
            type: 'todoList/addTodo',
            payload: { id: 5, name: 'Learn ReactJS', compile: false, priority: 'Low'}
        }
    */
    switch(action.type){
        case 'fillters/searchFilterChange':
            return {
                ...state,
                search:action.payload
            }

        case 'fillters/statusFilterChange':
            return {
                ...state,
                status:action.payload
            }

        case 'fillters/prioritiesFilterChange':
            return {
                ...state,
                priorities:action.payload
            }

        default:
            return state
    }
}

export default filterReducer