import { NextResponse } from "next/server";

export async function GET() {
  const intents = await fetchRealIntents(); // gerçek Anoma verisini çek
  return NextResponse.json(intents);
}

async function fetchRealIntents() {
  // Örnek: fetch veya SDK üzerinden intentleri al
  return [
    { id: 1, type: "Swap", amount: 1.2, token: "ETH", tx: "0xaaa", status: "fulfilled", date: "2025-09-15" },
    { id: 2, type: "Stake", amount: 3, token: "XAN", tx: "0xbbb", status: "pending", date: "2025-09-14" }
  ];
}
