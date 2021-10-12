type TodoStruct = {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
  due?: string;
};
type TodoState = {
  [x: string]: TodoStruct[];
};
type TodoSetter = React.Dispatch<action>;

type action =
  | { type: "ADD_TODO"; payload: TodoStruct }
  | { type: "EDIT_TODO"; payload: TodoStruct }
  | { type: "UPDATE_BOARD"; payload: import("react-beautiful-dnd").DropResult }
  | { type: "DELETE_TODO"; payload: TodoStruct };

type colors = {
  [x: string]: string;
};
