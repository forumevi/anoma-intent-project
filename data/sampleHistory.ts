import { Intent } from "../types/Intent";

export const sampleHistory: Intent[] = [
  { type: "Swap", amount: 1.2, token: "ETH", tx: "0xaaa", status: "fulfilled" },
  { type: "Stake", amount: 3, token: "XAN", tx: "0xbbb", status: "pending" },
  { type: "Swap", amount: 0.5, token: "XAN", tx: "0xccc", status: "pending" },
];
