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
  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <div className="flex justify-center">
        {Object.keys(data).map((el) => (
          <ContainerDiv data={data[el]} currentStatus={el} />
        ))}
      </div>
    </DragDropContext>
  );
};
export default Board;
