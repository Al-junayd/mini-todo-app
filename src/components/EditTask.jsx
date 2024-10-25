import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

function EditTask({ task, onSave, onDelete }) {
  const [taskName, setTaskName] = useState(task ? task.name : "");

  useEffect(() => {
    setTaskName(task ? task.name : "");
  }, [task]);

  const handleSave = () => {
    if (taskName.trim().length >= 3) {
      onSave(taskName);
    } else {
      toast.error("Task name should be at least 3 characters long");
    }
  };

  return (
    <div className=" p-5 rounded">
      <h2 className="text-xl mb-4">Task Name</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border border-gray-300 pt-5 pb-[25px] px-[26.66px] w-full text-xl leading-[24.3px] focus:border-gray-600 focus:outline-none mb-4 rounded-[9px]"
      />
      <div className="absolute bottom-5 flex gap-4 items-center w-full">
        <button
          onClick={onDelete}
          className="text-shadow-black bg-redBtn px-6 py-5 border-2 border-red-900 rounded-md text-lg text-white"
        >
          Delete
        </button>
        <button
          onClick={handleSave}
          className="text-shadow-black bg-primary w-[436px] py-5 border-2 border-blue-900 rounded-md text-lg text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default EditTask;
