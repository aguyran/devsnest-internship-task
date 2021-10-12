import { DraggableProvided } from "react-beautiful-dnd";
import Modal from "../Modal";
import { HiEye } from "react-icons/hi";
import { useState } from "react";
import CreateTodo from "../CreateTodo";

const Cards = ({
  el,
  provided,
  dispatch,
  keys,
}: {
  el: TodoStruct;
  provided: DraggableProvided;
  dispatch: TodoSetter;
  keys: string[];
}) => {
  const [isEdit, setEdit] = useState(false);
  return (
    <>
      <div
        className="p-6 mt-2 border border-gray-300 bg-white cursor-pointer text-base break-words"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {el.title}
        <HiEye
          className="cursor-pointer transform transition duration-500 hover:scale-110"
          onClick={() => {
            setEdit(!isEdit);
          }}
        />
      </div>
      {isEdit ? (
        <Modal>
          <CreateTodo
            keys={keys}
            dispatch={dispatch}
            setVisible={setEdit}
            currentTodo={el}
            editOn={true}
          ></CreateTodo>
        </Modal>
      ) : null}
    </>
  );
};
export default Cards;
