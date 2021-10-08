import Modal from "./Modal";
import React from "react";
import { useState } from "react";

const CreateTodo = ({
  setTodos,
  setVisible,
}: {
  setTodos: TodoSetter;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [currentStatus, setCurrentStatus] = useState<
    "pending" | "inProgress" | "finished"
  >("pending");

  return (
    <Modal>
      <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
        <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p className="font-semibold text-gray-800">Add a Todo</p>
            <svg
              onClick={() => setVisible(false)}
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <div className="flex flex-col px-6 py-5 bg-gray-50">
            <p className="mb-2 font-semibold text-gray-700">Title</p>
            <input
              type="text"
              className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-12"
            />
            <p className="mb-2 font-semibold text-gray-700">Description</p>

            <textarea
              name=""
              placeholder="Type message..."
              className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
              id=""
            ></textarea>
            <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
              <div className="w-full sm:w-1/2">
                <p className="mb-2 font-semibold text-gray-700">Status</p>
                <select
                  value={currentStatus}
                  onChange={(e) => {
                    if (
                      e.target.value === "pending" ||
                      e.target.value === "inProgress" ||
                      e.target.value === "finished"
                    )
                      setCurrentStatus(e.target.value);
                  }}
                  className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                >
                  <option value="pending"className="">Pending</option>
                  <option value="inProgress">In Progress</option>
                  <option value="finished">Finished</option>
                </select>
              </div>
            </div>
            <hr />
          </div>
          <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
            <p
              className="font-semibold text-gray-600"
              onClick={() => setVisible(false)}
            >
              Cancel
            </p>
            <button className="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
              Save
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default CreateTodo;
