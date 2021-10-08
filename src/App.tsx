import { useState } from "react";
import { HiDocumentAdd, HiOutlineViewBoards, HiViewList } from "react-icons/hi";
import ContainerDiv from "./components/boardViewComponents/ContainerDiv";
import Container from "./components/listViewComponents/Container";
import CreateTodo from "./components/CreateTodo";

function App() {
  const [todos, setTodos] = useState<TodoStruct[] | null>(null);
  const [viewMode, setViewMode] = useState<"list" | "board">("list");
  const [isVisible, setVisible] = useState(false);
  const handleView = (switchView: "list" | "board") => {
    setViewMode(switchView);
  };
  return (
    <div className="App min-h-screen bg-gray-200 mx-auto p-6 font-mono">
      <div className="w-full mb-8 container">
        <div className="flex justify-end bg-gray-200">
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            <HiDocumentAdd
              className="text-xl"
              onClick={() => setVisible((s) => !s)}
            />
          </button>
          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            <HiViewList
              className="text-xl"
              onClick={() => handleView("list")}
            />
          </button>

          <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
            <HiOutlineViewBoards
              className="text-xl"
              onClick={() => handleView("board")}
            />
          </button>
        </div>
      </div>
      {viewMode === "list" ? (
        <Container />
      ) : viewMode === "board" ? (
        <ContainerDiv />
      ) : null}
      {isVisible ? (
        <CreateTodo setTodos={setTodos} setVisible={setVisible} />
      ) : null}
    </div>
  );
}

export default App;
