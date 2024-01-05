import React from "react";
import { useState } from "react";

export default function TaskForm() {
  const [taskName, setTaskName] = useState("");
  return (
    <form>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(ev) => setTaskName(ev.target.value)}
        placeholder="New task..."
      />
    </form>
  );
}
