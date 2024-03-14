'use client'
import Link from 'next/link';
import { Breadcrumb, Button, Layout, Menu } from 'antd';
import Word from "@/app/language";
import { Suspense, useContext, useState } from 'react';
import { LangContext } from '../../client_layout';
import { bg_color_className } from '../../client_layout';
import SideBar, { Fill } from "../../../component/sidebar/sidebar1";
import { Content } from "@/app/component/client_component";
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

import { available_category, available_path, back_path } from './public_const';
import { num_to_price } from './page';
import Loading from './loading';
import { darkmode_text_config_cln } from '../../product/[id]/page';

// Static gen with code: 
// for(const [key, value] of Object.entries(available_path)) {
//   	for (const path of value)
//     back_path[path]=key; }


export default function Client_ShopSidebarLayout({
    category, children, // will be a page or nested layout
  }: {
    category: string ,
    children: React.ReactNode
  }) {
    
    const [isShowSidebar, setIsShowSidebar] = useState(false);
    const searchParams = useSearchParams();
    const lang = useContext(LangContext);
    const pathName = usePathname();
    const router = useRouter();
    
    const lang_filt = searchParams.getAll('lang').filter((v)=> v.split(" ").join("")!='');
    const priceFrom_filt = Number(searchParams.get('priceFrom'));
    const priceTo_filt = Number(searchParams.get('priceTo'));
    const query_filt = searchParams.get('q');

    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <Custom_Brcr pathName={category}/>
            <Layout className={bg_color_className} 
            style={{ padding: '12px 0',}}
            >
              <div className='flex flex-col md:flex-row relative sm:pl-2 md:pl-4 lg:pl-8 xl:pl-12'>
               <div className='hidden md:flex flex-col relative justify-end'><SideBar available_path={available_path[category]||[]}/></div>
               
                {isShowSidebar? <div className='md:hidden flex flex-col w-full sticky top-0 z-10 '>
                <button className={'text-white dark:text-black '+'bg-slate-800 dark:bg-slate-300 p-1 text-lg'}
                 onClick={(e)=>setIsShowSidebar(false)}>{Word.hide_menubar[lang]}</button>
                  <SideBar available_path={available_path[category]||[]}/></div>:
                  <button className={'text-white dark:text-black '+'md:hidden w-full bg-slate-800 dark:bg-slate-300 sticky p-1 text-lg top-0 z-10'}
                         onClick={(e)=>setIsShowSidebar(true)}>{Word.show_menubar[lang]}</button>}
             
            
            <Content style={{ paddingLeft: '', minHeight: 280 }}>
            <section className="mx-4">
                <div className='m-2 p-2 text-lg text-black dark:text-white'>
                {query_filt? <p>{Word[category=='all'?'all_product':category][lang]+' '+Word.book_searching[lang]+' "'+query_filt+'"'}</p>:<></>}

                <p>{get_filter_text(lang,lang_filt ,priceFrom_filt , priceTo_filt )}</p>
                {(lang_filt.length>0 || priceTo_filt || priceFrom_filt)? 
                <Button onClick={()=>Fill(pathName+ (query_filt?'?q='+query_filt:''),router)}>{Word.delete_filter[lang]}</Button> : <></>}
                </div>
            {children}
            
      </section></Content>
        </div>
            </Layout>
        <nav></nav>
   
      </section>
    )
  }
 


const get_filter_text = (text_lang:string, lang:string[], price_from?:number, price_to?:number ) =>
  {
    let text:string='';
    if(price_from || price_to || lang.length>0) text+=Word.book_filting[text_lang];

    lang.length>0? text+=' '+Word.book_filting_lang[text_lang]+' '+lang.map((v)=>' '+Word['lang_'+v][text_lang])
    //  : text+=' '+Word.book_filting_lang[text_lang]+' '+Word[('lang_'+lang)][text_lang]
    :'';

    price_to ? text+=' '+Word.book_filting_price1[text_lang]+' '+num_to_price(price_from)+' '
                      +Word.book_filting_price2[text_lang]+' '+num_to_price(price_to) 
    : price_from ? text+=' '+Word.book_filting_price1[text_lang]+' '+num_to_price(price_from) : '';

    return text;
  }

export const breadcrumb_cln='text-base pl-4 sm:pl-6 lg:pl-8 xl:pl-12';

const Custom_Brcr:React.FC<{pathName:string}> = ({pathName}) =>  { 
  if(pathName=='fill') return <></>;
  let p:string = pathName;
  let path_list:string[] = [p];
  while(p=back_path[p]) { path_list.unshift(p);}
  return (
  <Breadcrumb className={breadcrumb_cln} style={{ margin: '16px 0' }} items={  path_list.map((v)=>({title:<Link href={'/shop/'+v}>{Word[v][useContext(LangContext)]}</Link>}))  }>
  </Breadcrumb>
) }

  

  //Dep
  
    // const path=['shop',...(params.slug||[])]; // ex:['shop','book','eco_book']
    // console.log(path);
    // console.log(path[-1]);
    // console.log(available_path[path[-1]]);

    // for(const i in path)
    // {
    //     if(Number(i)>0 && !available_path[path[Number(i)-1]].includes(path[i]))
    //         {alert("404 ERROR: Page not found!");
    //         return;}
    // }