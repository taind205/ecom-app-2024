import { Layout, Rate, Typography } from "antd";
import {Buy_Options, Custom_Brcr, Delivery_Options, Img_Preview, Rating_Sold, ReadMore_Description, User_Rating} from "./client_component";
import Word from '@/app/language';
import Image from "next/image";

type Props = { params: { id: number } };

const { Text, Link } = Typography;

export default async function Page({ params }:Props ) {

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

import { back_path, product_info, rating_data } from "@/app/component/server_side_stuff";
import { get_product_info_lite } from "@/app/component/server_side_stuff";
import { bg_color_className } from "../../client_layout";
import { product_page_div_cln, text_slate_cln } from "@/app/component/css_classname";
import { num_to_price } from "@/app/component/function";

