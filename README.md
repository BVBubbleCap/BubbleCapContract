# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test# BubbleCap - Decentralized Fan Meeting Platform for Baseball Fans

## Table of Contents
- [1. Who we are](#1-who-we-are)
- [2. Project Overview](#2-project-overview)
- [3. Setup](#3-setup)
- [4. Project Solution Description](#4-project-solution-description)
- [5. Endpoint Explanation (Technical Details)](#5-endpoint-explanation-technical-details)
- [6. Demo Video](#6-demo-video)

## 1. Who we are

![image1.png](public/image1.png)

We are **BubbleCap**, a team of developers and sports enthusiasts combining blockchain technology with fan engagement. Our mission is to provide baseball fans with a decentralized platform to connect, engage, and interact with their favorite players in unique and meaningful ways.


## 2. Project Overview

**BubbleCap** is a decentralized fan meeting platform for baseball fans. By leveraging blockchain and **Chiliz** fan tokens, we provide fans with access to exclusive events, NFT collections, private fan meetings, and direct communication with players. Fans can engage with the platform through features like **Bubble Catch**, **Bubble Talk**, and **My Page**, which enhances their interaction with the sport and its players while ensuring privacy and ownership over digital assets.

## 3. Setup

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## 4. Project Solution Description

Our platform, BubbleCap, operates as follows:

BubbleCap is a decentralized fan meeting platform for baseball fans, designed to offer a range of experiences such as checking game schedules, chatting with players, and participating in private fan meetings. The platform leverages blockchain technology to record fan activities and provide special benefits based on token ownership.

The core solution of BubbleCap is to offer fans new forms of engagement and rewards. Fans can use Chiliz fan tokens to participate in various activities within the platform, which are combined with blockchain-based NFTs.

The "Bubble Catch" game provides three levels of draws based on randomness. There are three catch options with odds of 29%, 49%, and 89%. Trying for higher odds requires a higher cost but also offers greater rewards. Fans can collect NFTs to complete a team NFT collection composed of specific team players, and those who complete the team collection will receive invites to private parties. This process of collecting NFTs and participating in private fan meetings offers fans exciting challenges and is expected to increase the demand for Chiliz tokens.

![image2.png](public/image2.png)

Additionally, the "Bubble Talk" feature allows fans to use Chiliz fan tokens to chat directly with players, creating a stronger fan community. Unlike traditional fan communities, Bubble Talk combines communication with digital assets, providing fans with a tangible benefit of blockchain-based platforms.

![image3.png](public/image3.png)

“My Page” is a space where users can manage their information. Firstly, in My NFT, users can view the NFTs they have collected so far, and clicking each card provides detailed information about that NFT. In My CAP, users can check the CAP rewards given for collecting all NFTs of a specific team, which can lead to an invite to private parties. My Info allows users to view and manage their personal and account information, while Payments enables users to select their favorite team, top up team tokens, and purchase access to Bubble Talk or Bubble Catch.

By participating in the platform based on NFTs and Chiliz tokens, fans can add economic value to their fandom activities. As the NFT market becomes more active, the value of Chiliz tokens is expected to rise, leading to positive outcomes for both fans and the platform.

## 5. Endpoint Explanation (Technical Details)

- `/login`: Allows users to check detailed information after wallet connection.
- `/bubblecatch`: Provides a random probability game to acquire NFTs.
- `/bubbletalk`: Offers communication with players, integrating digital assets.
- `/mypage`: Allows users to manage their information and recharge team tokens.

## 6. Demo Video

[Watch the BubbleCap Demo](https://youtu.be/a7f66EqgJzw)
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.ts
```
# BubbleCapContract
