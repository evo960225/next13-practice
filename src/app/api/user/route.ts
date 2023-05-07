import { NextRequest, NextResponse } from 'next/server';

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}
 
export async function GET(request: Request)  {

  await sleep(4000);
  return NextResponse.json({ name: 'ohn Doe' }, {
    status: 200,
  });


}