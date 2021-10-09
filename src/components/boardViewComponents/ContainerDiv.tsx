const ContainerDiv = ({
  data,
  currentStatus,
}: {
  data: TodoStruct[];
  currentStatus: string;
}) => {
  console.log(data);
  return (
    <div className="flex w-screen h-screen p-10 space-x-4 overflow-auto text-gray-700">
      <div className="flex flex-col flex-shrink-0 w-64 bg-gray-200 border border-gray-300">
        <div className="flex items-center justify-between flex-shrink-0 h-10 px-2 border-b border-gray-300 bg-white">
          <span className="block text-sm font-medium">{currentStatus}</span>
          <button className="flex items-center justify-center w-6 h-6">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex flex-col px-2 pb-2 overflow-auto">
          {data.map((el) => {
            if (el.status === currentStatus)
              return (
                <div
                  key={el.id}
                  className="p-6 mt-2 border border-gray-300 bg-white cursor-pointer"
                  draggable
                  onDragOver={(e) => {
                    e.preventDefault();
                  }}
                  onDragStart={(e) => {
                    console.log("dragstart:", el.id);
                    e.dataTransfer.setData("id", el.id);
                  }}
                  onDrop={(e)=>{
                    const id =e.dataTransfer.getData("id")
                  }}
                >
                  {el.title}
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContainerDiv;
