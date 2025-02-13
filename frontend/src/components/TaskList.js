import React from "react";
import axios from "axios";
import "./TaskList.css"; // Import the CSS file

const TaskList = ({ tasks, fetchTasks }) => {
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`${process.env.REACT_APP_API}/task/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchTasks();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="task-list-container">
      {tasks.map((task) => (
        <div key={task._id} className="task-card">
          <div className="task-content">
            <h3 className="task-title">{task.title}</h3>
            <p className="task-description">{task.description}</p>
            <div className="task-details">
              <p className="task-due-date">
                <strong>Due:</strong> {new Date(task.dueDate).toLocaleDateString()}
              </p>
              <p className="task-priority">
                <strong>Priority:</strong> {task.priority}
              </p>
            </div>
          </div>
          <button className="delete-button" onClick={() => handleDelete(task._id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;