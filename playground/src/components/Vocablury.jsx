import React from "react";
import ImportFlashCard from "./ImportFlashCard";

export default function Vocablury({ savedInputs }) {
    console.log(savedInputs);
  return (
    <>
      <div className="flex p-8 border-4 border-gray-300 rounded-md">
        {savedInputs?.map((item, index) => (
          <p className="text-white" key={index}>
            {item}
          </p>
        ))}
      </div>
    </>
  );
}
