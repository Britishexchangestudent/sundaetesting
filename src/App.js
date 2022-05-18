import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [checked, setChecked] = useState(false);

  const handleCheck = () => {
    setChecked((prev) => !prev);
    console.log(`checked`, checked);
  };

  return (
    <div className="h-screen max-w-2xl flex flex-col mx-auto">
      <h1 className="text-3xl font-bold underline text-center">summaryform</h1>

      <button
        className={`px-6 py-3 bg-blue-500 w-2/12 rounded-md hover:bg-blue-600 active:scale-95 hover:scale-105 transition duration-300`}
        disabled={!checked}
      >
        Confirm
      </button>

      <div className="form-check">
        <label className="inline-flex items-center">
          <input type="checkbox" checked={checked} onChange={handleCheck} />
          <span className="ml-2">Simple checkbox</span>
        </label>
      </div>
    </div>
  );
}

export default App;

// onClick={handleCheck}
