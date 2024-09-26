import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { url, format } = await request.json();

  console.log(`Received request to download ${url} in ${format} format`);

  return NextResponse.json({ message: `Download started for ${url} as ${format}` });
}