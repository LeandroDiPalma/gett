
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import TodoItem from './TodoItem';
import { Button } from '@mui/material';
import './index.scss'
import { SET_TODOS } from '../../common/constants';
import { addTodo } from '../../actions';
import TodoModal from './TodoModal';

const Todo = () => {
    const dispatch = useDispatch();

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    const todos = useSelector(state => state.todos);
    const [open, setOpen] = useState(false);
    const totalItems = todos.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    const displayedTodos = todos.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const goToNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(prev => prev - 1);
        }
    };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveTask = (task) => {
        dispatch(addTodo(task));
    };


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/todos')
            .then((response) => {
                dispatch({ type: SET_TODOS, payload: response.data });
            });
    }, [dispatch]);

    return (
        <>
            <Button onClick={handleOpen}  variant='outlined'>Add Task</Button>
            <TodoModal open={open} handleClose={handleClose} saveTask={saveTask} />
            <div className='todo-container'>
            {displayedTodos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
            </div>

            <div className='button-container'>
                <Button onClick={goToPreviousPage} variant='outlined' disabled={currentPage === 1}>Anterior</Button>
                <Button onClick={goToNextPage} variant='outlined' disabled={currentPage === totalPages}>Siguiente</Button>
            </div>
        </>
    );
}

export default Todo;