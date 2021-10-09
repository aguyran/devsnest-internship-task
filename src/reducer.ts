const todoReducer = (
  state: TodoState,
  action: { type: string; payload: TodoStruct }
) => {
  if (action.type === "ADD_TODO") {
    return {
      ...state,
      [action.payload.status]: [
        ...state[action.payload.status],
        action.payload,
      ],
    };
  }

  if (action.type === "EDIT_TODO") {
    let old_status: any = null;
    let index = 0;
    let flag = true;
    Object.keys(state).forEach((el) => {
      state[el].forEach((el2, i) => {
        if (el2.id === action.payload.id) {
          old_status = el2;
          index = i;
        }
      });
    });
    let temp;
    if (old_status) {
      if (old_status.status === action.payload.status) {
        console.log(old_status, action.payload);
        temp = {
          ...state,
          [action.payload.status]: [...state[action.payload.status]],
        };
        temp[action.payload.status][index] = action.payload;
        return temp;
      } else {
        state[old_status.status].splice(index, 1);
        return {
          ...state,
          [action.payload.status]: [
            ...state[action.payload.status],
            action.payload,
          ],
        };
      }
    }
  }
};
export default todoReducer;
