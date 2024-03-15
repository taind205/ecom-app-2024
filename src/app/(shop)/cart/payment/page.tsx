'use client'
import React, { useContext, useEffect, useRef, useState } from 'react';
import type { CascaderProps, FormInstance, TableColumnsType } from 'antd';
import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Col,
  Form,
  Image,
  Input,
  InputNumber,
  Radio,
  Row,
  Select,
  Table,
} from 'antd';

const { Option } = Select;

interface DataNodeType {
  value: string;
  label: string;
  children?: DataNodeType[];
}

import { Delivery_Option_Selects, day_of_week_string, delivery, delivery_options_info, location_list_DNT } from '../../product/[id]/client_component';
import { LangContext, CartContext, ClearCart_onOrder } from '../../client_layout';
import Word, { ShortTimePeriodString } from '@/app/language';
import { UseState_SelectedItemsContext } from '../../client_layout';
import { Cart_Item, domain } from '@/app/component/data_type';
import { redirect, useRouter } from 'next/navigation';
import { UpdateCart_Context } from '../../client_layout';
import { GetTotalAmount, GetTotalPrice, OrderDetail_Table, num_to_price } from '@/app/component/function';
import { payment_page_div_cln } from '@/app/component/css_classname';
const residences: CascaderProps<DataNodeType>['options'] = location_list_DNT;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const recent_address = [1,3,8];



const form_input_cln='';// 'max-w-[240px]';



const App: React.FC = () => {
  const lang = useContext(LangContext);
  const cart = useContext(CartContext);
  const [selectedItems,setSelectedItem] = useContext(UseState_SelectedItemsContext);
  const form_ref = useRef<FormInstance>(null);
  const [ward, setWard] = useState(0);
  const [shippingCost, setShippingCost]=useState(0);
  const [loading, setLoading] = useState(false);
  const [form] = Form.useForm();
  const clearCart_onOrder = useContext(ClearCart_onOrder);
  const router = useRouter();

  useEffect(()=>
  (total_amount<1)?router.replace('/cart'):undefined
  ,[])
  
  const product_price:number = GetTotalPrice(cart, selectedItems);
  const total_amount:number = GetTotalAmount(cart, selectedItems);

  async function postOrder(values:any) {
    const response = await fetch(domain+'/api/user/order/post',{
      method: "POST"});
    const j = await response.json();
    
    if(j.data.err==0){
      clearCart_onOrder();
      router.push('/cart/payment/complete');
      }
      
  }

  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
    setLoading(true);
    postOrder(values);
  };

  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="84">+84</Option>
        <Option value="85">+85</Option>
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );

  const suffixSelector = (
    <Form.Item name="suffix" noStyle>
      <Select style={{ width: 70 }}>
        <Option value="USD">$</Option>
        <Option value="CNY">¥</Option>
      </Select>
    </Form.Item>
  );

  const [autoCompleteResult, setAutoCompleteResult] = useState<string[]>([]);

  const onWebsiteChange = (value: string) => {
    if (!value) {
      setAutoCompleteResult([]);
    } else {
      setAutoCompleteResult(['.com', '.org', '.net'].map((domain) => `${value}${domain}`));
    }
  };

  const websiteOptions = autoCompleteResult.map((website) => ({
    label: website,
    value: website,
  }));

  const onCascaderChange = (value: (string | number)[]) => {
    setWard(Number(value[value.length-1]));
    form_ref.current?.resetFields(['shipping']);
  };

  return (
    <div className={payment_page_div_cln[1]}>
      <div className={payment_page_div_cln[2]}>
          {OrderDetail_Table(selectedItems.map((s) => cart.find((v)=>v.id==s)!),lang)}
        </div>
        <div className={payment_page_div_cln[3]}>
          <Form ref={form_ref} className='w-full'
            {...formItemLayout}
            form={form}
            labelWrap
            name="register"
            onFinish={onFinish}
            initialValues={{ prefix: '84' }}
            scrollToFirstError
          >
                <Form.Item name="fullname"
                  label={Word.buyer_name[lang]}
                  // tooltip="What do you want others to call you?"
                  rules={[{ required: true, message: Word.buyer_name_input_warn[lang], whitespace: true }]}
                >
                  <Input className={form_input_cln}/>
                </Form.Item>
                <Form.Item name="phone"
                  label={Word.buyer_phone_num[lang]}
                  rules={[{ required: true, message: Word.buyer_phone_num_input_warn[lang] }]}
                >
                  <Input addonBefore={prefixSelector} className={form_input_cln} />
                </Form.Item>
                <Form.Item name="email"
                  label={Word.buyer_email[lang]}
                  rules={[
                    {
                      type: 'email',
                      message: Word.invalid_email_warn[lang],
                    },
                    {
                      required: true,
                      message: Word.buyer_email_input_warn[lang],
                    },
                  ]}
                >
                  <Input className={form_input_cln} />
                </Form.Item>
                <Form.Item name="address"
                  label={Word.delivery_address[lang]}
                  rules={[
                    { type: 'array', required: true, message: Word.delivery_address_input_warn[lang] },
                  ]}
                  // initialValue={recent_address}
                >
                  <Cascader options={residences} onChange={onCascaderChange} className={form_input_cln} />
                </Form.Item>
                <Form.Item name='shipping' label={Word.shipping_method[lang]}
                  rules={[{required:true,message:Word.shipping_method_input_warn[lang]}]}>
                  <Radio.Group className={form_input_cln} onChange={(v)=>
                    setShippingCost(delivery[v.target.value].price)}>
                    <Delivery_Option_Selects delivery_options_info={delivery_options_info[ward]} lang={useContext(LangContext)} radioGroup />
                  </Radio.Group>
                </Form.Item>
                <Form.Item name="spec_address"
                  label={Word.spec_address[lang]}
                  tooltip={Word.example[lang]+" 97 Hàm Nghi."}
                  rules={[{ required: true, message: Word.spec_address_input_warn[lang], whitespace: true }]}
                >
                  <Input  className={form_input_cln}/>
                </Form.Item>
                <Form.Item
                  name="payment_method"
                  label={Word.payment_method[lang]}
                  rules={[{ required: true, message: Word.payment_method_input_warn[lang] }]}
                >
                  <Select placeholder={Word.select_payment_method[lang]} className={form_input_cln}>
                    <Option value="cod">{Word.cod_payment[lang]}</Option>
                    <Option value="zalopay">{Word.zalopay[lang]}</Option>
                    <Option value="credit_card">{Word.credit_card[lang]}</Option>
                  </Select>
                </Form.Item>
                <div className='text-left p-2 m-2'>
                  <p>{Word.subtotal[lang]+num_to_price(product_price)}</p>
                  <p>{Word.shipping_fee[lang]+num_to_price(shippingCost)}</p>
                  <p className='text-xl text-red-500'>{Word.total[lang]+': '+num_to_price(product_price+shippingCost)}</p>
                </div>
            <Form.Item {...tailFormItemLayout}>
              <div className='flex justify-center'>
                <Button loading={loading} disabled={total_amount<1} size='large' htmlType="submit">
                  {Word.order[lang]}
                </Button>
              </div>
            </Form.Item>
          </Form>
        </div>
        
    </div>
  );
};

export default App;

{/* <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item> */}
