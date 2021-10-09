import ContainerDiv from "./ContainerDiv";

const Board = ({ data }: { data: TodoState }) => {
  console.log(data);
  return (
    <div className="flex justify-center">
      {Object.keys(data).map((el) => (
        <ContainerDiv data={data[el]} currentStatus={el} />
      ))}
    </div>
  );
};
export default Board;
