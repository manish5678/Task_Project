import React from "react";

const TaskDetails = ({ task }) => {
  if (!task) return <div>No task selected</div>;

  return (
    <div className="task-card">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <p>Due: {new Date(task.dueDate).toLocaleDateString()}</p>
      <p>Priority: {task.priority}</p>
    </div>
  );
};

export default TaskDetails;