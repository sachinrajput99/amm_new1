import { useState } from "react";
import { toast } from "react-hot-toast";
import { config } from "@/utils/config";
import {
  waitForTransactionReceipt,
  writeContract,
} from "wagmi/actions";
import { AMM, AMM_ADDRESS } from "@/abi/constant";
import { parseUnits } from "ethers";

const RemoveLiquidity = () => {
  const [removeLiquidValue, setRemoveLiquidValue] = useState(""); // State for 'To' value

  const handleFromValueChange = (e) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) >= 0) {
      setRemoveLiquidValue(value);
    }
  };

  const handleLiquidForm = async (e : any) => {
    e.preventDefault();

    console.log("removeLiquidValue", removeLiquidValue);
    try {
          const args = {
            abi: AMM,
            functionName: "removeLiquidity",
            args: [parseUnits(removeLiquidValue.toString(), 18)],
            address: AMM_ADDRESS,
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
              error: "Remove Liquidity error:",
              loading: "Removing Liquidity...",
              success: "Removed Liquidity successfully!",
            }
          );
        } catch (error) {}
    setRemoveLiquidValue(""); // Reset input value after submission
  };

  return (
    <div>
      <form onSubmit={handleLiquidForm}>
        {/* From Input */}
        <div className="bg-gray-700 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center text-gray-400"></div>
          <input
            value={removeLiquidValue}
            onChange={handleFromValueChange}
            name="from"
            type="number"
            placeholder="0.0"
            className="bg-transparent text-white text-2xl w-full outline-none mt-2"
          />
        </div>

        {/* Remove Liquidity Button */}
        <div className="flex flex-col space-y-3 mb-6">
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-500 text-white font-medium py-2 rounded"
          >
            Remove Liquidity
          </button>
        </div>
      </form>
    </div>
  );
};

export default RemoveLiquidity;
