// 'use client'
// import Link from 'next/link';
// import { Breadcrumb, Layout, Menu } from 'antd';
// import Word from "@/app/language";
// import { useContext } from 'react';
// import { LangContext } from '../../client_layout';
// import { bg_color_className } from '../../client_layout';

// // Static gen with code: 
// // for(const [key, value] of Object.entries(available_path)) {
// //   	for (const path of value)
// //     back_path[path]=key; }


// export default function Client_ProductLayout({
//     book_info, children, // will be a page or nested layout
//   }: {
//     book_info: Book_Info_Lite ,
//     children: React.ReactNode
//   }) {

//     return (
      
//     )
//   }

//   import { product_back_path } from './layout';
//   import { back_path } from '../../shop/[category]/public_const';
// import { breadcrumb_cln } from '../../shop/[category]/client_layout';
// import { Book_Info_Lite } from '@/app/component/data_type';


//   //Dep
  
//     // const path=['shop',...(params.slug||[])]; // ex:['shop','book','eco_book']
//     // console.log(path);
//     // console.log(path[-1]);
//     // console.log(available_path[path[-1]]);

//     // for(const i in path)
//     // {
//     //     if(Number(i)>0 && !available_path[path[Number(i)-1]].includes(path[i]))
//     //         {alert("404 ERROR: Page not found!");
//     //         return;}
//     // }