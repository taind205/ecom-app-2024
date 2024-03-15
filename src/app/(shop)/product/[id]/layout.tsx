import { notFound } from "next/navigation";
// import Client_ProductLayout from "./client_layout"

import type { Metadata, ResolvingMetadata } from 'next'
import { available_product, product_info } from "@/app/component/server_side_stuff";

type Props = { params: { id: number } }
  
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id
  
  // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
  
  // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []
  
  return {
    title: product_info[id].name,
    description: product_info[id].description.slice(0,150)+'...', //description meta shouldn't too long
    openGraph: {
      images: [product_info[id].img_list[0]],
    },
  }
}

export default function Server_ShopSideBarLayout({
    params, 
    children, // will be a page or nested layout
  }: {
    params: { id: number },
    children: React.ReactNode
  }) {
    if(available_product.includes(Number(params.id)))
      return (<>
        {children}
        
        </>
    );
    else notFound();
}

// <Client_ProductLayout book_info={get_product_info_lite(params.id)}>
// </Client_ProductLayout>
