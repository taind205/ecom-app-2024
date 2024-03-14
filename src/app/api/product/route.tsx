import { type NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const params = searchParams.get('id');
  const queries = params?.split(',',20);
  // query is "hello" for /api/search?query=hello
    
    await new Promise(r => setTimeout(r, 2000));
    // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY!,
    //   },
    // })
    // const product = await res.json()

    const data = queries?queries.map((q)=> product_info_lite[Number(q)]):[]
   
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
  

export const get_product_info_lite:(id:number)=>Book_Info_Lite = (id)=>product_info_lite.find((v)=>v.id==id)!

export const get_product_info_lite_by_term:(term:string)=>Book_Info_Lite[] = (term) =>
   product_info_lite.filter((p)=> p.name.toLowerCase().includes(term.toLowerCase())).slice(0,10)

const product_info_lite:Book_Info_Lite[] = Object.entries(product_info).map(([k,b]) =>
       ({id:Number(k),name:b.name,price:b.price,img:b.img_list[0],available_num:b.available_num,
            category:b.category,sold_num:b.sold_num,rate_point:b.rate_point}) )

import { product_info } from "@/app/component/server_side_stuff";
import { Book_Info_Lite } from '@/app/component/data_type';
