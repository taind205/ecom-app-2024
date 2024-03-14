'use client'
import { Skeleton } from "antd";
import { cart_page_div_cln } from "./page";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div className={cart_page_div_cln[1]}>
    <div className={cart_page_div_cln[2]}>
      <Skeleton.Input active/>
      <Skeleton.Input active/>
      <Skeleton.Button active/>
    </div>
      <Skeleton.Node active style={{width:240,height:300}} />
  </div>
  }

