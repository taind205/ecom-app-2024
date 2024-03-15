import { type NextRequest } from 'next/server'
import { get_product_info_lite } from '@/app/component/server_side_stuff';
import { OrderInfo_DataType } from '@/app/component/data_type';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const queries = searchParams.get('id');
  // query is "hello" for /api/search?query=hello
    
    await new Promise(r => setTimeout(r, 2000));
    // const res = await fetch(`https://data.mongodb-api.com/product/${id}`, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY!,
    //   },
    // })
    // const product = await res.json()

    const data = orders_info
   
    return Response.json({ data })
  }



  const orders_info:OrderInfo_DataType[] = [
    {
        key:1,
        id:1,
        fullname: 'Tài Nguyễn',
        phone: '0934343434',
        email: 'tainguyen@gmail.com',
        address: '97 Man Thiện, Hiệp Phú, Quận 9, TP.HCM',
        order_date:'2024-02-18T12:00:00.000Z',
        status:1,
        shipment_info: {range:['2024-02-19T14:00:00.000Z','2024-02-20T18:00:00.000Z'],price:18000},
        payment_method_id: 1,
        product: [ {id:1, amount:5, book:get_product_info_lite(1)}, {id:2, amount:4, book:get_product_info_lite(2)}, 
                {id:3, amount:2, book:get_product_info_lite(3)}],
        total_price:858000,
        note:'',
    },
    {
        key:2,
        id:2,
        fullname: 'Tài Nguyễn',
        phone: '0934343434',
        email: 'tn@gmail.com',
        address: '111 Hàm Nghi, Bến Thành, Quận 1, TP.HCM',
        order_date:'2024-02-17T12:00:00.000Z',
        status:2,
        shipment_info: {range:['2024-02-20T08:00:00.000Z','2024-02-23T16:00:00.000Z'],price:9000},
        payment_method_id: 2,
        product: [ {id:4, amount:4, book:get_product_info_lite(4)}, {id:5, amount:1, book:get_product_info_lite(5)},
                 {id:13, amount:2, book:get_product_info_lite(13)},{id:14, amount:2, book:get_product_info_lite(14)}],
        total_price:953000,
        note:'',
    },
    {
        key:3,
        id:3,
        fullname: 'Tài Nguyễn',
        phone: '0934343434',
        email: 'tn@gmail.com',
        address: '88 Hàm Nghi, Bến Thành, Quận 1, TP.HCM',
        order_date:'2024-02-15T08:00:00.000Z',
        status:5,
        cancel_date:'2024-02-15T09:30:00.000Z',
        shipment_info: {range:['2024-02-21T12:00:00.000Z','2024-02-21T20:00:00.000Z'],price:22000},
        payment_method_id: 2,
        product: [ {id:5, amount:2, book:get_product_info_lite(5)}, {id:7, amount:5, book:get_product_info_lite(7)}],
        total_price:412000,
        note:''
    },
    {
        key:4,
        id:4,
        fullname: 'Tài Nguyễn',
        phone: '0934343434',
        email: 'tainguyen@gmail.com',
        address: '803 Huỳnh Tấn Phát, Phú Thuận, Quận 7, TP.HCM',
        order_date:'2024-02-18T22:00:00.000Z',
        delivery_date:'2024-02-24T08:00:00.000Z',
        status:4,
        shipment_info: {range:['2024-02-24T08:00:00.000Z','2024-02-24T16:00:00.000Z'],price:15000},
        payment_method_id: 2,
        product: [ {id:8, amount:2, book:get_product_info_lite(8)}, {id:9, amount:5, book:get_product_info_lite(9)},
                 {id:11, amount:4, book:get_product_info_lite(11)}],
        total_price:937000,
        note:''
    }
]