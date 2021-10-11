import { Droppable, Draggable } from "react-beautiful-dnd";
import { colors } from "../../config";
import Cards from "./Cards";

const ContainerDiv = ({
  data,
  currentStatus,
  dispatch,
  keys,
}: {
  data: TodoStruct[];
  currentStatus: string;
  dispatch: TodoSetter;
  keys: string[];
}) => {
  return (
    <div>
      <div className="max-h-96 max-w-md bg-gray-200 border border-gray-400 overflow-auto break-words select-none">
        <div className="flex items-center justify-between flex-shrink-0 h-10 px-2 border-b border-gray-300 bg-white ">
          <span
            style={{ backgroundColor: colors[currentStatus] }}
            className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
          >
            {currentStatus}
          </span>
        </div>
        <Droppable droppableId={currentStatus}>
          {(provided) => (
            <div
              className="flex flex-col px-2 pb-2 overflow-y-auto"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {data.map((el, index) => {
                return (
                  <Draggable key={el.id} draggableId={el.id} index={index}>
                    {(provided) => (
                      <Cards
                        el={el}
                        provided={provided}
                        keys={keys}
                        dispatch={dispatch}
                      />
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
