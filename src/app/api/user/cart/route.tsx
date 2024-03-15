import { type NextRequest } from 'next/server'
import { get_product_info_lite } from '@/app/component/server_side_stuff';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const queries = searchParams.get('id');
  // query is "hello" for /api/search?query=hello
    
    await new Promise(r => setTimeout(r, 1000));
    // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY!,
    //   },
    // })
    // const product = await res.json()

    const data = [{id:1,amount:2,book:get_product_info_lite(1)},{id:2,amount:1,book:get_product_info_lite(2)}]
   
    return Response.json({ data })
  }

// export type Book_Detail = {
//     name:string,//lite
//     price:number,//lite
//     total_rate:number,//lite
//     sold_num:number,//lite
//     language:string,
//     category:string,
//     rate_point:number,
//     description:string,
//     img_list:string[], //lite: one image
//     available_num:number,
//     detail_rating?:{rate:number,count:number}
//     detail_cmt?:{user_name:string,cmt:string,rate:number,likes:number,response:{cmt:string,user_name:string}}
//     related_product?:Book_Info_Lite[],
//   }