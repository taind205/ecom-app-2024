'use client'

import { Button, Image, Input, Popconfirm, Table, notification } from "antd";
import type { TableColumnsType } from 'antd';
import { useContext, useEffect, useState } from "react";
import { LangContext, CartContext, bg_color_className } from "../client_layout";
import { Cart_Item } from "@/app/component/data_type";
  
const columns:(setValue:Function, removeCartItem:Function, lang:string)
             => TableColumnsType<Cart_Item> = (setValue, removeCartItem, lang) => [
    {
      className:'sm:max-w-[30%]',
      title: Word.item[lang],
      dataIndex: '',
      render: (t: string,record:Cart_Item) => 
        <>
          <a className="hidden sm:table-cell">{record.book.name}</a>
          <div className="flex flex-col sm:hidden gap-2">
            <a className="">{record.book.name}</a>
            <div className="flex">
             <Image alt={record.book.name+' Image'} style={{maxHeight:'150px'}} src={record.book.img}></Image>
             <div className="p-2 pl-4">
              <p>{Word.price[lang]+': '}<b>{num_to_price(record.book.price)}</b></p>
              <p>{Word.amount[lang]+':'}</p>
              <div className='flex items-center w-[85px] mb-2'>
                <Button icon={<MinusSquareOutlined className="text-xl" />} className="border-none" size="large"
                      onClick={()=> (record.amount-1)>0 ? setValue(record.id,record.amount-1):false}></Button>
                  <Input className='text-center' value={record.amount} onChange={(e) => 
                    { Number(e.target.value)? setValue(record.id,e.target.value) :<></> 
                    }}/>
                <Button icon={<PlusSquareOutlined className="text-xl"/>} className="border-none" size="large"
                      onClick={()=> setValue(record.id,record.amount+1)}></Button>
              </div>
              <Popconfirm
                  title={Word.remove_item[lang]}
                  description={Word.remove_item_warn[lang]}
                  onConfirm={()=>removeCartItem(record.id)}
                  onCancel={()=><></>}
                  okText={Word.yes[lang]}
                  cancelText={Word.no[lang]}
                  okType="danger"
                  ><DeleteOutlined className="text-xl"/></Popconfirm>
              </div>
             </div>
          </div>
        </>,
    },
    {
      className:'hidden sm:table-cell sm:max-w-[40%]',
      title: '',
      dataIndex: '',
      render: (img:string, record) => <Image alt={record.book.name+' Image'} style={{maxHeight:'150px'}} src={record.book.img}></Image>
    },
    {
      className:'hidden sm:table-cell',
      title: Word.price[lang],
      dataIndex: '',
      render:(v,r) => r.book.price
    },
    {
      className:'hidden sm:table-cell',
    title: Word.amount[lang],
    dataIndex: 'amount',
    render: (amount:number,record:Cart_Item) =>
    <div className='flex items-center w-[85px]'>
        <Button icon={<MinusSquareOutlined className="text-xl" />} className="border-none" size="large"
              onClick={()=> (record.amount-1)>0 ? setValue(record.id,record.amount-1):false}></Button>
          <Input className='text-center' value={record.amount} onChange={(e) => 
            { Number(e.target.value)? setValue(record.id,e.target.value) :<></> }}/>
        <Button icon={<PlusSquareOutlined className="text-xl"/>} className="border-none" size="large"
              onClick={()=> setValue(record.id,record.amount+1)}></Button></div>
    },
    {
      className:'hidden sm:table-cell',
    title: '',
    dataIndex: '',
    key: 'x',
    render: (record:Cart_Item) => <Popconfirm
                title={Word.remove_item[lang]}
                description={Word.remove_item_warn[lang]}
                onConfirm={()=>removeCartItem(record.id)}
                onCancel={()=><></>}
                okText={Word.yes[lang]}
                cancelText={Word.no[lang]}
                okType="danger"
                ><DeleteOutlined className="text-xl"/></Popconfirm>
    },
  ];
  
import { UseState_SelectedItemsContext } from "../client_layout";
import Link from "next/link";
import Word, { Sentence } from "@/app/language";
import { DeleteOutlined, MinusSquareFilled, MinusSquareOutlined, PlusSquareFilled, PlusSquareOutlined } from "@ant-design/icons";
import { UpdateCart_Context } from "../client_layout";
import { GetTotalAmount, GetTotalPrice, num_to_price } from "@/app/component/function";
import { cart_page_div_cln } from "@/app/component/css_classname";
// export const data:(cart:{id:number,amount:number}[])=>CartItem[] = (cart) => {
//     console.log(cart);
//   return cart.map((v) => ({
//     key: v.id,
//     name: product_info[v.id].name,
//     img: product_info[v.id].img_list[0],
//     price: product_info[v.id].price,
//     amount: v.amount, }))
// }
    
type NotificationType = 'success' | 'info' | 'warning' | 'error'; 
    
const CartPage = () => {
    const lang= useContext(LangContext);
    const cart = useContext(CartContext);
    const updateCart = useContext(UpdateCart_Context);
    const [selectedItems, setSelectedItems] = useContext(UseState_SelectedItemsContext);
    const [api, contextHolder] = notification.useNotification();

    useEffect(()=>setSelectedItems(cart.map((v)=>v.id)),[])

    const removeCartItem = (i_id:number)=> {
      updateCart(i_id,0);}


    const getCartItem_AvailableNum = (i_id:number) => cart.find((v)=>v.id==i_id)?.book.available_num||0
    
        // rowSelection object indicates the need for row selection
    const rowSelection = {
        onChange: (selectedRowKeys: React.Key[], selectedRows: Cart_Item[]) => {
        console.log('selectedRowKeys:',selectedRowKeys, 'selectedRows: ', selectedRows);
        setSelectedItems(selectedRows.map((r)=>(r.id) ));
        },
        selectedRowKeys:selectedItems,
        getCheckboxProps: (record: Cart_Item) => ({
        disabled: record.amount > getCartItem_AvailableNum(Number(record.id)), // Column configuration not to be checked
        name: record.book.name,
        }),
    };

    
    return(<> {contextHolder}
      
      <div className={cart_page_div_cln[1]}>
        <div className={cart_page_div_cln[2]}>
          <p>{Sentence.select_n_items(GetTotalAmount(cart, selectedItems))[lang]}</p>
          <p>{Word.subtotal[lang]+num_to_price(GetTotalPrice(cart, selectedItems))}</p>
          <Button disabled={GetTotalAmount(cart, selectedItems)<1}><Link href={'./cart/payment'}>{Word.make_payment[lang]}</Link></Button>
        </div>
        <Table className="lg:w-2/3"
        rowSelection={{
          type: 'checkbox',
          ...rowSelection,
        }}
        columns={columns(updateCart, removeCartItem, lang)}
        dataSource={cart}
        rowKey={(r:Cart_Item)=>r.id}
      />
      </div>
    </>)
}

export default CartPage;
