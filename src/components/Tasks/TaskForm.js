import React from 'react'
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import Select from '@mui/material/Select';

function TaskForm() {
    const [open, setOpen] = React.useState(false);
    const [date, setDate] = React.useState(new Date('2014-08-18T21:11:54'));
    const [username, setUsername] = React.useState("");
    const [taskDes, setTask] = React.useState("");

    const handleUsername = (event) => {
        setUsername(event.target.value);
    };

    const handleTask = (event) => {
        setTask(event.target.value);
    };

    const handleChange = (newValue) => {
        setDate(newValue);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {

        console.log(username + taskDes + date);
        //Make API Call
        setOpen(false);

    };

    const users = [
        {
            value: "Princeton",
            id: "1"
        },
        {
            value: "Rajan",
            id: "2"
        }
    ];

    return (
        <div>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Add tasks
            </Button>
            <Dialog aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title">
                    Task Form
                </DialogTitle>
                <DialogContent>
                    <TextField
                        style={{ marginBottom: 20 }}
                        fullWidth
                        select
                        margin="dense"
                        variant="outlined"
                        label="Username"
                        defaultValue="Username"
                        value={username}
                        onChange={handleUsername}
                        required
                    >

                        {users.map(user => (
                            <MenuItem key={user.id} value={user.value}>
                                {user.value}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        style={{ marginBottom: 30 }}
                        fullWidth
                        margin="dense"
                        variant="outlined"
                        label="Task Description"
                        id="taskDes"
                        value={taskDes}
                        onChange={handleTask}
                        required
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DesktopDatePicker
                            label="Due Date"
                            inputFormat="MM/dd/yyyy"
                            value={date}
                            onChange={handleChange}
                            renderInput={(params) => <TextField {...params} />}
                            required
                        />
                    </LocalizationProvider>

                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose} color="primary">
                        Assign
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default TaskForm
