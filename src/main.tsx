import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import { defineChain } from 'viem';
import { Toaster } from "react-hot-toast";
import './index.css'
import App from './App.tsx'

const queryClient = new QueryClient();

const crossfi = defineChain({
  id: 4157,
  name: 'CrossFi Testnet',
  nativeCurrency: {
    decimals: 18,
    name: 'XFI',
    symbol: 'XFI',
  },
  rpcUrls: {
    default: {
      http: ['https://rpc.testnet.ms'],
    },
  },
  blockExplorers: {
    default: { name: 'Explorer', url: 'https://scan.testnet.ms' },
  },
});


const config = getDefaultConfig({
  appName: 'Custom AMM',
  projectId: '5c34e7e8a0650558f2d3fc5cff924a20',
  chains: [mainnet, polygon, optimism, arbitrum, base, crossfi],
  ssr: true, 
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          <App />
          <Toaster position="bottom-right" reverseOrder={true} />
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  </StrictMode>,
)
