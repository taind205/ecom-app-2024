'use client'

import React, { useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Button, Image, Modal, Radio, Dropdown, Space, Typography, Select, Input, Rate, Progress, Pagination, notification, Breadcrumb, Skeleton } from 'antd';
import type {RadioChangeEvent, MenuProps } from 'antd';
import NextImage from 'next/image'
import NextLink from 'next/link';
import left_img from '@/../public/icon/left.png';
import right_img from '@/../public/icon/right.png';
import { DownOutlined } from '@ant-design/icons';
import RatingUserImg from '@/../public/icon/user2.png';
import LikeImg from '@/../public/icon/like.png';
import type { PaginationProps } from 'antd';
import { DarkMode_Context, LangContext, UseState_SelectedItemsContext } from '@/app/(shop)/client_layout';

const { Text, Link } = Typography;

function LeftIcon(){
  return(
  <NextImage src={left_img}
  width={24}
  height={24}
  alt="Dark mode button icon"
  />)
}

function RightIcon(){
  return(
  <NextImage src={right_img}
  width={24}
  height={24}
  alt="Dark mode button icon"
  />)
}

const nav_btn_cln='absolute h-10 w-10 min-w-10 min-h-10 z-10 rounded-full bg-slate-300 ';


export const Rating_Sold = ({rating,sold}:{rating:number,sold:number}) => <>
{rating+" "}<Rate disabled allowHalf defaultValue={rating}/>{'   | '+Word.sold[useContext(LangContext)]+' '+sold}         
</>

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////  Breadcrumb section

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Custom_Brcr:React.FC<{path_list:string[],book_name:string}> = ({path_list,book_name}) =>  { 
 
  const lang = useContext(LangContext);

  return (
  <Breadcrumb className={breadcrumb_cln} style={{ margin: '16px 0' }} items={  path_list.map((v)=>(
        {title:<NextLink href={'/shop/'+v}>{Word[v][lang]}</NextLink>})).concat(
    [{title:<p>{book_name}</p>}])}>
  </Breadcrumb>
) }



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////  Img Preview section

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Img_Preview: React.FC<{img_list:string[]}> = ({img_list}) => {

  const scroll_ref = useRef<HTMLDivElement>(null);
  const ScrollLeft = () => scroll_ref.current?.scrollBy({top:0,left:-300,behavior:'smooth'});
  const ScrollRight = () => scroll_ref.current?.scrollBy({top:0,left:300,behavior:'smooth'});
  const darkMode = useContext(DarkMode_Context); //fix Img Preview bug

  return(<div>
    {/* <div style={{width:'inherit'}} className='absolute'>
      <div className='relative flex items-center h-40 w-full'>
        
        <button className={nav_btn_cln+""}><LeftIcon/></button>
        
        <button className={nav_btn_cln+"right-12"}><RightIcon/></button>
        </div>
    </div>*/}
    <div className='flex justify-center my-2'>
      <Image className='max-h-[70vh] max-w-[90vw] md:max-w-[40vw]' alt='Product Image' src={img_list[0]}/>
    </div>
    <div className="flex items-center relative"> 
      
      {img_list.length>3?<Button size='large' className={nav_btn_cln+"left-0"} icon={<LeftIcon/>} onClick={(e)=> ScrollLeft()}/>:<></>}
      {/* <button className={nav_btn_cln+"left-0"}><LeftIcon/></button> */}
      <div className='overflow-auto max-w-[90vw]' ref={scroll_ref}>
        <div style={{maxWidth:img_list.length*300, display:'flex'}}>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
          }}>
                {img_list.map((v,i)=>
                <Image alt='Product image' wrapperStyle={{minWidth:'max-content'}} style={{height:'30vh',objectFit:'cover'}} key={i} src={v}/>
                )}</Image.PreviewGroup>
          </div>
        </div>
        {/* <button className={nav_btn_cln+"right-0"}><RightIcon/></button> */}
        {img_list.length>3?<Button size='large' className={nav_btn_cln+"right-0"} icon={<RightIcon/>} onClick={(e)=> ScrollRight()}/>:<></>}
    </div>
  </div>
);}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////  Delivery section

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////


export const Delivery_Options: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [show_LocationSelect, setShow_LocationSelect] = useState(false);
  const [city, setCity] = useState(0); //{id:0,name:'Select'}
  const [district, setDistrict] = useState(0);
  const [ward, setWard] = useState(0);
  const [selectedAddress, setSelectedAddress] = useState(recent_address[0]?.ward || 8);
  const lang = useContext(LangContext);

  const onRadioChange = (e: RadioChangeEvent) => {
    const v = e.target.value;
    if(v==0)
      {setShow_LocationSelect(true);
      setWard(0);}
    else
    {
      setShow_LocationSelect(false);
      setWard(e.target.value);
      setCity(0);
      setDistrict(0);
    }
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    if(ward!=0)
    setSelectedAddress(ward);
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onCityChange = (value: number) => {
    setCity(value);
    setDistrict(0);
    setWard(0);
  };

  const onDistrictChange = (value: number) => {
    setDistrict(value);
    setWard(0);
  };

  const onWardChange = (value: number) => {
    setWard(value);
  };

  const filterOption = (input: string, option?: { label: string; value: string }) =>
      (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
// // Filter `option.label` match the user type `input`
// const filterOption = (input: string, option?: { label: string; value: string }) =>
//   (option?.label ?? '').toLowerCase().includes(input.toLowerCase());


  return (
    <>
      <p className="text-lg font-semibold">{Word.shipping_detail[lang]}</p>
      <Modal title={Word.select_delivery_address[lang]} okButtonProps={{type:'default'}} cancelButtonProps={{style:{display:'none'}}}
       open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='flex flex-col items-center'>
        <Radio.Group className='' onChange={onRadioChange}>
          <div className='flex flex-col'>
          {recent_address.map((v)=><Radio value={v.ward} key={v.id}>{get_address_name(v.ward)}</Radio>)}
          <Radio value={0}>{Word.other_address[lang]+':'}</Radio>
          {show_LocationSelect?
          <Select
              showSearch
              placeholder={Word.select_loc_1[lang]+":"}
              optionFilterProp="children"
              onChange={onCityChange}
              filterOption={filterOption}
              options={city_options}
            />:<></> }
          {city?
          <Select
              showSearch
              placeholder={Word.select_loc_2[lang]+":"}
              optionFilterProp="children"
              onChange={onDistrictChange}
              filterOption={filterOption}
              options={district_options(city)}
            />:<></>}
          {district?
          <Select
              showSearch
              placeholder={Word.select_loc_3[lang]+":"}
              optionFilterProp="children"
              onChange={onWardChange}
              filterOption={filterOption}
              options={ward_options(district)}
            />:<></>}
          </div>
        </Radio.Group>
        </div>
      </Modal>
      <div className='flex flex-col xs:flex-row xs:gap-2 justify-around items-center'>
        <p className='xs:max-w-[75%]'>{Word.delivery_to[lang]+': '}<b>{get_address_name(selectedAddress)}</b></p>
        <Button className='xs:min-w-12 ' onClick={showModal}>
          {Word.change_address[lang]}
        </Button>
      </div>
      <Delivery_Option_Selects delivery_options_info={delivery_options_info[selectedAddress]} lang={useContext(LangContext)}/>
    </>
  );
}

export const Delivery_Option_Selects = ({delivery_options_info,lang, radioGroup}:{delivery_options_info:Delivery_Info[], lang:string,radioGroup?:boolean}) => <>{ 
  delivery_options_info?.length >0 ? radioGroup?
  <>{delivery_options_info.map((d)=> <Radio key={d.id} value={d.id}>{Delivery_Option(d,d.id,lang)}</Radio>)}</>
   : delivery_options_info.map((d, indx)=> Delivery_Option(d,indx,lang))
    :  radioGroup? <Radio disabled><p>{Word['not_found_delivery_msg'][lang]}</p></Radio> : <p>{Word['not_found_delivery_msg'][lang]}</p>}</>

const Delivery_Option = (d:Delivery_Info, indx:number, lang:string) => 
{ if(new Date(d.start).getDate() == new Date(d.end).getDate())
return(
  <div key ={indx}>
  <p className='text-lg'>{Word['delivery_on'][lang]+' '+Word[day_of_week_string[new Date(d.start).getDay()]][lang]}</p>
  <p>{ShortTimePeriodString(new Date(d.start),new Date(d.end), lang)}: <b>{num_to_price(d.price)}</b></p>
  </div> )
else return (
  <div key ={indx}>
  <p className='text-lg'>{Word['delivery_on'][lang]+' '+Word[day_of_week_string[new Date(d.start).getDay()]][lang]
  +'-'+Word[day_of_week_string[new Date(d.end).getDay()]][lang]}</p>
  <p>{ShortTimePeriodString(new Date(d.start),new Date(d.end), lang)}: <b>{num_to_price(d.price)}</b></p>
  </div>
)
}

type Delivery_Info = {id:number, start:string,end:string,price:number}

export const delivery:{[key:number]:Delivery_Info} = {
  1:{
    id:1,
    start:"2024-02-16T08:00:00.000Z",
    end:"2024-02-16T10:00:00.000Z",
    price:35000,
  },
  2:{
    id:2,
    start:"2024-02-17T06:00:00.000Z",
    end:"2024-02-18T12:00:00.000Z",
    price:20000,
  },
  6:{
    id:6,
    start:"2024-02-18T08:00:00.000Z",
    end:"2024-02-19T12:00:00.000Z",
    price:18000,
  },
  3:{
    id:3,
    start:"2024-02-19T14:00:00.000Z",
    end:"2024-02-20T18:00:00.000Z",
    price:15000,
  },
  4:{
    id:4,
    start:"2024-02-20T16:00:00.000Z",
    end:"2024-02-22T20:00:00.000Z",
    price:12000,
  },
  5:{
    id:5,
    start:"2024-02-21T08:00:00.000Z",
    end:"2024-02-24T16:00:00.000Z",
    price:8000,
  },
  7:{
    id:7,
    start:"2024-02-22T06:00:00.000Z",
    end:"2024-02-25T12:00:00.000Z",
    price:7000,
  },
}

export const delivery_options_info:{[key:number]:Delivery_Info[]} = {8:[delivery[1],delivery[2]],
  9:[delivery[3],delivery[4]],10:[delivery[3],delivery[4]],11:[delivery[1],delivery[2]],
  12:[delivery[1],delivery[2]],13:[delivery[1],delivery[2]],14:[delivery[1],delivery[2]],
  }

export const day_of_week_string:{[key:number]:string} = {0:'sunday', 1:'monday',2:'tuesday',3:'wednesday',4:'thursday',5:'friday',6:'saturday'}

const recent_address = [
  {
    id:1,
    ward:8
  },
  {
    id:2,
    ward:9
  },
  {
    id:3,
    ward:10,
  }
  
]

interface Location {
  [key:number]:{[key:number]:string},
}

const city_list:{[key:number]:string} = {1:'Tp.HCM', 2:'Hà Nội'};

// const cities = [{id:1,name:'Tp.HCM'}, {id:2, name:'Hà Nội'}];
const districts_list:Location = {1:{3:'Quận 1', 4:'Thủ Đức',5:'Quận 7'},
   2:{6:'Cầu Giấy',7:'Ba Đình'}};
const wards_list:Location = {3:{8:"Bến Nghé", 9:"Bến Thành"}, 
    4:{10:"Hiệp Phú",11:"Tăng Nhơn Phú A"},
    5:{12:"Tân Phú",13:"Phú Thuận",14:"Bình Thuận"}, 
    6:{15:"Yên Hòa", 16:"Trung Hòa", 17:"Quan Hoa"},
    7:{18:"Vĩnh Phúc", 19:"Điện Biên",}};

const city_list_to_DNT = (city_list:{[key:number]:string}) =>
  Object.entries(city_list).map(([k,v])=>({value:k,label:v,children:districts_list_to_DNT(districts_list[Number(k)])}))

const districts_list_to_DNT = (districts_list:{[key:number]:string}) =>
  Object.entries(districts_list).map(([k,v])=>({value:k,label:v,children:ward_list_to_DNT(wards_list[Number(k)])}))

const ward_list_to_DNT = (wards_list:{[key:number]:string}) =>
  Object.entries(wards_list).map(([k,v])=>({value:k,label:v}))

export const location_list_DNT = city_list_to_DNT(city_list);

const city_options = Object.entries(city_list).map((v)=>({value: v[0], label: v[1],}));

const district_options = (city:number) => Object.entries(districts_list[city]).map((v)=>({value: v[0],label: v[1],}));

const ward_options = (district:number) => Object.entries(wards_list[district]).map((v)=>({value: v[0],label: v[1],}));


function get_address_name(ward:number){
  let c:number=0;
  let d:number=0;

  for(const [d_id, w_list] of Object.entries(wards_list))
  {
    for(const [w_id, w_name] of Object.entries(w_list))
      if(Number(w_id)==ward) {d=Number(d_id); break;}
  }

  for(const [c_id, d_list] of Object.entries(districts_list))
  {
    for(const [d_id, d_name] of Object.entries(d_list))
      {if(Number(d_id)==d) c=Number(c_id);}
  }
  
  return city_list[c]+', '+districts_list[c][d]+', '+wards_list[d][ward];
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////  Buy section

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import type { NotificationArgsProps } from 'antd';
import Word, { Sentence, ShortTimePeriodString } from '@/app/language';
import { Book_Info_Lite, Rating_Data, Rating_Star, User_Rate, domain } from '@/app/component/data_type';
import { breadcrumb_cln } from '../../shop/[category]/client_layout';
import { UpdateCart_Context } from '@/app/(shop)/client_layout';
import { bg_slate_cln, text_slate_cln } from '@/app/component/css_classname';
import { num_to_price } from '@/app/component/function';
import { useRouter } from 'next/navigation';

type NotificationPlacement = NotificationArgsProps['placement'];
// const NotifyContext = React.createContext({ name: 'Default' });

export const Buy_Options: React.FC<{book_info:Book_Info_Lite}> = ({book_info}) => {
  const lang = useContext(LangContext);
  const [value, setValue] = useState(1);
  const [api, contextHolder] = notification.useNotification();
  const updateCart = useContext(UpdateCart_Context);

  // const contextValue = useMemo(() => ({ name: 'Ant Design' }), []);

  const openNotification2 = (msg_type:number) => {
    api['error']({
      message: msg_type==1?Word.exceed_quantity_msg[lang]:Word.exceed_quantity_in_cart_msg[lang]
    });
  };
  const available_num=book_info.available_num;

  return( 
    <>
    <p className="text-lg font-semibold">{Word.purchasing[lang]}</p>
  <div className='flex flex-col gap-4 items-center'> {contextHolder}
    <div className='flex flex-col xs:flex-row gap-2 items-center text-base' style={{maxWidth:'400px'}}>
      <p className=''>{Word.quantity[lang]+' :'} </p>
      <div className='w-1/2 flex items-center' style={{minWidth:'130px',width:'130px'}}>
        <Button onClick={()=> (value-1)>0 ? setValue(value-1):false}>-</Button>
          <Input className='text-center' value={value} onChange={(e) => 
            { Number(e.target.value)? Number(e.target.value)>0? 
              Number(e.target.value)<=available_num?  setValue(Number(e.target.value)) : (setValue(available_num), openNotification2(1)): <></>  :<></> 
            }}/>
        <Button onClick={()=> (value+1)<=available_num? setValue(value+1):openNotification2(1)}>+</Button>
      </div>
      <p className=''>{'('+Sentence.n_items_left(available_num)[lang]+')'}</p>
    </div>
    <div className='flex justify-items-center	text-lg gap-4 m-2'>
      <Button size='large' style={{maxWidth:'192px'}} onClick={()=>(updateCart(book_info.id,value,book_info))}>{Word.buy_now[lang]}</Button>
      <Button size='large' style={{maxWidth:'192px'}} onClick={()=>updateCart(book_info.id,value,book_info)}>{Word.add_to_cart[lang]}</Button>
    </div>
  </div>
  </>
  )
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////  Description section

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ReadMore_Description = ({children}:{children:string}) => {
  const lang = useContext(LangContext);
  const [isShowMore, setIsShowMore] = useState(false);
  const toggleReadMore = () => {
      setIsShowMore(!isShowMore);
  };
  
  const text = children;
  return (<>
    <p className="text-lg font-semibold">{Word.product_description[lang]}</p>
      <div className='flex flex-col items-center gap-2'>
        <p className="whitespace-pre-line">
          {isShowMore? text : text.substring(0,200)+'...'}
        </p>
          { text.length>200?
          <Button onClick={toggleReadMore} >
              {isShowMore ? Word.show_less[lang] : Word.show_more[lang]}
          </Button>:<></>}
        
      </div>
      </>
  );
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////  Rating section

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function RatingUserIcon(){
  return(
  <NextImage src={RatingUserImg}
  width={24}
  height={24}
  alt="Rating user"
  />)
}

function LikeIcon(){
  return(
  <NextImage src={LikeImg}
  width={24}
  height={24}
  alt="Rating user"
  />)
}

export const User_Rating:React.FC<{rating_data:Rating_Data}> = ({rating_data}) => {
  const [page, setPage] = useState(1);
  const [userRates, setUserRates] = useState<User_Rate[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const darkMode = useContext(DarkMode_Context); //fix Img Preview bug
  const lang = useContext(LangContext);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect( ()=>{
    getCustomerReview(1)
  }
  ,[])

  async function getCustomerReview(page:number) {
    setIsLoading(true);
    const response = await fetch(domain+'/api/product/customer_review?p='+page);
    const j = await response.json();
    setUserRates(j.data);
    setIsLoading(false);
  }

  const rate_count =  (rating_data.five_star+rating_data.four_star+rating_data.three_star+rating_data.two_star+rating_data.one_star);
  const avg_rate = (rating_data.five_star*5+rating_data.four_star*4+rating_data.three_star*3+rating_data.two_star*2+rating_data.one_star)
                    /rate_count;

  const number_word_map:{[key:number]:Rating_Star}={1:'one_star',2:'two_star',3:'three_star',4:'four_star',5:'five_star'};

  const onChange: PaginationProps['onChange'] = (pageNumber) => {
    getCustomerReview(pageNumber);
    setPage(pageNumber);
    ref.current?.scrollIntoView({behavior:'smooth'});
  };
  
  return(<>
  <p className="text-lg">{Word.customer_review[lang]}</p>
    <div className='grid grid-cols-1 divide-y-2'>
      <div className='flex flex-col items-center sm:flex-row justify-center items-around'>
        <div className='flex-col py-4 px-2 sm:px-4'>
          <p className='text-lg'>{Word.overview[lang]}</p>
          <div className='text-2xl'>{avg_rate.toFixed(1)}  <Rate disabled allowHalf defaultValue={avg_rate} /></div>
          <p className={text_slate_cln}>{'('+rate_count+' '+Word.rating[lang]+')'}</p>
        </div>
        <div className='flex-col py-4 px-2 md:px-4'>
          {[5,4,3,2,1].map((v,i)=>
            <div className='flex gap-4 max-w-80 min-w-[270px] justify-center'key={i}>
              <Rate disabled defaultValue={v} />
              <div className='flex' style={{width:120}}  >
              <Progress style={{width:90}} percent={rating_data[number_word_map[v]]/rate_count*100} showInfo={false} /> {rating_data[number_word_map[v]]}
              </div>
              </div>
          )}
        </div>
      </div>

      <div className='flex flex-col' ref={ref}>
        <div className='grid grid-cols-1 divide-y-2'>
          {isLoading? [1,2,3].map((v) => <Skeleton className='p-2' key={v} active avatar paragraph={{ rows: 4 }} />) 
          : userRates.map((v,i)=> 
          <div key={i} className='flex flex-col p-2 m-2 gap-2 pt-4'>
            <div className='flex gap-2'><RatingUserIcon/> {v.username}</div>
            <Rate disabled defaultValue={v.rate}/>
            <p className='whitespace-pre-line'>{v.cmt}</p>
            {v.img.length>0?
              <div className='overflow-auto max-w-[80vw]'>
                <div style={{maxWidth:v.img.length*200, display:'flex'}}>
                  <Image.PreviewGroup
                    preview={{
                      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
                    }}>
                      {v.img.map((v,i)=>
                      <Image alt="Review's Image" wrapperStyle={{minWidth:'max-content'}} style={{height:'20vh',objectFit:'cover'}}  key={i} src={v} />
                      )}</Image.PreviewGroup>
                </div>
              </div>:<></>}
            <Button type='text' style={{width:90}}><div className='flex gap-2'><LikeIcon/>{v.likes}</div></Button>
            <p className={text_slate_cln}>{v.time}</p>
            {v.response? <div className={bg_slate_cln+ 'flex flex-col m-2 p-2 rounded-lg'}>
              <b>{Word.response_from_seller[lang]}</b>
              <p>{v.response}</p>
            </div>:<></>}

          </div>)}
        </div>
        <Pagination pageSize={5} className='self-center m-2 p-2' defaultCurrent={1} 
            total={rate_count} showSizeChanger={false} showQuickJumper onChange={onChange}/>
      </div>
      
    </div>
    </>
  )
}



// const ward_items: MenuProps['items'] = wards.map((v)=>({key: v.id,label: v.name,}));