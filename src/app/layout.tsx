"use client";
import "./globals.css";
// import NextNProgress from "nextjs-progressbar";
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import "@rainbow-me/rainbowkit/styles.css";



import {
  darkTheme,
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygonMumbai } from "@wagmi/core/chains";
import { mainnet, polygon, optimism, arbitrum, base, zora } from "wagmi/chains";

import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import Navbar from "./_components/Navbar";


const { chains, publicClient } = configureChains(
  [polygonMumbai],
  [
    alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID || "" }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "3bbe45c28cc24c790a601f9cd2aa466b",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={"p-4 pt-12 scrollbar-hide font-inter"}>
        <WagmiConfig config={wagmiConfig}>
          <RainbowKitProvider chains={chains} theme={darkTheme({
        accentColor: '#3bff89ff',
        accentColorForeground: 'black',
      })}>
             <ProgressBar
                height="2px"
                color="#3bff89ff"
                options={{ showSpinner: false }}
                shallowRouting
              />
            <Navbar />
            {children}
          </RainbowKitProvider>
        </WagmiConfig>
      </body>
    </html>
  );
}
