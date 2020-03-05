import React from "react";
import Today from "./Today";

function App() {
  return (
    <section>
      <header className="page-header">
        <h1>My Day</h1>
        <Today />
      </header>
      <h2>To Do List</h2>
    </section>
  );
}

export default App;
