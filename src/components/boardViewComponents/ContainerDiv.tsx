import { Droppable, Draggable } from "react-beautiful-dnd";
import CreateTodo from "../CreateTodo";
import { HiPencil } from "react-icons/hi";
import { useState } from "react";
import Modal from "../Modal";

const ContainerDiv = ({
  data,
  currentStatus,
}: {
  data: TodoStruct[];
  currentStatus: string;
}) => {
  return (
    <div className="flex w-screen h-screen p-10 space-x-4 overflow-auto text-gray-700">
      <div className="flex flex-col flex-shrink-0 w-64 bg-gray-200 border border-gray-300">
        <div className="flex items-center justify-between flex-shrink-0 h-10 px-2 border-b border-gray-300 bg-white">
          <span className="block text-sm font-medium">{currentStatus}</span>
        </div>
        <Droppable droppableId={currentStatus}>
          {(provided) => (
            <div
              className="flex flex-col px-2 pb-2 overflow-auto"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.map((el, index) => {
                return (
                  <Draggable key={el.id} draggableId={el.id} index={index}>
                    {(provided) => (
                      <div
                        className="p-6 mt-2 border border-gray-300 bg-white cursor-pointer"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        {el.title}
                      </div>
                    )}
                  </Draggable>
                );
              })}{" "}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </div>
  );
};

export default ContainerDiv;
