import { notFound } from "next/navigation";
// import Client_ProductLayout from "./client_layout"
import { get_product_info_lite } from "@/app/api/product/route";

// // Static gen with code: 
// // ??
export const product_back_path:any = {1:'economy_book', 2:'economy_book', 3: 'economy_book', 4:'technology_book' ,5:'history_book'};

// // Static gen:
// // ??
export const available_product = [1,2,3,4,5,6,7,8,9,10,11,12,13,14];

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
