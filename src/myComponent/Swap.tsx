import React, { useState } from "react";

const Swap = () => {
  const [fromToken, setFromToken] = useState("XFI"); // State for 'From' token
  const [toToken, setToToken] = useState("MPX"); // State for 'To' token
  const [fromValue, setFromValue] = useState(""); // State for 'From' value
  const [toValue, setToValue] = useState(""); // State for 'To' value

  // Function to handle token selection and toggle
  const handleTokenSelection = (type) => {
    if (type === "XFI") {
      setFromToken("XFI");
      setToToken("MPX");
    } else if (type === "MPX") {
      setFromToken("MPX");
      setToToken("XFI");
    }
  };

  // Prevent negative input values
  const handleFromValueChange = (e) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) >= 0) {
      setFromValue(value);
    }
  };

  const handleToValueChange = (e) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) >= 0) {
      setToValue(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("From Token:", fromToken, "Value:", fromValue);
    console.log("To Token:", toToken, "Value:", toValue);
    setFromValue("");
    setToValue("");
  };

  const handleCalculate = () => {
    console.log("Calculate Min Output...");
  };

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="bg-gray-800 rounded-lg p-6 shadow-lg w-[400px] text-white">
        <form onSubmit={handleSubmit}>
          {/* From Input */}
          <div className="bg-gray-700 rounded-lg p-4 mb-4">
            <div className="flex justify-between items-center text-gray-400">
              <label>From</label>
              <button
                type="button"
                onClick={() =>
                  handleTokenSelection(fromToken === "XFI" ? "MPX" : "XFI")
                }
                className="bg-purple-600 hover:bg-purple-500 px-3 py-1 rounded text-sm text-white"
              >
                {fromToken}
              </button>
            </div>
            <input
              value={fromValue}
              onChange={handleFromValueChange}
              name="from"
              type="number"
              placeholder="0.0"
              className="bg-transparent text-white text-2xl w-full outline-none mt-2"
            />
          </div>

          {/* Down Arrow */}
          <div className="text-center mb-4">
            <span className="text-gray-500 text-lg">↓</span>
          </div>

          {/* To Input */}
          <div className="bg-gray-700 rounded-lg p-4 mb-6">
            <div className="flex justify-between items-center text-gray-400">
              <label>To</label>
              <button
                type="button"
                onClick={() =>
                  handleTokenSelection(toToken === "XFI" ? "MPX" : "XFI")
                }
                className="bg-purple-600 hover:bg-purple-500 px-3 py-1 rounded text-sm text-white"
              >
                {toToken}
              </button>
            </div>
            <input
              value={toValue}
              onChange={handleToValueChange}
              name="to"
              type="number"
              placeholder="0.0"
              className="bg-transparent text-white text-2xl w-full outline-none mt-2"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col space-y-3 mb-6">
            <button
              type="button"
              onClick={handleCalculate}
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 rounded"
            >
              Calculate Min Output
            </button>
            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 rounded"
            >
              Swap
            </button>
          </div>
        </form>

        {/* Faucet Buttons */}
      </div>
    </div>
  );
};

export default Swap;
