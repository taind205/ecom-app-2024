export type Book_Detail = {
    name:string,
    price:number,
    total_rate:number,
    language:string,
    category:string,
    rate_point:number,
    sold_num:number,
    description:string,
    img_list:string[],
    available_num:number
  }

export type Book_Info_Lite = {
  id:number,
    name:string,
    price:number,
    // total_rate:number,
    rate_point:number,
    sold_num:number,
    category:string,
    img:string,
    available_num:number
  }
  
export type Cart_Item = {id:number,amount:number,book:Book_Info_Lite}

export type OrderInfo_DataType = {
  key: React.Key;
  id: number;
  fullname: string;
  phone: string;
  email: string;
  address: string;
  order_date: string;
  status:number;
  note:string;
  cancel_reason?:string;
  cancel_date?:string;
  delivery_date?:string;
  shipment_info: {range:[start:string, end:string],price:number};
  payment_method_id: number;
  product: Cart_Item[];
  total_price:number;
}

export type Rating_Star = 'five_star'|'four_star'|'three_star'|'two_star'|'one_star'

export type Rating_Data = {[key in Rating_Star]:number};

export type User_Rate = {username:string, rate:1|2|3|4|5, cmt?:string, time:string, likes:number, response?:string, img:string[]}

export type Account_Info = {id:string, fullname:string}

export const domain = process.env.NEXT_PUBLIC_BE_DOMAIN;