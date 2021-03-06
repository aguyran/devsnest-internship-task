import Modal from "./Modal";
import React from "react";
import { useState } from "react";
import { HiTrash } from "react-icons/hi";

const CreateTodo = ({
  dispatch,
  setVisible,
  currentTodo,
  editOn,
  keys,
}: {
  dispatch: TodoSetter;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  currentTodo?: TodoStruct;
  editOn?: boolean;
  keys: string[];
}) => {
  const [handleData, setHandleData] = useState<TodoStruct>(
    currentTodo || {
      id: "",
      title: "",
      description: "",
      status: keys[0],
    }
  );
  const handleInput =
    (props: keyof TodoStruct) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setHandleData({ ...handleData, [props]: e.target.value });
    };
  const [currentlyEditing, setCurrentlyEditing] = useState(false);
  const grey = "rgb(229, 231, 235)";
  return (
    <div className="absolute min-h-screen w-full z-10">
      <div className="flex justify-center h-screen items-center bg-gray-200 antialiased">
        <div className="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-full mx-auto rounded-lg border border-gray-300 shadow-xl">
          <div className="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
            <p className="font-semibold text-gray-800">Add a Todo</p>
            <svg
              onClick={() => setVisible(false)}
              className="w-6 h-6 cursor-pointer"
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
              value={handleData.title}
              type="text"
              disabled={editOn ? (currentlyEditing ? false : true) : false}
              {...(editOn
                ? currentlyEditing
                  ? false
                  : { style: { backgroundColor: grey } }
                : null)}
              className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-12"
              onChange={(e) => handleInput("title")(e)}
            />
            <p className="mb-2 font-semibold text-gray-700">Description</p>

            <textarea
              value={handleData.description}
              disabled={editOn ? (currentlyEditing ? false : true) : false}
              placeholder="Type message..."
              {...(editOn
                ? currentlyEditing
                  ? false
                  : { style: { backgroundColor: grey } }
                : null)}
              className="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
              onChange={(e) => handleInput("description")(e)}
            ></textarea>
            <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
              <div className="w-full sm:w-1/2">
                <p className="mb-2 font-semibold text-gray-700">Status</p>
                <select
                  disabled={editOn ? (currentlyEditing ? false : true) : false}
                  value={handleData.status}
                  {...(editOn
                    ? currentlyEditing
                      ? false
                      : { style: { backgroundColor: grey } }
                    : null)}
                  onChange={(e) => handleInput("status")(e)}
                  className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                >
                  {keys.map((el) => (
                    <option key={el} value={el}>
                      {el}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
              <div className="w-full sm:w-1/2">
                {" "}
                <p className="mb-2 font-semibold text-gray-700">Due</p>
                <input
                  type="date"
                  disabled={editOn ? (currentlyEditing ? false : true) : false}
                  {...(editOn
                    ? currentlyEditing
                      ? false
                      : { style: { backgroundColor: grey } }
                    : null)}
                  className="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  onChange={(e) => handleInput("due")(e)}
                ></input>
              </div>
            </div>
            <hr />
          </div>
          <div className="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg ">
            <p
              className="font-semibold text-gray-600 cursor-pointer hover:text-red-400"
              onClick={() => setVisible(false)}
            >
              Cancel
            </p>
            <div className="grid grid-cols-2 gap-3">
              {" "}
              {editOn ? (
                <button
                  className="bg-transparent text-red-400 font-semibold  py-2 px-4 border border-red-500  rounded"
                  onClick={() => {
                    dispatch({
                      type: "DELETE_TODO",
                      payload: { ...handleData },
                    });
                  }}
                >
                  Delete
                </button>
              ) : (
                <></>
              )}
              <button
                className="px-4 py-2 text-white font-semibold bg-blue-500 rounded cursor-pointer"
                onClick={() => {
                  if (!editOn) {
                    dispatch({
                      type: "ADD_TODO",
                      payload: {
                        ...handleData,
                        id: Date.now().toString(),
                        created_at: new Date(),
                        updated_at: new Date(),
                      },
                    });
                    setVisible(false);
                  } else {
                    if (currentlyEditing && editOn)
                      dispatch({
                        type: "EDIT_TODO",
                        payload: { ...handleData, updated_at: new Date() },
                      });
                  }
                  setCurrentlyEditing(!currentlyEditing);
                }}
              >
                {editOn ? (currentlyEditing ? "Save" : "Edit") : "Create"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTodo;
