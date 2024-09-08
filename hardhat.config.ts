import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";
import "dotenv/config";

const config: HardhatUserConfig = {
  defaultNetwork: "testnet",
  networks: {
    testnet: {
      url: process.env.CHILIZ_TESTNET_RPC_URL || "",
      chainId: 88882,
      accounts: [process.env.PRIVATE_KEY || ""],
    },
  },
  solidity: {
    compilers: [
      {
        version: "0.8.20",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
      {
        version: "0.8.9", // 필요한 경우 다른 버전도 추가 가능
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
};

export default config;
