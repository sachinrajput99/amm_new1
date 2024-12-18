import { useState } from "react";
import { useAccount, useWriteContract, useWaitForTransactionReceipt, useReadContract } from "wagmi";
import { formatUnits, parseEther, parseUnits } from "ethers";
import { AMM, MPX, AMM_ADDRESS, MPX_ADDRESS } from "../abi/constant";
import { toast } from "react-hot-toast";
import { parseErrorString } from "@/utils/parseErrorString";


const AddLiquidity = () => {
  const { address } = useAccount();
  const { writeContractAsync, isPending } = useWriteContract();
  const [addXFIValue, setAddXFIValue] = useState(""); // State for 'To' value
  const [addMPXValue, setAddMPXValue] = useState(""); // State for 'To' value

  const addLiquidity = async () => {
    
  }

  const handleXFIValueChange = (e : any) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) >= 0) {
      setAddXFIValue(value);
    }
  };
  const handleMPXValueChange = (e : any) => {
    const value = e.target.value;
    if (value === "" || parseFloat(value) >= 0) {
      setAddMPXValue(value);
    }
  };

  // const handleApprove = async () => {
  //   await toast.promise((async () => {
  //     const approveHash = await writeContractAsync({ abi: STAKE_TOKEN_ABI, functionName: "approve", address: STAKE_TOKEN_ADDRESS, args: [STAKING_ADDRESS, parseInt(amount) * (10 ** 18)] });

  //     await waitForTransactionReceipt(config, {
  //       hash: approveHash,
  //       pollingInterval: 1000,
  //     });

  //   })(), {
  //     error: "Error approving",
  //     loading: "Approving",
  //     success: "Approved",
  //   })
  //   return true

  // }

  const handleLiquidForm = async (e : any) => {
    e.preventDefault();

    console.log("addLiquidValue", addMPXValue);
    const parsed = parseUnits(addXFIValue, 18);
    const parsed2 = parseUnits(addMPXValue, 18);
    console.log("parsed", parsed.toString());
    console.log("parsed2", parsed2.toString());

    try {
      await toast.promise(
        (async () => {
          const { hash } = await writeContractAsync({
            address: AMM_ADDRESS,
            abi: AMM,
            functionName: "addLiquidity",
            args: [parseUnits(addXFIValue.toString(), 18), parseUnits(addMPXValue.toString(), 18)],
            value: parseUnits(addXFIValue.toString(), 18),
          });
        })(),
        {
          loading: `Approving token ...`,
          success: () => `Approval successful!`,
          error: (err) => {
            // new function for toast error
            const jsonOutput = parseErrorString(err.message);

            return jsonOutput.errorType; // Return a clean error message for the toast
          },
        }
      );
    } catch (err) {
     console.log("Error in Catch :" , err);
    }

    setAddXFIValue(""); 
    setAddMPXValue("");
  };

  return (
    <div>
      <form onSubmit={handleLiquidForm}>
        {/* From Input */}
        <div className="bg-gray-700 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center text-gray-400"></div>
          <input
            value={addXFIValue}
            onChange={handleXFIValueChange}
            name="from"
            type="number"
            placeholder="0.0"
            className="bg-transparent text-white text-2xl w-full outline-none mt-2"
          />
          
        </div>
        <div className="bg-gray-700 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center text-gray-400"></div>
          <input
            value={addMPXValue}
            onChange={handleMPXValueChange}
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
