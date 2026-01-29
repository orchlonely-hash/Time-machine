import Image from "next/image";
import React from "react";
import header from "./components/Header";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-1 dark:bg-black sm:items-start" style={{ backgroundColor: "var(--background)", color: "var(--text-color)" }}>
        <img src="/closeup-shot-red-eared-turtle-trachemys-scripta-elegans-resting-rock-near-water.jpg" alt="Next Level Logo" className="w-64 mb-8" />
      </main>
    </div>
  );
}
