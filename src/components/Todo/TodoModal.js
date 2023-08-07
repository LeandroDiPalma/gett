import { useState, useEffect } from 'react';
import { TextField, Button, FormControlLabel, Switch, Dialog, DialogContent, DialogActions } from '@mui/material';
import './todoModal.scss'

const TodoModal = ({ open, handleClose, task, saveTask }) => {
    const [localTask, setLocalTask] = useState(task || { title: '', completed: false });

    useEffect(() => {
        setLocalTask(task || { title: '', completed: false });
    }, [task]);

    const handleSave = () => {
        saveTask(localTask);
        setLocalTask({ title: '', completed: false });
        handleClose();
    };

    return (
        <Dialog open={open} onClose={handleClose}>

            <DialogContent>

                <div className='dialog-content'>
                    <TextField
                        value={localTask.title}
                        label='title'
                        onChange={e => setLocalTask({ ...localTask, title: e.target.value })}
                    />
                    <FormControlLabel
                        control={
                            <Switch
                                checked={localTask.completed}
                                onChange={e => setLocalTask({ ...localTask, completed: e.target.checked })}
                            />
                        }
                        label={localTask.completed ? "Completed" : "Not Completed"}
                    />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary" variant='outlined'>
                    Cancel
                </Button>
                <Button onClick={handleSave} color="primary" variant='outlined' disabled={localTask.title ===''}>
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    );
}

export default TodoModal;

