import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./TaskForm";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  return (
    <main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task) => (
        <Task {...task} />
      ))}
    </main>
  );
}

export default App;
