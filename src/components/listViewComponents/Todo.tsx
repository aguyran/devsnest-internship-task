import { HiEye } from "react-icons/hi";
import { useState } from "react";
import Modal from "../Modal";
import CreateTodo from "../CreateTodo";
import { colors } from "../../config";

const Todo = ({
  element,
  dispatch,
  keys,
}: {
  element: TodoStruct;
  dispatch: TodoSetter;
  keys: string[];
}) => {
  const [isEdit, setEdit] = useState(false);
  return (
    <tbody className="bg-white">
      <tr className="text-gray-700">
        <td className="px-4 py-3 border">
          <HiEye className="cursor-pointer" onClick={() => setEdit(!isEdit)} />
        </td>
        <td className="px-4 py-3 border">
          <div className="flex items-center text-sm">
            <div>
              <p className="font-semibold text-black">{element.title}</p>
            </div>
          </div>
        </td>
        <td className="px-4 py-3 text-ms border">
          {element.description.length > 150
            ? element.description.slice(0, 150) + "..."
            : element.description}
        </td>
        <td className="px-4 py-3 text-xs border">
          <span
            style={{ backgroundColor: colors[element.status] }}
            className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
          >
            {" "}
            {element.status}
          </span>
        </td>
        <td className="px-4 py-3 text-sm border">
          {element.created_at?.toString()}
        </td>
        <td className="px-4 py-3 text-sm border">
          {element.updated_at?.toString()}
        </td>
        <td className="px-4 py-3 text-sm border">
          {element.due ? new Date(element.due).toDateString() : null}
        </td>
      </tr>
      {isEdit ? (
        <Modal>
          <CreateTodo
            keys={keys}
            dispatch={dispatch}
            setVisible={setEdit}
            currentTodo={element}
            editOn={true}
          ></CreateTodo>
        </Modal>
      ) : null}
    </tbody>
  );
};
export default Todo;
