import Todo from "./Todo";
import { useMemo } from "react";

const Container = ({
  data,
  dispatch,
  currentStatus,
  keys,
}: {
  data: TodoStruct[];
  dispatch: TodoSetter;
  currentStatus: string;
  keys: string[];
}) => {
  return (
    <section className="container mx-auto p-6 font-mono">
      <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
        <div className="w-full overflow-x-auto">
          <table className="w-full">
            <caption className="w-full text-md p-2 font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
              {currentStatus}
            </caption>
            {data.map((el) => {
              return (
                <Todo
                  keys={keys}
                  key={el.id}
                  element={el}
                  dispatch={dispatch}
                ></Todo>
              );
            })}
          </table>
        </div>
      </div>
    </section>
  );
};

export default Container;
