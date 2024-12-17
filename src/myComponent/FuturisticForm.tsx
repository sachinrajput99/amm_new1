import { useState } from "react";

const FuturisticForm = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");

  const handleSubmit = () => {
    alert(`First Value: ${firstValue}, Second Value: ${secondValue}`);
  };

  return (
    <div className=" flex items-center justify-center  bg-gray-900">
      <div className="bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-2xl shadow-xl w-96 text-white">
        <h2 className="text-xl mb-6 text-center font-semibold">
          Futuristic Form
        </h2>
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
export default FuturisticForm;
