export const saveInStorage = (state: TodoState) => {
    localStorage.setItem("todos", JSON.stringify(state));
    return state;
  },
  loadStorage = (): TodoState | undefined => {
    const temp = localStorage.getItem("todos");
    if (temp) {
      const temp2 = JSON.parse(temp);
      for (let i in temp2) {
        temp2[i].forEach((el: TodoStruct) => {
          if (el.created_at && el.updated_at) {
            el.created_at = new Date(el.created_at);
            el.updated_at = new Date(el.updated_at);
          }
        });
      }
      return temp2;
    }
  };
