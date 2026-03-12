import { Outlet } from "react-router";
import { useState, useEffect } from "react";
import Header from "./Header";
import React from "react";

export default function Layout() {
  return (
    <div className="max-h-screen max-w-screen bg-[url('/OsuGirl.png')] bg-center bg-cover">
      <div className="bg-black/30 top-0 pt-12 min-h-screen">
        <div className="relative">
          <Header
            className= "fixed w-screen top-0 left-0 z-50" />

          <main>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}

// export default function IconLayout2({
//     children
// }) {
//     return (
//         <main>
//             <Header />
//             {children}
//         </main>
//     )
// }
