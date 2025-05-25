import { useState } from "react";

import "./App.css";
import Table from "./table";

function App() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  const [tables, setTables] = useState([]);

  const handleGenerateTable = () => {
    const tables_ = [];
    for (let i = start; i <= end; i++) tables_.push(i);

    setTables(tables_);
  };

  console.log(tables);

  return (
    <div>
      <input
        type="number"
        placeholder="Enter start"
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter end"
        onChange={(e) => setEnd(e.target.value)}
      />
      <button onClick={handleGenerateTable}>Generate Table</button>
      <div
        className="body"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          gap: "2rem",
          flexWrap: "wrap",
          backgroundColor: "lavender",
          padding: "2rem",
        }}
      >
        {tables.map((n) => (
          <Table num={n} />
        ))}
      </div>
    </div>
  );
}

export default App;
