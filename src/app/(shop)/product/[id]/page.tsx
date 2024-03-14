import { Layout, Rate, Typography } from "antd";
import {Buy_Options, Custom_Brcr, Delivery_Options, Img_Preview, Rating_Sold, ReadMore_Description, User_Rating} from "./client_component";
import Word from '@/app/language';
import { num_to_price } from "../../shop/[category]/page";
import Image from "next/image";

const { Text, Link } = Typography;

export const darkmode_text_config_cln = 'text-black dark:text-white ';
export const firstdiv_cln = 'border-2 border-slate-200 dark:border-slate-800 card py-4 px-2 sm:px-4 rounded-xl '; 
export const text_slate_cln = 'text-slate-500 dark:text-slate-400 ';
export const bg_slate_cln = 'bg-slate-300 dark:bg-slate-700 ';

export const product_page_div_cln = 
      {1:darkmode_text_config_cln+"flex flex-col gap-6 items-center",
      2:'flex flex-col md:flex-row items-center md:items-start sm:px-4 gap-6 justify-center h-fit',
      3:firstdiv_cln+ "md:sticky md:top-0 md:max-w-[45vw] lg:max-w-[40vw]",
      4:'flex flex-col gap-2 max-w-[95vw] md:max-w-[45vw] lg:max-w-[40vw]',
      5:firstdiv_cln+" flex flex-col gap-2",
      6:firstdiv_cln+" flex flex-col gap-2",
      7:firstdiv_cln+" flex flex-col gap-2",
      8:firstdiv_cln+" flex flex-col gap-2",
      9:firstdiv_cln+"flex flex-col px-2 sm:px-4 max-w-[95vw] sm:max-w-[90vw] sm:w-3/4 lg:w-2/3 lg:max-w-[80vw]"}

export default async function Page({ params }: { params: { id: number } }) {

  await new Promise(r => setTimeout(r, 2000));

  const book_id = params.id;
  let p:string = product_info[book_id].category;
  let path_list:string[] = [p];
  while(p=back_path[p]) { path_list.unshift(p);}

    return (<section>
      {/* Include shared UI here e.g. a header or sidebar */}
      <Custom_Brcr book_name={product_info[book_id].name} path_list={path_list}/>
          <Layout className={bg_color_className} 
          style={{ padding: '12px 0',}}
          >
          <div className={product_page_div_cln[1]}>
            <div className={product_page_div_cln[2]}>
              <div className={product_page_div_cln[3]}>
                <Img_Preview img_list={product_info[book_id].img_list} />
              </div>
              <div className={product_page_div_cln[4]}> 
                <div className={product_page_div_cln[5]}>
                  <p className="text-2xl">{product_info[book_id].name}</p>
                  <div className={text_slate_cln+" text-base"}>
                    <Rating_Sold rating={product_info[book_id].rate_point} sold={product_info[book_id].sold_num}></Rating_Sold>
                  </div>    
                  <p className="text-3xl">{num_to_price(product_info[book_id].price)}</p>
                </div>
                <div className={product_page_div_cln[6]}>
                  <Buy_Options book_info={get_product_info_lite(Number(params.id))}/>
                </div>
                <div className={product_page_div_cln[7]}>
                  <Delivery_Options/>
                </div>
                <div className={product_page_div_cln[8]}>
                  <ReadMore_Description>{product_info[book_id].description}</ReadMore_Description>
                </div>
              </div>
            </div>
            <div className={product_page_div_cln[9]}>
              <User_Rating rating_data={rating_data}/>
            </div>
          </div>
        </Layout>
      <nav></nav>
 
    </section>
    );
  }

import { product_info, rating_data } from "@/app/component/server_side_stuff";
import { get_product_info_lite } from "@/app/api/product/route";
import { back_path } from "../../shop/[category]/public_const";import { bg_color_className } from "../../client_layout";

