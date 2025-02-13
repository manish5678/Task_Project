import React, { useEffect, useState } from "react";
import axios from "axios";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if(!token) {
      window.location.href = "/login";
    }else{
    fetchTasks();
}
  }, []);

  const fetchTasks = async () => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.get(`${process.env.REACT_APP_API}/task`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setTasks(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <TaskForm fetchTasks={fetchTasks} />
      <TaskList tasks={tasks} fetchTasks={fetchTasks} />
    </div>
  );
};

export default Dashboard;