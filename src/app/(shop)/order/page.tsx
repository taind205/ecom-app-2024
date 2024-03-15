'use client'

import { Button, Modal, Spin, Table, Tag } from "antd";

import type { TableColumnsType } from 'antd';
import { useContext, useEffect, useState } from "react";
import { LangContext } from "../client_layout";
import { ShortTimePeriodString } from "@/app/language";
import { Book_Info_Lite, Cart_Item, OrderInfo_DataType, domain } from "@/app/component/data_type";
import Word from "@/app/language";
import { LoadingOutlined } from "@ant-design/icons";
import { OrderDetail_Table, num_to_price } from "@/app/component/function";
import { darkmode_text_config_cln } from "@/app/component/css_classname";

const OrderPage: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [items, setItems] = useState<Cart_Item[]>([]);
    const [data, setData] = useState<OrderInfo_DataType[]>([]);
    const lang = useContext(LangContext);
    useEffect(()=>{
        getData();
    },[])

    const showModal = () => {
        setIsModalOpen(true);
      };

    const handleOk = () => {
    setIsModalOpen(false);
    };

    const handleCancel = () => {
    setIsModalOpen(false);
    };

    const onOpenDetail = (items:Cart_Item[]) =>{
        setIsModalOpen(true);
        setItems(items);
    }

    async function getData() {
        const response = await fetch(domain+'/api/user/order?id=1');
        const j = await response.json();
        setData(j.data);
        setIsLoading(false);
      }

    return(
        <div className="p-2 sm:p-4 lg:p-6 xl:p-8">
            <div className={darkmode_text_config_cln+" relative bg-white dark:bg-slate-900 flex flex-col justify-center items-center gap-2 py-4 rounded-lg"}>
            <b className="text-xl">{Word.my_order[lang]}</b>
            <Table
            columns={columns(lang)}
            expandable={{
                expandedRowRender: (record) => expand_row(record, onOpenDetail, lang),
                // rowExpandable: (record) => true,
            }}
            dataSource={data}
            />
            {isLoading?<Spin className='absolute top-[80px] z-10 py-4 px-4' indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/>:<></>}
            </div>
            <Modal open={isModalOpen} onOk={handleOk} okButtonProps={{type:'default'}} 
                cancelButtonProps={{style:{display:'none'}}} onCancel={handleCancel}>
                {OrderDetail_Table(items,lang)}
            </Modal>
        </div>
  )};

export default OrderPage;


  const columns: (lang:string)=>TableColumnsType<OrderInfo_DataType> = (lang:string) => [
    { title: Word.order_date[lang], dataIndex: 'order_date', key: 'order_date',
        render:(v)=> <p>{new Date(v).toLocaleString()}</p> },
    { title: Word.status[lang], dataIndex: 'status', key: 'status', filters: [
        {
            text: Word.pending[lang],
            value: '1',
        },{
            text: Word.awaiting_delivery[lang],
            value: '2',
        },{
            text: Word.delivering[lang],
            value: '3',
        },{
            text: Word.complete[lang],
            value: '4',
        },{
            text: Word.cancelled[lang],
            value: '5',
          }],
      onFilter: (value, record) => record.status==Number(value),
      filterSearch: true,
        render: (v,record) => <Tag color={v==5? 'red' : v==4||v==3 ? 'green' : 'blue'}>
        {Word[status[Number(record.status)]][lang]}
      </Tag> },
    { className:'hidden sm:table-cell', title: Word.buyer_name[lang], dataIndex: 'fullname', key: 'fullname' },
    { className:'hidden sm:table-cell', title: Word.total[lang], dataIndex: 'total_price', key: 'total_price' },
  ];

const expand_row = (record:OrderInfo_DataType, setItems:(items: Cart_Item[]) => void, lang:string) => {

    // let items_price = 0;
    // for(const item of record.product) items_price+=item.price;
    const date_range = ShortTimePeriodString(new Date(record.shipment_info.range[0]), 
    new Date(record.shipment_info.range[1]), lang);

    return <div className="flex flex-col gap-2 p-2 items-center">
            <div className="flex flex-col">
                <p>{Word.buyer_name[lang]+': '+ record.fullname}</p>
                <p>{Word.buyer_phone_num[lang]+': '+ record.phone}</p>
                <p>{Word.buyer_email[lang]+': '+ record.email}</p>
                <p>{Word.delivery_address[lang]+': '+record.address}</p>
                {record.cancel_date? <p>{Word.cancel_date[lang]+': '+ new Date(record.cancel_date).toLocaleString()}</p>:
                record.delivery_date? <p>{Word.delivery_date[lang]+': '+ new Date(record.delivery_date).toLocaleString()}</p> :
                <p>{Word.expected_date_delivery[lang]+': '+ date_range}</p>}
                <p>{Word.shipping_fee[lang]+num_to_price(record.shipment_info.price)}</p>
                <p>{Word.subtotal[lang]+num_to_price(record.total_price-record.shipment_info.price)} </p>
                <b>{Word.total[lang]+': '+num_to_price(record.total_price)} </b>
                <p>{Word.payment_method[lang]+': '+ Word[payment_method[record.payment_method_id]][lang]}</p>
            </div>
            <div className="flex gap-2 p-2">
                <Button onClick={() => setItems(record.product)}>{Word.view_items[lang]}</Button>
            {record.status==1||record.status==2? 
                <Button danger>{Word.cancel_order[lang]}</Button> :<></>}
            </div>
    </div>
}

const status:{[key:number]:string} = {
    1:'pending',
    2:'awaiting_delivery',
    3:'delivering',
    4:'complete',
    5:'cancelled'
}

const payment_method:{[key:number]:string} = {
    1:'cod_payment',
    2:'zalopay',
    3:'credit_card'
}

