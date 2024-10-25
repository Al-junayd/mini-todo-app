import React from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, onSelectTask, onToggleComplete }) {
  return (
    <div className="flex flex-col gap-6">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onSelectTask={onSelectTask}
          onToggleComplete={onToggleComplete}
        />
      ))}
    </div>
  );
}

export default TaskList;
