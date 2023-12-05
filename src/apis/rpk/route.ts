import { NextResponse } from 'next/server';

import { serverEnv } from 'env/server.mjs';

export async function POST(req: Request) {
  console.log('url11111111111111111111111111111', serverEnv.ALCHEMY_RPC_URL);
  const res = await fetch(serverEnv.ALCHEMY_RPC_URL, {
    method: 'POST',
    headers: {
      ...req.headers
    },
    body: JSON.stringify(await req.json())
  });

  return NextResponse.json(await res.json());
}
