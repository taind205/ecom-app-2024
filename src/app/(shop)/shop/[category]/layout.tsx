import { notFound, redirect } from "next/navigation";
import Client_ShopSidebarLayout from "./client_layout"
import { available_category } from "./public_const";

import type { Metadata, ResolvingMetadata } from 'next'
import Word from "@/app/language";
// import Loading from "./loading";
// import { Suspense } from "react";

type Props = { params: { category: string }, searchParams:{[key: string]: string | string[] | undefined} }
  
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.category
  
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
  
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  
  return {
    title: (params.category=='all'?Word.all_product['EN']:'All '+Word[params.category]['EN'])+' from Ecom App 2024'
  }
}

export default function Server_ShopSideBarLayout({
    params, 
    children, // will be a page or nested layout
  }: {
    params: { category: string },
    children: React.ReactNode
  }) {
    
    if(!available_category.includes(params.category))
      redirect('/notfound');
    else 
    return (
      <Client_ShopSidebarLayout category={params.category}>
        {children}
      </Client_ShopSidebarLayout>
    );
}