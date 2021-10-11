import { useState, useReducer } from "react";
import { HiDocumentAdd, HiOutlineViewBoards, HiViewList } from "react-icons/hi";
import Board from "./components/boardViewComponents/Board";
import Container from "./components/listViewComponents/Container";
import CreateTodo from "./components/CreateTodo";
import todoReducer from "./reducer";
import Modal from "./components/Modal";
import { initialState } from "./config";

function App() {
  const [todos, setTodos] = useReducer(todoReducer, initialState);

  const [viewMode, setViewMode] = useState<"list" | "board">("list");
  const [isVisible, setVisible] = useState(false);
  const handleView = (switchView: "list" | "board") => {
    setViewMode(switchView);
  };
  return (
    <div className="App min-h-screen bg-gray-200 mx-auto p-6 font-mono">
      <div className="w-full mb-8 container">
        <div className="flex justify-end bg-gray-200">
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={() => setVisible((s) => !s)}
          >
            <HiDocumentAdd className="text-xl" />
          </button>
          <button
            className={
              viewMode === "list"
                ? "bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-l"
                : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            }
            onClick={() => handleView("list")}
          >
            <HiViewList className="text-xl" />
          </button>

          <button
            className={
              viewMode === "board"
                ? "bg-gray-100 text-gray-800 font-bold py-2 px-4 rounded-l"
                : "bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l"
            }
            onClick={() => handleView("board")}
          >
            <HiOutlineViewBoards className="text-xl" />
          </button>
        </div>
      </div>
      {viewMode === "list" ? (
        <>
          {Object.keys(todos).map((el) => (
            <Container
              data={todos[el]}
              currentStatus={el}
              key={el}
              keys={Object.keys(todos)}
              dispatch={setTodos}
            />
          ))}
        </>
      ) : viewMode === "board" ? (
        <Board data={todos} dispatch={setTodos} />
      ) : null}
      {isVisible ? (
        <Modal>
          <CreateTodo
            dispatch={setTodos}
            setVisible={setVisible}
            keys={Object.keys(todos)}
          />
        </Modal>
      ) : null}
    </div>
  );
}

export default App;
