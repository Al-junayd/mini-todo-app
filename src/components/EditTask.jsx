import React, { useState } from "react";

function EditTask({ task }) {
  const [taskName, setTaskName] = useState(task ? task.name : "");

  return (
    <div className=" p-5 rounded">
      <h2 className="text-xl mb-4">Task Name</h2>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        className="border border-gray-300 pt-5 pb-[25px] px-[26.66px] w-full text-xl leading-[24.3px] focus:border-gray-600 focus:outline-none mb-4 rounded-[9px]"
      />
    </div>
  );
}

export default EditTask;
