import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import shape from "@/assets/shape.svg";

const features = [
  {
    title: "User-Friendly Blockchain Interactions",
    description:
      "Intents-MRU bridges the gap between natural language and on-chain transactions, allowing users to express their blockchain intentions in a simple and intuitive manner without needing to understand the complexities of smart contract interactions.",
  },
  {
    title: "Decentralized Solver Market",
    description:
      "At the core of Intents-MRU is a decentralized market where solvers compete to convert users' natural language intents into executable transactions. This market incentivizes solvers to provide accurate and efficient solutions, ensuring the reliability and scalability of the platform.",
  },
  {
    title: "Secure and Verifiable Transactions",
    description:
      "Intents-MRU leverages advanced cryptographic techniques, such as zero-knowledge proofs, to validate and compress the execution data generated by solvers. This ensures the integrity and efficiency of on-chain transactions while maintaining privacy and security.",
  },
  {
    title: "Modular and Extensible Architecture",
    description:
      "Intents-MRU is built on a modular and extensible architecture, allowing for easy integration with various blockchain protocols and smart contract ecosystems. This flexibility enables the platform to adapt to emerging technologies and cater to a wide range of use cases.",
  },
  {
    title: "Incentivized Solver Ecosystem",
    description:
      "Solvers are incentivized to participate in the Intents-MRU market through a rewards and slashing mechanism. Efficient and accurate solutions are rewarded, while inefficient or malicious behavior is penalized, fostering a self-regulating and trustworthy solver community.",
  },
  {
    title: "Scalable and Efficient",
    description:
      "By leveraging micro rollup technology, Intents-MRU achieves near-linear scalability improvements compared to traditional on-chain execution. The platform's efficient compression and validation techniques minimize data throughput requirements, ensuring high throughput and low transaction costs.",
  },
];

export default function Features() {
  return (
    <>
      <div className=" col-span-12 p-5 text-2xl font-basier font-semibold max-w-7xl mx-auto bg-white/50 shadow-inner border border-x-violet-300">
        Features
      </div>
      <div className=" items-stretch grid grid-cols-12 [&>*:first-child]:col-span-5 [&>*:nth-child(3)]:col-span-4 [&>*:nth-child(4)]:col-span-4 [&>*:nth-child(5)]:col-span-4 [&>*:nth-child(2)]:col-span-7 [&>*:nth-child(6)]:col-span-12 [&>*:nth-child(6)]:rounded-b-xl gap-y-5gap-3 gap-0 max-w-7xl mx-auto p10 bg-gradient-to-b to-purple-400/30 via-violet-500/30 from-indigo-600/30 rounded-b-xl">
        {features.map((feature, idx) => (
          <Card
            className="maxw-sm bg-violet200/90 rounded-none shadow-inner hover:shadow-xs border-0 shadow-2xlhover:shadow-lg relative bg-transparent p-8"
            key={idx}
          >
            <CardHeader>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent>{feature.description}</CardContent>
            {/* {idx !== features.length - 1 && idx !== 0 && (
              <Image
                src={shape}
                alt="shape"
                className=" absolute bottom-0 right-0 "
              />
            )}
            <Image
              src={shape}
              alt="shape"
              className=" absolute top-0 left-0 rotate-180 "
            /> */}
          </Card>
        ))}
      </div>
    </>
  );
}
