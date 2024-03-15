import { product_info } from '@/app/component/server_side_stuff';
import { type NextRequest } from 'next/server'
import { get_product_info_lite_by_term } from '@/app/component/server_side_stuff';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const term = searchParams.get('q');
  // query is "hello" for /api/search?query=hello
    
    // await new Promise(r => setTimeout(r, 1000));
    // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY!,
    //   },
    // })
    // const product = await res.json()

    const data = term? get_product_info_lite_by_term(term):get_product_info_lite_by_term('');

   
    return Response.json({ data })
  }
