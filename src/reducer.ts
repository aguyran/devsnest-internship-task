import { saveInStorage } from "./utils/localstorage";

const todoReducer = (state: TodoState, action: action) => {
  if (action.type === "ADD_TODO") {
    return saveInStorage({
      ...state,
      [action.payload.status]: [
        ...state[action.payload.status],
        action.payload,
      ],
    });
  }

  if (action.type === "EDIT_TODO") {
    let old_status: TodoStruct | undefined;
    let index = 0;
    Object.keys(state).forEach((el) => {
      for (let i = 0; i < state[el].length; i++) {
        if (state[el][i].id === action.payload.id) {
          old_status = state[el][i];
          index = i;
          break;
        }
      }
    });
    let temp: TodoState | undefined;
    if (old_status) {
      if (old_status.status === action.payload.status) {
        temp = {
          ...state,
          [action.payload.status]: [...state[action.payload.status]],
        };
        temp[action.payload.status][index] = action.payload;
        return saveInStorage(temp);
      } else {
        state[old_status.status].splice(index, 1);
        return saveInStorage({
          ...state,
          [action.payload.status]: [
            ...state[action.payload.status],
            action.payload,
          ],
        });
      }
    }
  }

  if (action.type === "UPDATE_BOARD") {
    if (!action.payload.destination) return state;
    const { droppableId: statusSource, index: indexSource } =
      action.payload.source;
    const { droppableId: statusDest, index: indexDest } =
      action.payload.destination;

    const [reorderedItem] = state[statusSource].splice(indexSource, 1);
    state[statusDest].splice(indexDest, 0, reorderedItem);
    state[statusDest][indexDest] = {
      ...state[statusDest][indexDest],
      status: statusDest,
      updated_at: new Date(),
    };
    return saveInStorage({ ...state });
  }
  if (action.type === "DELETE_TODO") {
    return saveInStorage({
      ...state,
      [action.payload.status]: state[action.payload.status].filter(
        (el) => el.id !== action.payload.id
      ),
    });
  }
  return state;
};
export default todoReducer;
