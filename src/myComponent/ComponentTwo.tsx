import { useState } from "react";

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
        <h2 className="text-xl mb-6 text-center font-semibold">
          Component 2 Form
        </h2>
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
export default ComponentTwo;
