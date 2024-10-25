import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import TaskList from "./components/TaskList";
import EditTask from "./components/EditTask";

function App() {
  const [selectedTask, setSelectedTask] = useState(null);
  const tasks = [
    { id: 1, name: "Training at the Gym", completed: true },
    { id: 2, name: "Play Paddle with friends", completed: false },
    { id: 3, name: "Burger BBQ with family", completed: false },
  ];

  return (
    <main className="h-full  font-roboto w-full flex justify-center items-center bg-[#F3F3F3]">
      <div className=" max-w-[1040px]  flex">
        <div className="relative w-[424px] pb-6 min-h-[700px]  shadow-2xl">
          <div className="text-white flex gap-[21px] pl-8 pt-[23.5px] pb-5 bg-blueBg">
            <img
              src="/images/avatar.png"
              alt="avatar"
              className="w-[50px] h-[50px]"
            />
            <div className="max-w-[221px]">
              <h2 className="text-base text-shadow-black  font-500 leading-[18.75px] mb-2">
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
          <div className="my-5 mx-4 ">
            <TaskList tasks={tasks} onSelectTask={setSelectedTask} />
          </div>

          <div className="absolute bottom-[25px] right-4  flex justify-end items-center">
            <button className="mr-6 bg-blueBg rounded-full flex justify-center items-center border-blue-900 border-[3px]  w-[60px] h-[60px]">
              <img
                src="/images/addIcon.svg"
                alt="add-icon"
                className="w-[21px] h-[42px]"
              />
            </button>
          </div>
        </div>
        <div className="w-[635px] flex flex-col h-full ">
          <div className="text-white text-shadow-black  text-2xl font-medium leading-[28.13px] flex justify-center items-center h-[123px] bg-blueBg">
            Edit Task
          </div>
          <div className="pl-[17px] pr-[22px]">
            <EditTask task={selectedTask} />

            <div className="mt-auto flex gap-4 items-center w-full ">
              <button className="text-shadow-black bg-redBtn px-6 py-5 border-2 border-red-900 rounded-md text-lg text-white">
                Delete
              </button>
              <button className="text-shadow-black bg-primary w-full  py-5 border-2 border-blue-900 rounded-md text-lg text-white">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
