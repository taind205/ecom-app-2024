import { notFound, redirect } from "next/navigation";
import Client_ShopSidebarLayout from "./client_layout"
import { available_category } from "./public_const";
// import Loading from "./loading";
// import { Suspense } from "react";


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