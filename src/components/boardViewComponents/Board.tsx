import ContainerDiv from "./ContainerDiv";
import { DragDropContext } from "react-beautiful-dnd";
import { DropResult } from "react-beautiful-dnd";

const Board = ({
  data,
  dispatch,
}: {
  data: TodoState;
  dispatch: TodoSetter;
}) => {
  const handleOnDragEnd = (result: DropResult) => {
    dispatch({ type: "UPDATE_BOARD", payload: result });
  };
  const keys = Object.keys(data);
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="grid grid-cols-auto-fit gap-y-3">
        {Object.keys(data).map((el) => (
          <ContainerDiv
            key={el}
            data={data[el]}
            currentStatus={el}
            dispatch={dispatch}
            keys={keys}
          />
        ))}
      </div>
    </DragDropContext>
  );
};
export default Board;
