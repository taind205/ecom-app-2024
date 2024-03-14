import { Loading_UI } from "@/app/component/client_component";
import { Skeleton } from "antd";
import SkeletonImage from "antd/es/skeleton/Image";
import SkeletonInput from "antd/es/skeleton/Input";
import { shop_page_div_cln } from "./page";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className={shop_page_div_cln[1]}>
    {[1,2,3,4,5,6,7].map((v,index)=> 
    <div key={index}
     className={shop_page_div_cln[2]}>
      <div className={shop_page_div_cln[3]}>
        <SkeletonImage active style={{height:80*4*4/5, width:60*4}}/>
      </div>
      <div className={shop_page_div_cln[4]}>
        <Skeleton title={false} paragraph={{ rows: 2 }} active/>
      </div>
    </div>
    )}
  </div>
  }

