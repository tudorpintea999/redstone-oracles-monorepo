import "dotenv/config";
import { NetworkName } from "@redstone-finance/starknet-connector";

const getFromEnv = (name: string) => {
  const envVariable = process.env[name];
  if (!envVariable) {
    throw new Error(`Missing environment variable ${name}`);
  }
  return envVariable;
};

export type VERSION = "0";

export interface StarknetRelayerConfig {
  relayerIterationInterval: number;
  updatePriceInterval: number;
  network: NetworkName;
  privateKey: string;
  priceManagerAddress: string;
  priceManagerVersion: VERSION;
  ownerAddress: string;
  maxEthFee: number;
}

export const config = Object.freeze(<StarknetRelayerConfig>{
  relayerIterationInterval: Number(getFromEnv("RELAYER_ITERATION_INTERVAL")),
  updatePriceInterval: Number(getFromEnv("UPDATE_PRICE_INTERVAL")),
  network: getFromEnv("NETWORK"),
  privateKey: getFromEnv("PRIVATE_KEY"),
  priceManagerAddress: getFromEnv("PRICE_MANAGER_ADDRESS"),
  priceManagerVersion: getFromEnv("PRICE_MANAGER_VERSION") as VERSION,
  ownerAddress: getFromEnv("OWNER_ADDRESS"),
  maxEthFee: Number(getFromEnv("MAX_ETH_FEE")),
});
