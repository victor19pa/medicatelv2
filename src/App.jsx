import React from "react";
import UserProvider from "./context/UserContext";

const App = () => {
  return (
    <UserProvider>
      <div>
        <h1>Hola</h1>
      </div>
    </UserProvider>
  );
};

export default App;
