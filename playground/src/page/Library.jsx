import React from "react";
import Vocablury from "../components/Vocablury";
import ImportFlashCard from "../components/ImportFlashCard";

export default function Library() {
  return (
    <>
      <div className="min-h-screen flex items-center flex-col">
        <ImportFlashCard />
        <Vocablury />
      </div>
    </>
  );
}
