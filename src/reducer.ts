const todoReducer = (
  state: TodoState,
  action: { type: string; payload: TodoStruct }
) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        [action.payload.status]: [
          ...state[action.payload.status],
          action.payload,
        ],
      };
    case "EDIT_TODO":
      const temp = {
        ...state,
      };
      temp[action.payload.status].forEach((el, i) => {
        if (el.id === action.payload.id) {
          temp[action.payload.status][i] = action.payload;
        }
      });
      return temp;
    default:
      return state;
  }
};
export default todoReducer;
