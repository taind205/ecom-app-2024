import { Button, Dropdown, Flex, Input, Modal, Space, Tooltip, message } from "antd";
import type { MenuProps } from 'antd';
import SearchBar from "./search_bar";
import Image from 'next/image'
import IconImg from '@/../public/icon/app_icon.png'
import DarkModeImg0 from '@/../public/icon/darkmode_0.png'
import DarkModeImg1 from '@/../public/icon/darkmode_1.png'
import CartImg from '@/../public/icon/shopping-cart.png'
import LanguageImg from '@/../public/icon/translation.png'
import UserImg from '@/../public/icon/user.png'
import VietNamImg from '@/../public/icon/vietnam.png'
import UKImg from "@/../public/icon/united-kingdom.png"
import { Header } from "antd/es/layout/layout";
import Word from "@/app/language";

function AppIcon(){
    return(<div className="flex items-center gap-4">
    <Image src={IconImg}
    width={48}
    height={48}
    alt="App Icon"
    />
    <p className="text-2xl hidden lg:block">E-commerce App</p>
    </div>)
}

function DarkModeIcon1(){
    return(
    <Image src={DarkModeImg1}
    width={24}
    height={24}
    alt="Dark mode button icon"
    />)
}

function DarkModeIcon0(){
    return(
    <Image src={DarkModeImg0}
    width={24}
    height={24}
    alt="Dark mode button icon"
    />)
}

function LanguageIcon(){
    return(
    <Image src={LanguageImg}
    width={24}
    height={24}
    alt="Language button icon"
    />)
}

function UKIcon(){
    return(
    <Image src={UKImg} className="mr-2"
    width={24}
    height={24}
    alt="Language icon"
    />)
}

function VietNamIcon(){
    return(
    <Image src={VietNamImg} className="mr-2"
    width={24}
    height={24}
    alt="Language icon"
    />)
}

function CartIcon(){
    return(
    <Image src={CartImg}
    width={24}
    height={24}
    alt="Button icon"
    />)
}

function UserIcon(){
    return(
    <Image src={UserImg}
    width={24}
    height={24}
    alt="Button icon"
    />)
}

const Language_dropdown = (language:string) => [
    {
      label: 'English',
      key: 'EN',
      icon: <UKIcon />,
      disabled: 'EN'==language
    },
    {
      label: 'Tiếng Việt',
      key: 'VI',
      icon: <VietNamIcon />,
      disabled: 'VI'==language
    }
  ]

// const limit_line_style = {
//     display: block,/* or inline-block */
//     text-overflow: ellipsis,
//     word-wrap: break-word,
//     overflow: hidden,
//     max-height: 3.6em,
//     line-height: 1.8em,
// }


const TopBar: React.FC<{darkMode:boolean, setDarkMode:any,setLanguage:any, openLogin:Function, Logout:Function}>
         = ({setDarkMode, darkMode, setLanguage, openLogin, Logout}) => {

    const accountInfo = useContext(AccountContext);
    const language = useContext(LangContext);
    const cart = useContext(CartContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpen2, setIsModalOpen2] = useState(false);

    const Login_Btn = <Button onClick={()=>openLogin()}>{Word.login[language]}</Button>

    const handleOk = () => {
    setIsModalOpen(false);
    };

    const handleCancel = () => {
    setIsModalOpen(false);
    };

    const handleOk2 = () => {
    setIsModalOpen2(false);
    };

    const handleCancel2 = () => {
    setIsModalOpen2(false);
    };

    const getAllCartItemAmount = (cart:{id:number, amount:number}[]) => {
        let total_amount:number=0;
        for(const item of cart)
        {
            total_amount+=Number(item.amount);
        }
        return total_amount;
    } 

    const user_items:()=> MenuProps['items'] = () => 
    accountInfo?[
        {
          key: '1',
          label: (<b>{accountInfo.fullname}</b>),
        },
        {
            key: '2',
            label: (<Link onClick={()=>handleOk()} href="/order">{Word.my_order[language]}</Link>),
          },
          {
            key: '3',
            label: (<Button onClick={()=>Logout()}>{Word.logout[language]}</Button>),
          },
        
      ]:[
        {
        key: '1',
          label: (Login_Btn),
        }
      ]

    const User_Dropdown_Btn:React.FC<{show_title?:boolean}> = ({show_title}) =>
            <Dropdown menu={{ items:user_items() }}>
                <Button type="primary" size="large" icon={<UserIcon/>}>{show_title? Word.user[language]:<></>}</Button>
            </Dropdown>

    const Cart_Dropdown_Btn:React.FC<{openModal?:boolean}>
    = ({openModal}) => 
    <>{ openModal?
        <Button type="primary" onClick={()=>(setIsModalOpen2(true))} size="large" icon={<CartIcon/>}>{Word.cart[language]
                        +' ('+getAllCartItemAmount(cart)+')'}</Button>
        :
        <Dropdown dropdownRender={() => <Cart_Detail/>}>
            <div style={{height:40}} className="relative">
                <Button style={{transform:'translateY(-6px)'}} type="primary" size="large" icon={<CartIcon/>}/>
                <div style={{height:24, width:24,transform:'translateY(16px)'}} className="absolute flex bottom-2 -right-2 bg-red-700 text-white rounded-full">
            <div style={{transform:'translateY(-20px)'}} className="w-full text-center">{getAllCartItemAmount(cart)>99?'99+':getAllCartItemAmount(cart)}</div></div>
            </div>
        </Dropdown>
    }</>

    const Cart_Detail:React.FC<{closeModal?:boolean}> 
    = ({closeModal}) => 
    <section className={darkMode?"dark":""}>
        <div style={{maxWidth:400}} className={darkmode_text_config_cln+
            " bg-white dark:bg-slate-900 rounded-xl border-4 border-sky-500 dark:border-sky-700 flex flex-col divide-y-4 dark:divide-slate-500"}>
            {accountInfo?<>
            <div style={{maxHeight:500}} className={"flex flex-col divide-y-2 dark:divide-slate-500 overflow-auto"}>
                {cart.length>0 ? 
                cart.map((v)=><Book_cart_items lang={language} key={v.id} book={v.book} amount={v.amount}/>)
                :<p className="m-2 p-2 self-center">{Word.empty_cart[language]}</p>}
            </div>
            {cart.length>0 ? 
            <div className="flex justify-center p-2 gap-2">  
                <Button onClick={closeModal?()=>(handleOk(),handleOk2()):undefined} className="self-center" size='large' style={{maxWidth:'192px'}} ><Link href={'/cart'}>{Word.buy_now[language]}</Link></Button>
                <Button onClick={closeModal?()=>(handleOk(),handleOk2()):undefined} className="self-center" size='large' style={{maxWidth:'192px'}} ><Link href={'/cart'}>{Word.view_cart[language]}</Link></Button>
            </div>
            :<></>}</>:
            Login_Btn}
        </div>
    </section>

    
    return(
    <>
        
        <Modal title="Menu" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
            <div className="flex w-full justify-center">
                <div className="flex flex-col gap-2 w-fit">
                    <Button type="primary" size="large" icon={darkMode?<DarkModeIcon0/>:<DarkModeIcon1/>}
                    onClick={()=>setDarkMode(!darkMode)}>{Word.darkmode[language]}</Button>
                    <Dropdown menu={{ items: Language_dropdown(language), onClick: ({ key }) =>  setLanguage(key)}}>
                        <Button type="primary" size="large" icon={<LanguageIcon/>} >{Word.language[language]}</Button>
                    </Dropdown>
                    <Cart_Dropdown_Btn openModal/>
                    <User_Dropdown_Btn show_title/>
                </div>
            </div>
        </Modal>
        <Modal title={Word.cart[language]} open={isModalOpen2} onOk={handleOk2} onCancel={handleCancel2}>
            <Cart_Detail closeModal/>
        </Modal>
         <Header className="px-2 gap-2 sm:gap-4" style={{ display: 'flex', alignItems: 'center', justifyContent:'space-around' }}>
            
                <Link className="hidden md:block" href="/shop/all"><AppIcon/></Link>
                <SearchBar language={language}/>
                
                <Button className="sm:hidden" type="primary" size="large" icon={<MenuOutlined className="text-xl"/>}
                 onClick={()=>setIsModalOpen(true)}/>
                
                <Flex className="gap-4 hidden sm:flex" justify="space-between" align="center">
                    <Tooltip title={Word.darkmode[language]}>
                    <Button type="primary" size="large" icon={darkMode?<DarkModeIcon0/>:<DarkModeIcon1/>} onClick={()=>setDarkMode(!darkMode)}/>
                    </Tooltip>
                    
                    <Dropdown menu={{ items: Language_dropdown(language), onClick: ({ key }) =>  setLanguage(key)}}>
                        <Button type="primary" size="large" icon={<LanguageIcon/>}>
                            <Space>
                            </Space>
                        </Button>
                    </Dropdown>
                    <Cart_Dropdown_Btn/>
                    <User_Dropdown_Btn/>
                    
                </Flex>
        </Header>
        </>)}

export default TopBar;

function Book_cart_items({book,amount,lang}:{book:Book_Info_Lite, amount:number,lang:string}){
    return (
    <div className="flex m-2 p-2 gap-2">
        <div className="w-1/3 truncate flex items-center relative">
            <Image alt={book.name+" Image"} src={book.img}	fill={true} className="object-contain"></Image>
        </div>
        <div className="w-2/3 flex flex-col">
            <Link href={'/product/'+book.id} className="line-clamp-2"><p>{book.name}</p></Link>
            <b>{num_to_price(book.price)}</b>
            <p>{Word.amount_2[lang]} {amount}</p>
        </div>
    </div>)
}


import { num_to_price } from "../function";
import { darkmode_text_config_cln } from "../css_classname";
import { useContext, useEffect, useState } from "react";
import { AccountContext, LangContext, CartContext } from "@/app/(shop)/client_layout";
import Link from "next/link";
import { MenuOutlined } from "@ant-design/icons";
import { Account_Info, Book_Info_Lite, Cart_Item, domain } from "../data_type";
import { useRouter } from "next/navigation";

/*

<Button type="primary" icon={<AppIcon />} size="large" />


*/