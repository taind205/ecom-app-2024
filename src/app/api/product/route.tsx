import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const params = searchParams.get('id');
  const queries = params?.split(',',20);
  // query is "hello" for /api/search?query=hello
    
    await new Promise(r => setTimeout(r, 1000));
    // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY!,
    //   },
    // })
    // const product = await res.json()

    const data = queries?queries.map((q)=> get_product_info_lite(Number(q))):[]
   
    return Response.json({ data })
  }

import { get_product_info_lite, product_info } from "@/app/component/server_side_stuff";
