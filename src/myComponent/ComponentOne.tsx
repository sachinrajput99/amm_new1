import { useState } from "react";

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
        <h2 className="text-xl mb-6 text-center font-semibold">
          Component 1 Form
        </h2>
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
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-yellow-500 text-gray-900 font-semibold rounded-lg hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default ComponentOne;
