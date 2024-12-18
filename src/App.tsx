import Swap from "./myComponent/Swap";
import AddLiquidity from "./myComponent/AddLiquidity";
import RemoveLiquidity from "./myComponent/RemoveLiquidity";
import { useState } from "react";

const SwapCard = () => {
  const [render, setRender] = useState("swap");

  const handleConnect = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`${
        render !== "swap" && "h-screen"
      } flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800`}
    >
      <div className="bg-gray-900 rounded-2xl p-6 shadow-lg w-96 text-white">
        {/* Header */}
        <nav className="flex justify-between items-center mb-4">
          <h2
            className={`font-semibold text-lg ${
              render === "swap" ? "text-white" : "text-gray-500"
            }`}
            onClick={() => setRender("swap")}
          >
            Swap
          </h2>
          <h2
            className={`font-semibold text-lg ${
              render === "AddLiquidity" ? "text-white" : "text-gray-500"
            }`}
            onClick={() => setRender("AddLiquidity")}
          >
            Add Liquidity
          </h2>
          <h2
            className={`font-semibold text-lg ${
              render === "RemoveLiquidity" ? "text-white" : "text-gray-500"
            }`}
            onClick={() => setRender("RemoveLiquidity")}
          >
            Remove Liquidity
          </h2>
        </nav>
        {/* From Input */}
        {render === "swap" && <Swap />}
        {render === "AddLiquidity" && <AddLiquidity />}
        {render === "RemoveLiquidity" && <RemoveLiquidity />}
        <div className="flex justify-between mb-5 mt-2">
          <button className="bg-purple-500 hover:bg-purple-400 text-white font-semibold py-2 px-4 rounded-lg w-[48%]">
            Faucet XFI
          </button>
          <button className="bg-purple-500 hover:bg-purple-400 text-white font-semibold py-2 px-4 rounded-lg w-[48%]">
            Faucet MPX
          </button>
        </div>
        {/* Connect Wallet Button */}
        <button
          onClick={handleConnect}
          className="w-full bg-purple-700 hover:bg-purple-600 text-white font-semibold py-3 rounded-lg"
        >
          Connect Wallet
        </button>
      </div>
    </div>
  );
};

export default SwapCard;
