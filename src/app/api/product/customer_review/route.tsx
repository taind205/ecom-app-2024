import { user_rate } from '@/app/component/server_side_stuff';
import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const page = Number(searchParams.get('p'))||0;

    await new Promise(r => setTimeout(r, 1000));
    const data = user_rate.slice((page-1)*5,page*5);

    return Response.json({ data })
  }
