import React from "react";
import { useState, useEffect } from "react";
import Vocablury from "./Vocablury";

export default function ImportFlashCard() {
  const [inputValue, setInputValue] = useState("");
  const [savedInputs, setSavedInputs] = useState([]);

  useEffect(()=>
    {console.log(savedInputs)}, [savedInputs] 
  )
  return (
    <div className="flex flex-col items-center gap-4 m-8 w-fit h-fit justify-center p-8 border-4 border-gray-300 rounded-md">
      <h1 className="text-white text-4xl mb-4">Flashcard creation</h1>
      <div style={{ display: "flex", gap: "32px" }}>

        <input value={ inputValue }
        onChange={(e) => setInputValue(e.target.value)}
          className="w-100 h-20 text-2xl border-gray-300 border-2 rounded-md text-white text-center"
          placeholder="input"
        ></input>

        <button className="text-gray-300 border-gray-300 border-2 w-full rounded-md"
        onClick={() => setSavedInputs([...savedInputs, inputValue])}>Save</button>

      </div>
    </div>
  );
}
