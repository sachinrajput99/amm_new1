import React from "react";

const Card = () => {
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center min-h-screen ">
        <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden w-96">
          <div className="relative bg-gradient-to-r from-purple-500 to-purple-700 h-20  items-center justify-center hidden sm:flex">
            <p className="text-white text-4xl font-bold">Adaptive AMM</p>
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              Adaptive Liquidity Automated Market Maker (AMM)
            </h2>
            <p className="text-base text-gray-300">
              The AdaptiveLiquidityAMM is an advanced decentralized finance
              (DeFi) protocol that enables seamless token swaps, dynamic
              liquidity management, and impermanent loss mitigation. With a
              user-centric approach, this AMM is designed to balance reserves
              and provide optimal trading efficiency.
            </p>
            <ul className="mt-4 text-gray-300 space-y-2 text-sm list-disc list-inside">
              <li>
                <span className="font-semibold text-white">
                  Dynamic Liquidity Provision:
                </span>
                Add liquidity using native tokens (e.g., ETH) and ERC20 tokens
                with proportional allocation based on reserves.
              </li>
              <li>
                <span className="font-semibold text-white">Asset Swaps:</span>{" "}
                Efficiently swap between supported assets with dynamic pricing
                and slippage control.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Rebalancing Mechanism:
                </span>
                Automatically adjusts asset weights periodically to ensure
                liquidity health and optimal market behavior.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Impermanent Loss Compensation:
                </span>{" "}
                A dedicated fund compensates liquidity providers for potential
                impermanent loss.
              </li>
              <li>
                <span className="font-semibold text-white">
                  Dynamic Fee Model:
                </span>
                Adjusts fees based on market volatility and liquidity
                utilization, ensuring fair transaction costs.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
