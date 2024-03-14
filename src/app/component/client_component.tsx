'use client'
//All client import put here for client side rendering

import { Button, Checkbox, Flex, InputNumber, Menu, Skeleton, Slider, Typography } from 'antd';
import { Layout } from "antd";

export const { Header, Content, Footer, Sider } = Layout;
export const { Text } = Typography;

export function Loading_UI({type}:{type?:string}) {
    return type=='page'? <Skeleton active/> :
    type=='item'? <Skeleton active/> :
    <Skeleton/>  
}