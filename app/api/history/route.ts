// app/api/history/route.ts
import { NextResponse } from "next/server";

const ANOMA_API = process.env.ANOMA_API_URL; // .env.local içine eklenebilir

export async function GET() {
  try {
    if (ANOMA_API) {
      const res = await fetch(ANOMA_API);
      if (!res.ok) {
        return NextResponse.json({ error: "Anoma API error" }, { status: 502 });
      }
      const data = await res.json();
      return NextResponse.json(data);
    }

    // Fallback demo data
    const demo = [
      { id: "1", type: "Swap", amount: 1.2, token: "ETH", tx: "0xaaa", status: "fulfilled", date: "2025-09-15" },
      { id: "2", type: "Stake", amount: 3, token: "XAN", tx: "0xbbb", status: "pending", date: "2025-09-14" },
      { id: "3", type: "Swap", amount: 0.5, token: "XAN", tx: "0xccc", status: "pending", date: "2025-09-13" },
    ];
    return NextResponse.json(demo);
  } catch (e) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
