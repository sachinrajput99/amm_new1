import React, { useState } from "react";
import ComponentOne from "./myComponent/ComponentOne";
import ComponentTwo from "./myComponent/ComponentTwo";
import ComponentThree from "./myComponent/ComponentThree";
import ComponentFour from "./myComponent/ComponentFour";
import FuturisticForm from "./myComponent/FuturisticForm";

function App() {
  const [component, setComponent] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeButton, setActiveButton] = useState(""); // Track active button

  const handleButtonClick = (name) => {
    setComponent(name);
    setActiveButton(name);
  };

  return (
    <div className=" h-screen  bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="bg-gray-800 p-4 shadow-md relative z-10">
        <div className="container mx-auto flex flex-row justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">Minimalistic UI</h1>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            className={`${
              isMenuOpen
                ? "absolute top-full right-0 w-[50%] bg-gray-800 p-4 shadow-lg"
                : "hidden"
            } md:flex flex-col md:flex-row md:static md:w-auto`}
          >
            {["futuristicForm", "one", "two", "three", "four"].map((item) => (
              <button
                key={item}
                onClick={() => handleButtonClick(item)}
                className={`w-full px-3 py-2 mt-2 text-sm font-semibold rounded-lg md:mr-2 transition-transform duration-200 ${
                  activeButton === item
                    ? "bg-yellow-600 text-gray-900 transform translate-y-1 shadow-inner"
                    : "bg-yellow-500 text-gray-900 hover:bg-yellow-400"
                }`}
              >
                {`Component ${item === "futuristicForm" ? "Form" : item}`}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow p-6 flex items-center justify-center">
        <div className="bg-gray-800 p-6 border rounded-lg shadow-md w-full text-center">
          {component === "futuristicForm" && <FuturisticForm />}
          {component === "one" && <ComponentOne />}
          {component === "two" && <ComponentTwo />}
          {component === "three" && <ComponentThree />}
          {component === "four" && <ComponentFour />}
          {!component && (
            <p className="text-gray-400">
              <FuturisticForm />
            </p>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 p-4 text-center">
        <p className="text-gray-400">© 2024 Minimalistic UI</p>
      </footer>
    </div>
  );
}

export default App;
