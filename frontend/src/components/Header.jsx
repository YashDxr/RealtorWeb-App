import React from "react";
import { FaSearch, FaBuilding } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <header className="bg-indigo-200 shadow-md">
      {" "}
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        {" "}
        <Link to="/">
          {" "}
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap items-center">
            {" "}
            <FaBuilding className="text-indigo-600" />{" "}
            <span className="text-indigo-500">Realtor</span>{" "}
            <span className="text-indigo-700">Web</span>{" "}
          </h1>{" "}
        </Link>{" "}
        <form className="bg-indigo-100 p-3 rounded-lg flex items-center">
          {" "}
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />{" "}
          <FaSearch className="text-indigo-600" />{" "}
        </form>{" "}
        <ul className="flex gap-4">
          {" "}
          <Link to="/">
            {" "}
            <l1 className="hidden sm:inline text-indigo-700 hover:underline cursor-pointer">
              {" "}
              Home{" "}
            </l1>{" "}
          </Link>{" "}
          <Link to="/about">
            {" "}
            <l1 className="hidden sm:inline text-indigo-700 hover:underline cursor-pointer">
              {" "}
              About{" "}
            </l1>{" "}
          </Link>{" "}
          <Link to="/sign-in">
            {" "}
            <l1 className="sm:inline text-indigo-700 hover:underline cursor-pointer">
              {" "}
              Sign In{" "}
            </l1>{" "}
          </Link>{" "}
        </ul>{" "}
      </div>{" "}
    </header>
  );
}