"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-gray-900 border-b border-gray-800 px-6 py-4 sticky top-0 z-50">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold text-white tracking-wide">
          Task Manager
        </h1>
        <div className="hidden  md:flex items-center gap-6 text-gray-300">
          <Link href="/" className="hover:text-white transition">
            Home
          </Link>
          <Link href="/" className="hover:text-white transition">
            Dashboard
          </Link>
          <Link href="/" className="hover:text-white transition">
            Tasks
          </Link>
        </div>
        <Link
          href={"/tasks"}
          className="hidden md:block px-5 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white  font-medium shadow-lg hover:scale-105 transition-all duration-300 "
        >
          + Add Task
        </Link>
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-gray-300 bg-gray-800 p-4 rounded-xl">
          <Link href="/" onClick={() => setIsOpen(false)}>
            Home
          </Link>
          <Link href="/dashboard" onClick={() => setIsOpen(false)}>
            Dashboard
          </Link>
          <Link href="/tasks" onClick={() => setIsOpen(false)}>
            Tasks
          </Link>

          <Link
            href="/tasks/create"
            onClick={() => setIsOpen(false)}
            className="mt-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 text-white text-center"
          >
            + Add Task
          </Link>
        </div>
      )}
    </nav>
  );
}
