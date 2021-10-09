type TodoStruct = {
  id: string;
  title: string;
  description: string;
  status: string;
  created_at?: Date;
  updated_at?: Date;
};
type TodoState = {
  [x: string]: TodoStruct[];
};
type TodoSetter = React.Dispatch<{ type: string; payload: TodoStruct }>;
