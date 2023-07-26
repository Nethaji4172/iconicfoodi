import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "Dummy Name",
    email: "Dummy@nethajees.com",
  },
});

export default UserContext;
