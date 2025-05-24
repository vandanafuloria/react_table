import { useState } from "react";

import "./App.css";
import Table from "./table";

function App() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(0);

  function generateTable() {
    const res = [];

    for (let i = start; i <= end; i++) {
      const table = [];
      for (let j = 1; j <= 10; j++) {
        const multiple = i * j;
        table.push(`${i} x  ${j} =  ${multiple}`);
      }
      res.push(table);
    }
    return res;
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter start"
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter end"
        onChange={(e) => setEnd(e.target.value)}
      />
      <button onClick={generateTable}>Generate Table</button>
      <Table generateTable={generateTable} />
    </div>
  );
}

export default App;
