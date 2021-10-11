export const initialState: TodoState = {
    Finished: [
      {
        id: "1",
        title: "Example1",
        description: "This is an example Lol",
        status: "Finished",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "2",
        title: "Example2",
        description: "This is an example Lol",
        status: "Finished",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    In_Progress: [
      {
        id: "3",
        title: "Example3",
        description: "This is an example Lol",
        status: "In_Progress",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
    Pending: [
      {
        id: "4",
        title: "Example4",
        description: "This is an example Lol",
        status: "Pending",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "5",
        title: "Example5",
        description: "This is an example Lol",
        status: "Pending",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: "6",
        title: "Example6",
        description: "This is an example Lol",
        status: "Pending",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ],
  },
  colors: colors = {
    Finished: "#d4edda",

    Pending: "#f8d7da",
    In_Progress: "#fff3cd",
  };
