import { Table, TableColumnsType, Image } from "antd";
import { Cart_Item } from "./data_type";
import Word from "../language";

export const GetTotalAmount = (cart: Cart_Item[], selectedItems:number[]) =>
 {let t=0; for(const i of selectedItems) t+=(cart.find((e) => e.id==i)?.amount||0); return t;} 
    
export const GetTotalPrice = (cart: Cart_Item[], selectedItems:number[]) =>
{let t=0; for(const i of selectedItems) t+=(cart.find((e)=>e.id==i)?.book.price||0)*(cart.find((e) => e.id==i)?.amount||0); return t;}

export const OrderDetail_Table = (items:Cart_Item[], lang:string) => 
  <Table className="" columns={columns(lang)}
    dataSource={items} rowKey={(r)=>r.id}
  />

  
const columns:(lang:string)=>TableColumnsType<Cart_Item> = (lang)=> [
    {
      className:'sm:max-w-[30%]',
      title: Word.item[lang],
      dataIndex: '',
      render: (t,record) => 
      <>
        <a className="hidden sm:table-cell">{record.book.name}</a>
        <div className="flex flex-col sm:hidden gap-2">
          <a className="">{record.book.name}</a>
          <div className="flex">
           <Image alt={record.book.name+' Image'} style={{maxHeight:'150px'}} src={record.book.img}></Image>
           <div className="p-2 pl-4">
            <p>{Word.price[lang]+': '}<b>{num_to_price(record.book.price)}</b></p>
            <p>{Word.amount[lang]+': '}<b>{record.amount}</b></p>
            </div>
           </div>
        </div>
      </>,
    },
    {
      className:'hidden sm:table-cell sm:max-w-[40%]',
      dataIndex: '',
      render: (i, record) => <Image alt={record.book.name} style={{maxHeight:'150px'}} src={record.book.img}></Image>
    },
    {
      className:'hidden sm:table-cell',
      title: Word.price[lang],
      dataIndex: '',
      render:(i,r)=>num_to_price(r.book.price)
    },
    {
      className:'hidden sm:table-cell',
      title: Word.amount[lang],
      dataIndex: 'amount',
  }]

  
export function num_to_price(value?:number){
    const billion = 1000000000;
    const million = 1000000;
    let text:string="";
  
    if(!value)
      return '0 ₫';
    if(value>=billion)
    text+=prezero(Math.floor(value/billion))+'.';
    if (value>=million)
    text+=prezero(Math.floor(value%billion/million))+'.';
    if(value>1000) 
    text+=prezero(Math.floor(value%million/1000))+'.'+prezero(value%1000);
    else
    text+=value;
    while(text.charAt(0)=='0') text=text.substring(1);
    text+=' ₫';
    return text;
  }

  
function prezero(value:number){
    if(value<10) return '00'+ value;
    else if(value<100) return '0'+value;
    else return value;
  }