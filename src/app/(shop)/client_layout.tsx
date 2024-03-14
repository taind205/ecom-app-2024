'use client'

import { Breadcrumb, Button, ConfigProvider, Form, Input, Layout, Modal, notification, theme } from "antd";
import TopBar from "../component/topbar/topbar";
import { createContext, useContext, useEffect, useState } from "react";

import { useRouter } from 'next/navigation'
import { Account_Info, Book_Info_Lite, Cart_Item, domain } from "../component/data_type";
import Word, { Sentence } from "../language";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import Word from "../language";

const { Header, Content, Footer, Sider } = Layout;

export const dark_theme_color = '#001442';
export const default_theme_color = '#addcff';
export const bg_color_className = ' bg-slate-100 dark:bg-slate-950 ';

export const LangContext = createContext("EN");
export const DarkMode_Context = createContext(false);
export const CartContext = createContext<Cart_Item[]>([]);
export const AccountContext = createContext<Account_Info|undefined>(undefined);
export const UpdateCart_Context = createContext<(i_id: number, i_amount: number, book?: Book_Info_Lite) => void>(()=>false);

export default function Client_ShopTopbarLayout({
    children, // will be a page or nested layout 
  }: {
    children: React.ReactNode
  }) {

    const [darkMode, setDarkMode] = useState(false);
    const [language, setLanguage] = useState("EN");
    const [_cart,_setCart] = useState<Cart_Item[]>([]);
    const [accountInfo,setAccountInfo] = useState<Account_Info>();
    const [isModalOpen_Login, setIsModalOpen_Login] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [accountInput, setAccountInput] = useState<string>('admin');
    const [passwordInput, setPasswordInput] = useState<string>('123456');
    const router = useRouter();
    const [modal, contextHolder] = Modal.useModal();
    const [api, contextHolder_notif] = notification.useNotification();

    const storage_acc_id_key='ecma_acc_id';
    const storage_acc_fullname_key='ecma_acc_fullname';

    useEffect(() => {
        router.prefetch('/shop/fill');
        const acc_id = localStorage.getItem(storage_acc_id_key);
        const acc_fullname= localStorage.getItem(storage_acc_fullname_key);
        (acc_id && acc_fullname)? ( setAccountInfo({id:acc_id,fullname:acc_fullname}),getCartItem(acc_id) ):false;
      }, [true]);

    async function getCartItem(id:string) {

      const response = await fetch(domain+'/api/user/cart?id='+id);
      const j = await response.json();
      _setCart(j.data);
      }

    const Logout = ()=>(setAccountInfo(undefined),setCart([]),
    localStorage.removeItem(storage_acc_id_key),localStorage.removeItem(storage_acc_fullname_key));

    const OpenLogin = ()=>setIsModalOpen_Login(true);

    const updateCartItem = (i_id:number, i_amount:number, book?:Book_Info_Lite) => {
      
      if(!accountInfo) {OpenLogin(); return;}
      
      let isLegit = true;
      let isNew = true;

      if(book){
          const newCartItem:Cart_Item[]=cart.map((v) =>  // a new array
          (v.id == i_id)? ((v.amount+i_amount)>v.book.available_num)?
              (isLegit=false,v)
            : 
              (isNew = false,{...v,amount:v.amount+i_amount})
          :
            // The rest haven't changed
            v )

        isLegit? (setCart( isNew?
          [ // with a new array
          ...cart, // that contains all the old items
          {id:i_id,amount:i_amount,book:book} // and one new item at the end
        ]
        : newCartItem),openNotificationWithIcon('success',{name:book.name, amount: i_amount}))
        : openNotification2(2);
      }
      else if(i_amount>0)
        {setCart(cart.map(
            (v:Cart_Item) => (v.id == i_id)? ((i_amount)>v.book.available_num)?
               (isLegit=false,{...v,amount:v.book.available_num})
              : {...v,amount:i_amount} : v));
          isLegit?true:openNotification2(1);
        }
      else if(i_amount==0) setCart(cart.filter( (v:Cart_Item) => v.id != i_id) );
      }
    
    type NotificationType = 'success' | 'info' | 'warning' | 'error';
    const openNotificationWithIcon = (type: NotificationType,item:{name:string, amount:number}) => {
      api[type]({
        message: Word.add_to_cart_success_msg[language],
        description: Sentence.add_items_to_cart(item.amount)[language],
      });
    };
    
  const openNotification2 = (msg_type:number) => {
    api['error']({
      message: msg_type==1?Word.exceed_quantity_msg[language]:Word.exceed_quantity_in_cart_msg[language]
    });
  };

    const handleOk_Login = async () => {
      setConfirmLoading(true);
      const response = await fetch(domain+'/api/user/login',{
          method: "POST",body: JSON.stringify({acc:accountInput,pass:passwordInput})});

        const j = await response.json();
        setConfirmLoading(false);
        if(j.data.err==0)
          {   setIsModalOpen_Login(false);
              setAccountInfo(j.data.acc_info);
              localStorage.setItem(storage_acc_id_key,j.data.acc_info.id);
              localStorage.setItem(storage_acc_fullname_key,j.data.acc_info.fullname);
              getCartItem(j.data.acc_info.id)}
          else {
              error();
      }
    };

    const error = () => {
      modal.error({
        title: Word.login_fail_title[language],
        content: Word.login_fail_msg[language],
      });
    };
  
    const handleCancel_Login = () => {
      console.log('Clicked cancel button');
      setIsModalOpen_Login(false);
    };

    const cart = _cart;
    const setCart = (cart:Cart_Item[]) => _setCart(cart)
    


    // const router = useRouter();

    // useEffect(()=> {router.prefetch('/shop/all/filter'); console.log('prefetch filt effect...'); } ,[])

    return (
      <section className={darkMode?"dark":""}>
        {/* Include shared UI here e.g. a header or sidebar */}
        <LangContext.Provider value={language}>
          <AccountContext.Provider value={accountInfo}>
            <CartContext.Provider value={cart}>
              <UpdateCart_Context.Provider value={updateCartItem}>
                <DarkMode_Context.Provider value={darkMode}>
                <ConfigProvider
                theme={ darkMode?
                {
                // 1. Use dark algorithm
                algorithm: theme.darkAlgorithm,components:{Layout:{headerBg:dark_theme_color,siderBg:dark_theme_color},Select:{clearBg:''},
                Button:{primaryColor:'#4096ff'}
                },
                
                

                // 2. Combine dark algorithm and compact algorithm
                // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
                // Layout:{headerBg:'#75edff',siderBg:'#75edff'}
                }:
                {algorithm: theme.defaultAlgorithm,components:{Layout:{headerBg:default_theme_color,siderBg:default_theme_color},Select:{clearBg:''},
                Button:{primaryColor:'#4096ff'}
                },
              }
                }>
                
                <Layout className={bg_color_className} style={{minHeight: '100vh'}}>
                <TopBar darkMode={darkMode} setDarkMode={setDarkMode} setLanguage={setLanguage} Logout={Logout} openLogin={OpenLogin}/>
                <Content className=''>
                <Modal
                    title={Word.login[language]}
                    open={isModalOpen_Login}
                    confirmLoading={confirmLoading}
                    okButtonProps={{hidden:true}}
                    cancelButtonProps={{hidden:true}}
                    onCancel={handleCancel_Login}
                    // onOk={() => handleOk_Login()}
                    // okText={Word.login[language]}
                    // cancelText={Word.cancel[language]}
                >
                  <Form onFinish={()=>handleOk_Login()}>
                    <Form.Item name='acc' label={Word.account[language]} tooltip='acc123'
                      rules={[{ min:3, required: true, message: Word.acc_input_warn[language], whitespace: false }]}>
                      <Input value={accountInput} onChange={(v)=>setAccountInput(v.target.value)} placeholder={'acc123'}/>
                    </Form.Item>
                    <Form.Item name='pass' label={Word.password[language]} tooltip='123456'
                      rules={[{ min:3, required: true, message: Word.pass_input_warn[language], whitespace: false }]}>
                      <Input.Password value={passwordInput} onChange={(v)=>setPasswordInput(v.target.value)}  placeholder={'123456'}/>
                    </Form.Item>
                    <Form.Item>
                      <div className='flex justify-center'>
                        <Button loading={confirmLoading} size='large' htmlType="submit">
                          {Word.login[language]}
                        </Button>
                      </div>
                    </Form.Item>
                  </Form>
                </Modal>
                {contextHolder}
                {contextHolder_notif}
                {children} 
                </Content>
                <Footer className={bg_color_className} style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
                </Layout>
              </ConfigProvider>
          </DarkMode_Context.Provider></UpdateCart_Context.Provider></CartContext.Provider></AccountContext.Provider></LangContext.Provider>
        <nav></nav>
      </section>
    )
  }
  // Tag:{colorText:'#b134eb'}