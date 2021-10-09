const todoReducer = (
  state: TodoStruct[],
  action: { type: string; payload: TodoStruct }
) => {
  switch (action.type) {
    case "ADD_TODO":
      console.log("hello");
      return [...state, action.payload];
    case "EDIT_TODO":
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return action.payload;
        }
        return el;
      });
    case "UPDATE_TO":
      return state

    default:
      return state;
  }
};
export default todoReducer;
