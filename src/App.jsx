// src/App.js
import React from "react";
import Home from "./pages/Home";
import UserProvider from "./components/Context/UserProvider";

function App() {
  return (
    <UserProvider>
      <Home />
    </UserProvider>
  );
}

export default App;
