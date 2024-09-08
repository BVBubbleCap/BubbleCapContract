import { ethers } from "hardhat";
import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";


const deployContracts: DeployFunction = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments} = hre;
  const { deploy } = deployments;
  const [developer] = await ethers.getSigners();

  const baseTokenURI = "ipfs://";  // 기본 URI
  const silverCID = process.env.REACT_APP_SILVER_CARD_CID;
  const goldCID = process.env.REACT_APP_GOLD_CARD_CID;
  const eventCID = process.env.REACT_APP_EVENT_CARD_CID;

  // 환경 변수가 제대로 설정되었는지 확인
  if (!silverCID || !goldCID || !eventCID) {
    throw new Error("CID가 .env 파일에 설정되지 않았습니다. 각 CID를 확인해주세요.");
  }

  console.log("Deploying GameNFT contract...");
  // GameNFT 배포
  const gameNFT = await deploy("GameNFT", {
    from: developer.address,
    args: [baseTokenURI, silverCID, goldCID],
    log: true,
  });

  console.log("GameNFT deployed to:", gameNFT.address);

  console.log("Deploying EventNFT contract...");
  // EventNFT 배포
  const eventNFT = await deploy("EventNFT", {
    from: developer.address,
    args: [baseTokenURI, eventCID],
    log: true,
  });

  console.log("EventNFT deployed to:", eventNFT.address);
};

export default deployContracts;
deployContracts.tags = ["deploy_game_event_nft"];

