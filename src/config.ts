import { loadStorage } from "./utils/localstorage";

export const initialState: TodoState = loadStorage() || {
    Finished: [
      {
        id: "1",
        title: "Example1",
        description: `We're no strangers to love`,
        status: "Finished",
        created_at: new Date(),
        updated_at: new Date(),
        due: new Date().toISOString().split("T")[0],
      },
      {
        id: "2",
        title: "Example2",
        description: "You know the rules and so do I",
        status: "Finished",
        created_at: new Date(),
        updated_at: new Date(),
        due: new Date().toISOString().split("T")[0],
      },
    ],
    In_Progress: [
      {
        id: "3",
        title: "Example3",
        description: "A full commitment's what I'm thinking of",
        status: "In_Progress",
        created_at: new Date(),
        updated_at: new Date(),
        due: new Date().toISOString().split("T")[0],
      },
    ],
    Pending: [
      {
        id: "4",
        title: "Example4",
        description: "You wouldn't get this from any other guy",
        status: "Pending",
        created_at: new Date(),
        updated_at: new Date(),
        due: new Date().toISOString().split("T")[0],
      },
      {
        id: "5",
        title: "Example5",
        description: "I just wanna tell you how I'm feeling",
        status: "Pending",
        created_at: new Date(),
        updated_at: new Date(),
        due: new Date().toISOString().split("T")[0],
      },
      {
        id: "6",
        title: "Example6",
        description: "Gotta make you understand",
        status: "Pending",
        created_at: new Date(),
        updated_at: new Date(),
        due: new Date().toISOString().split("T")[0],
      },
    ],
  },
  colors: colors = {
    Finished: "#d4edda",

    Pending: "#f8d7da",
    In_Progress: "#fff3cd",
  };
