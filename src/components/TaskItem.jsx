import React from "react";

function TaskItem({ task, onSelectTask, onToggleComplete }) {
  return (
    <div className="flex justify-center h-[91px] w-full items-center shadow-lg rounded-md border bg-white border-[#E7E7E7]">
      <div className="flex justify-between w-full pl-[23px] pr-[19px] items-center">
        {task.completed ? (
          <img
            src="/images/completedIcon.svg"
            alt="completed"
            className="w-8 h-8 mr-[17px]"
            onClick={() => onToggleComplete(task.id)}
          />
        ) : (
          <input
            type="radio"
            checked={task.completed}
            onChange={() => onToggleComplete(task.id)}
            className="mr-[17px] w-8 h-8 border-primary border-2 rounded-full cursor-pointer"
          />
        )}

        <span className={task.completed ? "line-through text-gray-500" : ""}>
          {task.name}
        </span>
        <button
          className="ml-auto border border-primary text-primary px-4 font-medium text-base leading-[16.08px] py-[13px] rounded"
          onClick={() => onSelectTask(task)}
        >
          Edit
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
