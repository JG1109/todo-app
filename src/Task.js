import React from "react";
import Checkbox from "./Checkbox";

function Task() {
  return (
    <div className="task">
      <Checkbox defaultChecked={false} />
      Test task
    </div>
  );
}

export default Task;
