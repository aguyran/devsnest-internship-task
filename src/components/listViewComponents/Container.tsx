import Todo from "./Todo";

const Container = ({ data,dispatch }: { data: TodoStruct[],dispatch:TodoSetter }) => {
  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <caption className="w-full text-md p-2 font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              {data[0]?.status}
            </caption>
            {data.map((el) => (
              <Todo key={el.id} element={el} dispatch={dispatch}></Todo>
            ))}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Container;