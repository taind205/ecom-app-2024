'use client'
import React, { useRef, useState } from 'react';
import { CloseCircleFilled, LoadingOutlined, UserOutlined } from '@ant-design/icons';
import { AutoComplete, Button, Input, InputRef, Spin } from 'antd';
import Word from '@/app/language';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const renderTitle = (category: string, language:string) => (
  <span>
    {Word[category][language]}
    <Link
      style={{ float: 'right' }}
      href={'/shop/'+category}
    >
      {Word['more'][language]}
    </Link>
  </span>
);

const renderItem = (title: string, price: number, id:string) => ({
  value: title,
  label: (
    <Link
      style={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
      href={'/product/'+id}
    >
      {title}
      <span>
       {price} VNĐ
      </span>
    </Link>
  ),
});


// [
//   {
//     label: renderTitle(Text.libraries[language], language),
//     options: [renderItem('AntDesign', 10000), renderItem('AntDesign UI', 10600)],
//   },
//   {
//     label: renderTitle(Text.solutions[language], language),
//     options: [renderItem('AntDesign UI FAQ', 60100), renderItem('AntDesign FAQ', 30010)],
//   },
//   {
//     label: renderTitle(Text.articles[language], language),
//     options: [renderItem('AntDesign design language', 100000)],
//   },
// ];

const SearchBar: React.FC<{language:string}> = ({language}) => {
  
  const [term, setTerm] = useState('');
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<{
    label: React.JSX.Element;
    options: {
        value: string;
        label: React.JSX.Element;
    }[];
  }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<InputRef>(null);
  const router = useRouter();
  const pathName = usePathname();
  const searchPath = (pathName.split('/')[1]=='shop')?pathName:'/shop/all';

  const data_to_options = (group_data:{[key:string]:Book_Info_Lite[]}) => 
  Object.entries(group_data).map(([k,v])=> ({label:renderTitle(k,language),
     options: v.map((v2)=> renderItem(v2.name,v2.price,String(v2.id))) }) )

  async function searchProduct(term:string) {
    setIsLoading(true);
    const res = await fetch(domain+'/api/product/search?q='+term);
    const j = await res.json();
    // console.log(j);
    setOptions(data_to_options(group_by_category(j.data)));
    setIsLoading(false);
  }

  return(
    <div className='flex relative w-full max-w-[85%] sm:max-w-[60%] md:max-w-[50%] xl:max-w-[40%]'>
  <AutoComplete
    // allowClear={{clearIcon: <CloseCircleFilled className='-translate-x-12 -translate-y-1 text-xl'/>}}
    popupClassName="certain-category-search-dropdown w-[95vw] xs:w-[90vw] sm:w-1/3"
    className='w-full'
    dropdownStyle={{top:'56px'}}
    optionRender={isLoading?()=><Spin className='py-4 px-4' indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}/>:undefined}
    options={isLoading?[{label:<></>, options:[{value:'',label:<></>}]}]:options}
    value={term}
    onChange={(v)=>(setOpen(true),setTerm(v),searchProduct(v))}
    open={open}
    onBlur={()=>setOpen(false)}
    onClick={()=>setOpen(!open)}
    popupMatchSelectWidth={false}
    listHeight={300}
    placement='topLeft'
    notFoundContent={<p>{Word.no_result_found_msg[language]}</p>}
  >
    <Input.Search ref={inputRef} classNames={{input:'pr-[30px]'}} size="large" placeholder={Word['search'][language]}
       onSearch={(v)=>v? (Fill(searchPath+'?q='+term,router),setOpen(false)):false}/>
  </AutoComplete>
  <Button hidden={term.length<1} className='border-none px-2 h-8 absolute top-[2px] right-[40px] z-10'
    onClick={()=>(setTerm(''),inputRef.current?.focus())}
     ><CloseCircleFilled className='text-[20px]'/></Button>
  </div>
)};

import { Book_Info_Lite, domain } from '../data_type';
import { Fill } from '../sidebar/sidebar1';


const group_by_category = (list:Array<Book_Info_Lite>) => {
  
  let result:{[key:string]:Book_Info_Lite[]}={};
  for(const book of list)
  {
    if(result[book.category]) result[book.category].push(book);
    else result[book.category] = [book];
  }

  return result;
}

export default SearchBar;