import Swap from "./myComponent/Swap";
import AddLiquidity from "./myComponent/AddLiquidity";
import RemoveLiquidity from "./myComponent/RemoveLiquidity";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useState } from "react";
import { MPX, MPX_ADDRESS } from "./abi/constant";
import { toast } from "react-hot-toast";
import { config } from "./utils/config";
import {
  waitForTransactionReceipt,
  writeContract,
} from "wagmi/actions";

const SwapCard = () => {
  const [render, setRender] = useState("swap");

  const getMPXTokens = async () => {
    try {
      const args = {
        abi: MPX,
        functionName: "getToken",
        args: [],
        address: MPX_ADDRESS,
      };
      await toast.promise(
        (async () => {
          const hash = await writeContract(config, args);
          console.log("Transaction hash:", hash);

          await waitForTransactionReceipt(config, {
            hash,
            pollingInterval: 1000,
            confirmations: 3,
          });

          console.log("Transaction confirmed:", hash);
        })(),
        {
          error: "Token error:",
          loading: "Getting Token...",
          success: "Token fetched successfully!",
        }
      );
    } catch (error) {}
  };

  return (
    <div
      className={`h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800`}
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
          {/* <button className="bg-purple-500 hover:bg-purple-400 text-white font-semibold py-2 px-4 rounded-lg w-[48%]">
            Faucet XFI
          </button> */}
          <button className="bg-purple-500 hover:bg-purple-400 text-white font-semibold py-2 px-4 rounded-lg w-[48%]" onClick={getMPXTokens}>
            Faucet MPX
          </button>
        </div>
        {/* Connect Wallet Button */}
        <div className="w-full flex justify-center">
          <div className="text-white font-semibold py-3 rounded-lg w-auto">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapCard;
