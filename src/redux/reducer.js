
const initalState = {
    filter: {
        search: '',
        status: 'All',
        priority: []
    },
    todoList: [
        { id: 1, name: 'Learn Yoga', compile: false, priority: 'Medium'},
        { id: 2, name: 'Learn Redux', compile: true, priority: 'High'},
        { id: 3, name: 'Learn Javascript', compile: false, priority: 'Low'}
    ]
}


const rootReducer = ( state = initalState, action) => {
    /*
        {
            type: 'todoList/addTodo',
            payload: { id: 5, name: 'Learn ReactJS', compile: false, priority: 'Low'}
        }
    */
    switch(action.type){
        case 'todoList/addTodo':
            return {
                ...state,
                todoList: [
                    ...state.todoList,
                    action.payload
                ]
            }
        default:
            return state
    }
}

export default rootReducer