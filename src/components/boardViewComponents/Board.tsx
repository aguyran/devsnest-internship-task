import ContainerDiv from "./ContainerDiv";

const Board = ({ data }: { data: TodoStruct[] }) => {
  console.log(data);
  return (
    <div className="flex justify-center">
      <ContainerDiv data={data} currentStatus="pending" />
      <ContainerDiv data={data} currentStatus="inProgress" />
      <ContainerDiv data={data} currentStatus="finished" />
    </div>
  );
};
export default Board;
