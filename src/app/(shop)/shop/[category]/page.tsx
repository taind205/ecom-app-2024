import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
// import {Text} from '@/app/component/client_component';
// import Client_ShopSidebarLayout from "./client_layout";
import Loading from "./loading";
import { notFound } from "next/navigation";
import NotFoundIcon_Img from "@/../public/icon/404_not_found.png"
import { available_category, back_path, product_info } from "@/app/component/server_side_stuff";
import { Rate } from "antd";
import { num_to_price } from "@/app/component/function";
import { shop_page_div_cln } from "@/app/component/css_classname";

type Props = { params: { category: string }, searchParams:{[key: string]: string | string[] | undefined} }



function NotFoundIcon(){
  return(
  <Image src={NotFoundIcon_Img}
  width={256}
  height={256}
  alt="404 not found"
  />)
}
// export function generateStaticParams() {
//   let list_path:any[] = [];
//   Object.values(available_path).forEach((a)=>list_path=list_path.concat(a));
//   console.log(list_path.map((v)=>({category:v})));
//   return list_path.map((v)=>({category:v}));
// }

async function ProductList({categoryRange, cond}:{categoryRange:string[],
     cond:{priceFrom?:number,priceTo?:number,lang?:string | string[],query?:string}}){


  await new Promise(r => setTimeout(r, 2000));
  // const data = await fetch('http://facebook.com/coffee/hot')
  // console.log('load complete (',Date.now(),'): ',data[0].title,);
  // const i = data[0].title;
  
  const price_range = [cond.priceFrom,cond.priceTo];

  let products = Object.entries(product_info).filter(([k,v]) => categoryRange.includes(v.category));
  if(cond.lang)
    if(!Array.isArray(cond.lang)) products = products.filter(([k,v])=> v.language==cond.lang);
    else products = products.filter(([k,v])=> {for(const l of cond.lang||[]) if(v.language==l) return true; return false;});
  
  products = products.filter(([k,v])=> price_range[1]?
   price_range[0]? (v.price <= price_range[1]) && (v.price >= price_range[0]) : v.price <= price_range[1] : true)
   

  if(cond.query) 
    {const q:string=cond.query; products = products.filter(([k,v])=> v.name.toLowerCase().includes(q.toLowerCase())); }

  if(products.length<1)
  return(<div className="w-3/4 flex m-4 p-4 justify-center">
    <NotFoundIcon/>
  </div>)

  return(<>
  <div className={shop_page_div_cln[1]}>
    {products.map(([k,v],index)=> 
    <Link key={index}  href={'../product/'+k} 
     className={shop_page_div_cln[2]}>
      <div className={shop_page_div_cln[3]}>
        <Image alt={v.name+" Image"} src={v.img_list[0]}	fill={true} className="object-contain"></Image>
      </div>
      <div className={shop_page_div_cln[4]}>
        <p className="truncate">{v.name} </p>
        <div className="flex justify-between items-center">
          <p className="font-semibold">{num_to_price(v.price)}</p>
          <Rate className="text-[16px] h-[16px]" allowHalf disabled defaultValue={v.rate_point} />
        </div>
      </div>
    </Link>
    )}
  </div>
  </>
  )
}

export default function Page({ params, searchParams }:Props ) {
  let category_range:string[]=[params.category];
  if(!available_category.includes(params.category))
    return notFound();
  const get_child_category = (parent_category:string) => {
  for(const [k,v] of Object.entries(back_path))
  {
    if(v==parent_category) 
      {category_range.push(k); get_child_category(k); }
  }}

  const q=Array.isArray(searchParams.q)? searchParams.q[0] : searchParams.q;

  get_child_category(params.category);

    return (
      <div className="text-black dark:text-white">
          <ProductList categoryRange={category_range} cond={
              {query: q,
                priceFrom:Number(searchParams.priceFrom),
              priceTo:Number(searchParams.priceTo),
              lang:searchParams.lang||undefined}}/>
      </div>);
  }

//   [
//     {
//       title: 'Home',
//     },
//     {
//       title: <a href="">Application Center</a>,
//     },
//     {
//       title: <a href="">Application List</a>,
//     },
//     {
//       title: 'An Application'
//     },
//     ]