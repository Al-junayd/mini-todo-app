import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onSelectTask }) {
  return (
    <div className="flex flex-col gap-6">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} onSelectTask={onSelectTask} />
      ))}
    </div>
  );
}

export default TaskList;
