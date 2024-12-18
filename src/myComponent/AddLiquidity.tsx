import { useState } from "react";

const AddLiquidity = () => {
  const [addLiquidValue, setAddLiquidValue] = useState(""); // State for 'To' value

  const handleFromValueChange = (e) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) >= 0) {
      setAddLiquidValue(value);
    }
  };

  const handleLiquidForm = (e) => {
    e.preventDefault();

    console.log("addLiquidValue", addLiquidValue);
    setAddLiquidValue(""); // Reset input value after submission
  };

  return (
    <div>
      <form onSubmit={handleLiquidForm}>
        {/* From Input */}
        <div className="bg-gray-700 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center text-gray-400"></div>
          <input
            value={addLiquidValue}
            onChange={handleFromValueChange}
            name="from"
            type="number"
            placeholder="0.0"
            className="bg-transparent text-white text-2xl w-full outline-none mt-2"
          />
        </div>

        {/* Add Liquidity Button */}
        <div className="flex flex-col space-y-3 mb-6">
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 rounded"
          >
            Add Liquidity
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddLiquidity;
