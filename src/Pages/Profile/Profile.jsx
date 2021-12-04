import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../context/context'
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import Task from '../../components/Tasks/Task';
import TaskForm from '../../components/Tasks/TaskForm';

export default function Profile() {
  const { user } = useContext(AuthContext);

  console.log(user);

  useEffect(() => {
    //call API

    return () => {
      //unmount
      //cleanup
    }
  }, [])
  
  const allTasks = [
    {
      "id": 1,
      "content": "First Card"
    },
    {
      "id": 2,
      "content": "Second Card"
    },
    {
      "id": 3,
      "content": "Third Card"
    }
  ]
  return (
    <>
      <h1>
        DashBoard
      </h1>

      <div>
        <Button component={Link} to="/events" color="primary" variant="contained">
          See Calendar
        </Button>
      </div>

      <div style={{marginTop: "10px"}}>
        <TaskForm />
      </div>
      

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {
          allTasks.map((task) => {
            return <Task content={task.content} key={task.id} />
          })
        }
      </div>


    </>
  );
}
