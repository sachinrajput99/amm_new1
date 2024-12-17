import { useState } from "react";

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
        <h2 className="text-xl mb-6 text-center font-semibold">
          Component 4 Form
        </h2>
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
export default ComponentFour;
