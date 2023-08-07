import { ADD_TODO, DELETE_TODO, EDIT_TODO, SET_TODOS } from "../common/constants";

const initialState = {
    todos: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state,
                todos: action.payload,
            };
        case EDIT_TODO:
            {
                const todosUploaded = state.todos.map(todo =>
                    todo.id === action.payload.id ? action.payload : todo
                );
                return {
                    ...state,
                    todos: todosUploaded,
                };
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, { ...action.payload, id: state.todos.length + 1 }]
            };
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== action.payload),
            };
        default:
            return state;
    }
};

export default rootReducer;
