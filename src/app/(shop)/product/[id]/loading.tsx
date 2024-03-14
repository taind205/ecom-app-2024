import { Loading_UI } from "@/app/component/client_component";
import { Skeleton } from "antd";
import { firstdiv_cln, product_page_div_cln } from "./page";
import SkeletonImage from "antd/es/skeleton/Image";
import { breadcrumb_cln } from "../../shop/[category]/client_layout";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <>
    <div className={breadcrumb_cln}><Skeleton className="py-4" active paragraph={{rows:0}}/></div>
    <div className={product_page_div_cln[1]}>
    <div className={product_page_div_cln[2]}>
      <div className={product_page_div_cln[3]}>
        <SkeletonImage active style={{height:340, width:280}}/>
      </div>
      <div className={product_page_div_cln[4]}> 
        <div className={product_page_div_cln[5]}>
          <Skeleton style={{minWidth:280}} active title={false} paragraph={{rows:3}}/>
        </div>
        <div className={product_page_div_cln[6]}>
          <Skeleton style={{minWidth:280}} active paragraph={{rows:3}}/>
        </div>
        <div className={product_page_div_cln[7]}>
          <Skeleton style={{minWidth:280}} active paragraph={{rows:3}}/>
        </div>
        <div className={product_page_div_cln[8]}>
          <Skeleton style={{minWidth:280}} active paragraph={{rows:7}}/>
        </div>
      </div>
    </div>
    <div className={product_page_div_cln[9]}>
      <Skeleton style={{minWidth:280}} active paragraph={{rows:0}}/>
      {[1,2,3].map((v) => <Skeleton key={v} active avatar paragraph={{ rows: 4 }} />)}
    </div>
  </div></>
  }

