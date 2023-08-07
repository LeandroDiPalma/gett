import { ADD_TODO, DELETE_TODO, EDIT_TODO } from "../common/constants";

export const editTodo = (todo) => ({
    type: EDIT_TODO,
    payload: todo
});


export const addTodo = task => ({
    type: ADD_TODO,
    payload: task
});


export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    payload: id,
});
