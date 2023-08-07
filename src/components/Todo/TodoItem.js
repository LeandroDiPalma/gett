import React, { useState } from 'react';
import { Button, Card, CardContent, Typography } from '@mui/material';
import TodoModal from './TodoModal';
import { deleteTodo, editTodo } from '../../actions';
import { useDispatch } from 'react-redux';
import './todoItem.scss'
const TodoItem = ({ todo }) => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
    };

    const handleClose = () => {
        setOpen(false);
    };

    const saveTask = (task) => {
        dispatch(editTodo(task));
    };

    return (
        <Card>
            <CardContent className='card-content'>
                <Typography variant="h6" className='typography-title'>{todo.title}</Typography>
                <Typography variant="subtitle1">
                    {todo.completed ? 'Completed' : 'Not Completed'}
                </Typography>
                <Button onClick={() => handleOpen(true)}>
                    Edit
                </Button>
                <Button onClick={() => handleDelete(todo.id)}>
                    Delete
                </Button>
                <TodoModal open={open} handleClose={handleClose} saveTask={saveTask} task={todo} />
            </CardContent>
        </Card>
    );
}

export default TodoItem;