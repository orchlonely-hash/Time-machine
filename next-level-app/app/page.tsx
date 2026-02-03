import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col font-sans bg-[var(--background)] text-white p-2">

      <div className="w-full mt-8 justify-center items-center flex">
        <Image
          src="/Maxwell-Cat-Bright-Eyes-Curious-Exploration-PNG.png"
          alt="Next Level Logo"
          width={400}
          height={160}
          className="mx-auto max-w-md h-auto"
        />
        <div className="flex flex-col ml-5">
          <h1 className="text-8xl text-center mt-4">Good Welcome</h1>
          <p className="text-4xl">I like turtles but cats are cool too</p>
        </div>
      </div>

      <div className="w-full h-auto flex flex-col justify-center items-center mt-8">
        <div className="rounded-xl bg-[var(--foreground)] p-4 w-auto h-auto mx-auto max-w-3xl">
          <h2 className="text-3xl mb-4">About Me</h2>
          <p className="text-lg">

          </p>
        </div>
      </div>

    </main >
  );
}
