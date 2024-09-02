import React, { useEffect, useState } from 'react';
import './Todo.css';
import AddTask from './AddTask';
import ListTask from './ListTask';

const Todo = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    document.title = `You have ${tasks.length} pending task${tasks.length !== 1 ? 's' : ''}`;
  }, [tasks]); // Dependency array ensures it only runs when tasks change

  const addTask = (title) => {
    const newTask = [...tasks, { title }];
    setTasks(newTask);
  };

  const removeTask = (index) => {
    const newTask = [...tasks];
    newTask.splice(index, 1);
    setTasks(newTask);
  };

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <div className="card-body">
                <h4 className="card-title">TaskFlow Todo App</h4>
                <AddTask addTask={addTask} />
                <div className="list-wrapper">
                  {tasks.map((task, index) => (
                    <ListTask task={task} removeTask={removeTask} index={index} key={index} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
