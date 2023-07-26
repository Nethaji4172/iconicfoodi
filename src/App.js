import React, { useState } from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { Outlet } from "react-router-dom";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import store from "./Utils/store";

function App() {
  const [user, setUser] = useState({
    name: "Nethaji",
    email: "Nethaji4172@gmail.com",
  });
  return (
    <Provider store={store}>
      <UserContext.Provider value={{ user: user, setUser }}>
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      </UserContext.Provider>
    </Provider>
  );
}

export default App;
