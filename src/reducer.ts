const todoReducer = (
  state: TodoState,
  action: { type: string; payload: any }
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
    let temp: any;
    if (old_status) {
      if (old_status.status === action.payload.status) {
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
  if (action.type === "UPDATE_BOARD") {
    if (!action.payload.destination) return state;
    const [reorderedItem] = state[action.payload.source.droppableId].splice(
      action.payload.source.index,
      1
    );
    state[action.payload.destination.droppableId].splice(
      action.payload.destination.index,
      0,
      reorderedItem
    );
    state[action.payload.destination.droppableId][
      action.payload.destination.index
    ] = {
      ...state[action.payload.destination.droppableId][
        action.payload.destination.index
      ],
      status: action.payload.destination.droppableId,
      updated_at: new Date(),
    };
    return JSON.parse(JSON.stringify(state));
  }
  return state;
};
export default todoReducer;
