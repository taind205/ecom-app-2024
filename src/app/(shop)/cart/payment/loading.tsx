'use client'
import { Skeleton } from "antd";
import SkeletonNode from "antd/es/skeleton/Node";
import { payment_page_div_cln } from "@/app/component/css_classname";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className={payment_page_div_cln[1]}>
    <div className={payment_page_div_cln[2]}>
      <SkeletonNode style={{width:240, height:300}} active/>
    </div>
        <div className={payment_page_div_cln[3]}>
        <Skeleton style={{width:300}} paragraph={{rows:6}} active/>
      </div>
    </div>
  }

