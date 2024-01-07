import "./App.css";
import { useState } from "react";
import { useEffect } from "react";
import TaskForm from "./components/TaskForm";
import Task from "./components/Task";

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

  function updateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].done = newDone;
      return newTasks;
    });
  }

  function getMessage(numberComplete, numberTotal) {
    const percentage = numberComplete / numberTotal;
    if (percentage === 0) {
      return "Try to do at least one 🥚";
    }
    if (percentage === 1) {
      return 'Very nice job 🐤'
    }
    return "Keep it going 🐣";
  }

  const numberComplete = tasks.filter((task) => task.done).length;
  const numberTotal = tasks.length;

  return (
    <main>
      <h1>
        {numberComplete}/{numberTotal} Complete
      </h1>
      <h2>{getMessage(numberComplete, numberTotal)}</h2>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task {...task} onToggle={(done) => updateTaskDone(index, done)} />
      ))}
    </main>
  );
}

export default App;
