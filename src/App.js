import React, { useState } from "react";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, name: "Training at the Gym", completed: true },
    { id: 2, name: "Play Paddle with friends", completed: false },
    { id: 3, name: "Burger BBQ with family", completed: false },
  ]);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleSave = (taskName) => {
    if (selectedTask) {
      setTasks((prevTasks) =>
        prevTasks.map((task) =>
          task.id === selectedTask.id ? { ...task, name: taskName } : task
        )
      );
      toast.success("Task updated successfully");
    } else {
      const newTask = { id: Date.now(), name: taskName, completed: false };
      setTasks((prevTasks) => [...prevTasks, newTask]);
      toast.success("Task added successfully");
    }
    setSelectedTask(null);
  };

  const handleDelete = () => {
    if (selectedTask) {
      setTasks((prevTasks) =>
        prevTasks.filter((task) => task.id !== selectedTask.id)
      );
      toast.success("Task deleted successfully");
      setSelectedTask(null);
    }
  };

  const handleToggleComplete = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
    toast.success("Task completion status updated");
  };

  return (
    <main className=" h-screen font-roboto w-full flex justify-center items-center bg-[#F3F3F3]">
      <div className=" relative max-w-[1040px] flex">
        <div className="relative w-[424px] pb-6 min-h-[700px] shadow-2xl">
          <div className="text-white flex gap-[21px] pl-8 pt-[23.5px] pb-5 bg-blueBg">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="w-[50px] h-[50px]"
            />
            <div className="max-w-[221px]">
              <h2 className="text-base text-shadow-black font-500 leading-[18.75px] mb-2">
                Hello, Jhon
              </h2>
              <p className="italic text-shadow-black font-roboto font-thin text-[25px] leading-[26.46px]">
                What are your plans for today?
              </p>
            </div>
          </div>
          <button className="relative bg-lemonBg pt-[36px] pb-[39.11px] pl-[24.93px] w-full flex items-center gap-[24.97px] text-primary font-bold text-lg leading-[19.05px]">
            <img
              src="/images/pro-img.svg"
              alt="pro-img"
              className="w-[53.1px] h-[40.89px]"
            />
            <span className="text-shadow-white">Go Pro Upgrade Now</span>
            <div className="h-[71px] w-[66.11px] absolute top-0 right-[23.34px] flex justify-center items-center bg-primary text-[#F2C94C]">
              $1
            </div>
          </button>
          <div className="my-5 mx-4">
            <TaskList
              tasks={tasks}
              onSelectTask={setSelectedTask}
              onToggleComplete={handleToggleComplete}
            />
          </div>
        </div>
        <div className="w-[635px] flex flex-col h-full">
          <div className="text-white text-shadow-black text-2xl font-medium leading-[28.13px] flex justify-center items-center h-[123px] bg-blueBg">
            Edit Task
          </div>
          <div className="pl-[17px] pr-[22px] flex-grow">
            <EditTask
              task={selectedTask}
              onSave={handleSave}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
      <ToastContainer />
    </main>
  );
}

export default App;
