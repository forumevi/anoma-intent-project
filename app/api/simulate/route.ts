import { NextResponse } from 'next/server';

type SimReq = {
  type: 'swap' | 'stake' | string;
  from?: string;
  to?: string;
  amount?: number;
  token?: string;
};

function randHex(len = 16) {
  return '0x' + Math.random().toString(16).slice(2, 2 + len);
}

export async function POST(req: Request) {
  try {
    const body: SimReq = await req.json();
    if (!body?.type) return NextResponse.json({ error: 'Missing type' }, { status: 400 });

    if (body.type === 'swap') {
      const amount = Number(body.amount || 0);
      const from = (body.from || 'ETH').toUpperCase();
      const to = (body.to || 'USDC').toUpperCase();
      // basit ama gerçekçi rate: ETH->USDC ~1700 ± 50, diğerleri ~1 ± 0.2
      const rate = from === 'ETH' && to === 'USDC'
        ? 1700 + Math.round(Math.random() * 100 - 50)
        : Number((1 + Math.random() * 0.2).toFixed(4));
      const received = Number((amount * rate).toFixed(2));
      const tx = randHex(16);
      return NextResponse.json({ success: true, type: 'swap', from, to, amount, rate, received, tx });
    }

    if (body.type === 'stake') {
      const amount = Number(body.amount || 0);
      const token = (body.token || 'UPWARD').toUpperCase();
      const apy = Math.round(10 + Math.random() * 10); // 10-20% örnek
      const tx = randHex(16);
      return NextResponse.json({ success: true, type: 'stake', token, amount, apy, tx });
    }

    return NextResponse.json({ error: 'Unknown intent type' }, { status: 400 });
  } catch (err: any) {
    return NextResponse.json({ error: err?.message || 'unknown' }, { status: 500 });
  }
}
