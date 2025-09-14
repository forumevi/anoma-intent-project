import { NextResponse } from 'next/server';

type HistItem = {
  id?: number | string;
  type?: string;
  from?: string;
  to?: string;
  amount?: number;
  received?: number;
  tx?: string;
  token?: string;
  apy?: number;
  status?: string;
  timestamp?: string;
};

let HISTORY: HistItem[] = [];

// Get history (server memory)
export async function GET() {
  return NextResponse.json(HISTORY);
}

// Add history item (push to head)
export async function POST(req: Request) {
  try {
    const body = (await req.json()) as HistItem;
    const item = {
      id: Date.now() + Math.floor(Math.random() * 1000),
      ...body,
      timestamp: new Date().toISOString(),
    };
    HISTORY.unshift(item);
    // limit length
    if (HISTORY.length > 200) HISTORY = HISTORY.slice(0, 200);
    return NextResponse.json({ ok: true, item });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'failed' }, { status: 500 });
  }
}
