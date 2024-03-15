'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useContext, useEffect, useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Checkbox, Flex, InputNumber, Menu, Slider, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';
import NovelImg from '@/../public/icon/novel.png';
import BookImg from '@/../public/icon/book.png';
import ComicsImg from '@/../public/icon/comic.png';
import EconomyImg from '@/../public/icon/economy.png';
import TechnologyImg from '@/../public/icon/technology.png';
import HistoryImg from '@/../public/icon/history.png';
import JapanImg from '@/../public/icon/japan.png';
import SouthKoreaImg from '@/../public/icon/south-korea.png';
import ChinaImg from '@/../public/icon/china.png';
import Image from 'next/image';
import Word from '@/app/language';
import { LangContext } from '../../(shop)/client_layout';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation'
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const img_code:any = {book:BookImg, comics:ComicsImg, novel:NovelImg, 
  economy_book:EconomyImg, technology_book:TechnologyImg, history_book:HistoryImg,
  manga:JapanImg, manhwa: SouthKoreaImg, manhua: ChinaImg,};

function IconButton(code:string){
  return(<Flex className='gap-2'>
  <Image src={img_code[code]}
  width={24}
  height={24}
  alt="button icon"
  /><Text>{Word[code][useContext(LangContext)]}</Text></Flex>)
}

const { Text } = Typography;

const App: React.FC<{available_path:string[]}> = ({available_path}) => {
  const [langs, setLangs] = useState<string[]>([]);
  const [minPrice,setMinPrice] = useState(0);
  const [maxPrice,setMaxPrice] = useState(990000);
  const router = useRouter();
  const pathName = usePathname();
  const lang = useContext(LangContext);
  const searchParams = useSearchParams();

  const query_filt=searchParams.get('q');  
  const price_step = 10000;
  const max_available_price= price_step*99;
  const currency_unit = "VNĐ";
  
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return ( <>
  
  <div className='flex flex-col md:sticky md:bottom-4 items-center dark:bg-blue-950 bg-sky-200' style={{width:'inherit'}}>
    
    <div className='flex divide-slate-300 flex-col xs:flex-row md:flex-col w-full justify-around items-center md:w-48'> 
      {available_path.length>0? <>
      <Flex gap={"middle"} vertical={true} className='m-2 py-4 justify-center'>
        <Text className='text-base font-semibold text-center'>{Word.category[lang]}</Text>
        {available_path.map((v)=> 
      <Button key={v} type="text" onClick={()=> router.push('./'+v+(query_filt?'?q='+query_filt:''))}>{IconButton(v)}</Button>)}
      </Flex>
      
      <div className='border self-stretch border-slate-400'></div></>:<></>}
    
      <Flex className='mb-4 py-4 gap-2 justify-center' vertical={true}>
        <Text className='text-base font-semibold text-center'>{Word.filter[lang]}</Text>
        <div className='flex divide-x-2 md:divide-x-0 divide-slate-300 md:flex-col'>
          <Flex gap={"small"} vertical={true} className='w-1/2 md:w-full px-4 py-2 justify-center'>
          <Text>{Word.book_language[lang]}:</Text>
            <Checkbox onChange={(e) => e.target.checked? setLangs([...langs, 'VI']) 
            : setLangs(langs.filter(v =>v!='VI'))}>{Word.vietnamese[lang]}</Checkbox>
            <Checkbox onChange={(e) => e.target.checked? setLangs([...langs, 'EN']) 
            : setLangs(langs.filter(v =>v!='EN'))}>{Word.english[lang]}</Checkbox>
          </Flex>

            <Flex gap={"small"} vertical={true} className='w-1/2 md:w-full px-4 py-2'>
            <Text>{Word.price_from[lang]}:</Text>
              <Flex className='gap-2 items-center'>
                <InputNumber style={{width:140}}
                defaultValue={0}
                value={minPrice}
                onChange={(value)=>setMinPrice(value||minPrice)}
                min={0}
                max={maxPrice-price_step}
                step={price_step}
                prefix={currency_unit}
                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                // parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                />
              </Flex>
              <Text>{Word.price_to[lang]}:</Text>
              <Flex className='gap-2 items-center'> 
                <InputNumber style={{width:140}}
                defaultValue={max_available_price}
                value={maxPrice}
                onChange={(value)=>setMaxPrice(value||maxPrice)}
                min={minPrice+price_step}
                max={max_available_price}
                step={price_step}
                prefix={currency_unit}
                formatter={(value) => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                // parser={(value) => value!.replace(/\$\s?|(,*)/g, '')}
                />
              </Flex>
              <Slider range defaultValue={[0, max_available_price]} 
              value={[minPrice,maxPrice]}
              onChange={(value)=> {if(value[1]>value[0]) {setMinPrice(value[0]); setMaxPrice(value[1]);}}}
              max={max_available_price} step={price_step} tooltip={{formatter:(value)=><p>{value +' '+ currency_unit}</p>}}/>
            </Flex>
          </div>
          
        <Button className='bg-blue-600 text-white mx-2' type='primary'
        onClick={()=>
          Fill(pathName+'?q='+(searchParams.get('q')?searchParams.get('q'):'')+'&priceFrom='+minPrice+'&priceTo='+maxPrice
          +String(langs.map((v)=>'&lang='+v)).replace(',',''),router)
          }>
          {/* <Link href={usePathname()+'?priceFrom='+minPrice+'&priceTo='+maxPrice+String(langs.map((v)=>'&lang='+v)).replace(',','')}> */}
            {Word.filt[lang]}
            {/* </Link> */}
            </Button>
          </Flex>
       
    </div>
    </div>
    </>
  );
};

export default App;

export const Fill = (path:string, router:AppRouterInstance) => {
  router.replace('/fill',{ scroll:true}); // This is used for the loading effect
      // setTimeout(()=>
      // router.back()
      // ,20);
      setTimeout(()=>
      router.replace(path,{ scroll:true})
      ,50);
}

{/* <Menu
      onClick={onClick}
      style={{ width: 200 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    /> 
    <Button type="text" onClick={()=>alert('Sach')}><BookIcon/></Button>
    <Button type="text" onClick={()=>alert('TT')}><ComicIcon/></Button>
    <Button type="text" onClick={()=>alert('Sach')}><NovelIcon/></Button>
    <Menu
      onClick={onClick}
      style={{ backgroundColor:'rgba(255, 0, 0, 0)' }}
      defaultSelectedKeys={[]}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    /> */}