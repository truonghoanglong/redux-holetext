
const initalState =  [
        { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium'},
        { id: 2, name: 'Learn Redux', completed: true, priority: 'High'},
        { id: 3, name: 'Learn Javascript', completed: false, priority: 'Low'}
    ]


const todoslistReduce = ( state = initalState, action) => {
    /*
        {
            type: 'todoList/addTodo',
            payload: { id: 5, name: 'Learn ReactJS', compile: false, priority: 'Low'}
        }
    */
    switch(action.type){
        case 'todoList/addTodo':
            return  [...state ,action.payload]
        
        case 'todoList/toggleTodoStatus':
            return  state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo )

        default:
            return state
    }
}

export default todoslistReduce