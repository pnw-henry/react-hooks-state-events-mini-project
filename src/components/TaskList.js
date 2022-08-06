import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const entries = tasks.map((task) => {
    return (
      <Task
        key={task.text}
        text={task.text}
        category={task.category}
        onDeleteTask={onDeleteTask}
      />
    );
  });

  return <div className="tasks">{entries}</div>;
}

export default TaskList;
