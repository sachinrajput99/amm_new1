import React, { useState } from "react";

const SubmitButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
  >
    Submit
  </button>
);

const FuturisticForm = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const handleSubmit = () => {
    alert(`First Value: ${firstValue}, Second Value: ${secondValue}`);
  };

  return (
    <div className=" flex items-center justify-center  bg-gray-900">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl w-96 text-white">
        <h2 className="text-xl mb-6 text-center font-semibold">Futuristic Form</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter first value"
            className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={firstValue}
            onChange={(e) => setFirstValue(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter second value"
            className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={secondValue}
            onChange={(e) => setSecondValue(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

// Component One Form
const ComponentOne = () => {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");

  const handleSubmit = () => {
    alert(`Component 1: Value 1: ${value1}, Value 2: ${value2}`);
  };

  return (
    <div className="flex items-center justify-center  bg-gray-900">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl w-96 text-white">
      <h2 className="text-xl mb-6 text-center font-semibold">Component 1 Form</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter value 1"
            className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
            value={value1}
            onChange={(e) => setValue1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter value 2"
            className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-green-400"
            value={value2}
            onChange={(e) => setValue2(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

// Component Two Form
const ComponentTwo = () => {
  const [fieldA, setFieldA] = useState("");
  const [fieldB, setFieldB] = useState("");

  const handleSubmit = () => {
    alert(`Component 2: Field A: ${fieldA}, Field B: ${fieldB}`);
  };

  return (
    <div className="flex items-center justify-center  bg-gray-900">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl w-96 text-white">
      <h2 className="text-xl mb-6 text-center font-semibold">Component 2 Form</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Field A"
            className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={fieldA}
            onChange={(e) => setFieldA(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Field B"
            className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={fieldB}
            onChange={(e) => setFieldB(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

// Component Three Form
const ComponentThree = () => {
  const [inputX, setInputX] = useState("");
  const [inputY, setInputY] = useState("");

  const handleSubmit = () => {
    alert(`Component 3: Input X: ${inputX}, Input Y: ${inputY}`);
  };

  return (
    <div className="flex items-center justify-center  bg-gray-900">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl w-96 text-white">
      <h2 className="text-xl mb-6 text-center font-semibold">Component 3 Form</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Input X"
            className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={inputX}
            onChange={(e) => setInputX(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Input Y"
            className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={inputY}
            onChange={(e) => setInputY(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

// Component Four Form
const ComponentFour = () => {
  const [data1, setData1] = useState("");
  const [data2, setData2] = useState("");

  const handleSubmit = () => {
    alert(`Component 4: Data 1: ${data1}, Data 2: ${data2}`);
  };

  return (
    <div className="flex items-center justify-center  bg-gray-900">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl w-96 text-white">
      <h2 className="text-xl mb-6 text-center font-semibold">Component 4 Form</h2>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Enter Data 1"
            className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-red-400"
            value={data1}
            onChange={(e) => setData1(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Data 2"
            className="w-full bg-gray-700 text-white placeholder-gray-400 p-3 rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-red-400"
            value={data2}
            onChange={(e) => setData2(e.target.value)}
          />
        </div>
        <div className="mt-6">
          <SubmitButton onClick={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

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
          {component === "one" && <ComponentOne/>}
          {component === "two" && <ComponentTwo/>}
          {component === "three" && <ComponentThree/>}
          {component === "four" && <ComponentFour/>}
          {!component && (
            <p className="text-gray-400">Click a button in the navbar to render a component.</p>
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
