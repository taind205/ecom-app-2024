import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Checkbox, Flex, Menu, Typography } from 'antd';
import Sider from 'antd/es/layout/Sider';

const { Text, Link } = Typography;
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Sách', 'sub1', null, [
    getItem('Sách khoa học', '1'),
    getItem('Sách kinh tế', '2'),
    getItem('Sách văn hóa', '3'),
  ]),
  getItem('Truyện, tiểu thuyết', 'sub2', null, [
    getItem('Tiểu thuyết', '5'),
    getItem('Truyện ngắn', '6'),
    getItem('Truyện tranh', 'sub3', null, [getItem('Manga', '7'), getItem('Manhua', '8')]),
  ]),
  // <a onClick={()=>alert('Sach')}>
  //
  // getItem('Truyện tranh', 'sub4', null, [
  //   getItem('Manga', '9'),
  //   getItem('Manhua', '10')
  // ]),
];

// const items: MenuProps['items'] = [

//   //getItem('Group', 'grp', null, [
//     getItem('Truyện tranh', '1'), getItem('Sách', '2'),
//          getItem('Tiểu thuyết', '3'), 
//         //  getItem('Option 4', '4')], 'group'),
// ];

const rootSubmenuKeys = ['sub1', 'sub2'];

const App: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (<Sider width={200}>
    {/* <Menu
      onClick={onClick}
      style={{ width: 200 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    /> */}
    <Flex gap={"middle"} vertical={true} className='m-2'>
    <Menu
      onClick={onClick}
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      style={{ backgroundColor:'rgba(255, 0, 0, 0)' }}
      items={items}
    />
    {/* <Menu
      onClick={onClick}
      style={{ backgroundColor:'rgba(255, 0, 0, 0)' }}
      defaultSelectedKeys={[]}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    /> */}
      
      <Flex gap={"small"} vertical={true} className='m-2'>
      <Text>Genre:</Text>
        <Checkbox >Romance</Checkbox>
        <Checkbox >Action</Checkbox>
        <Checkbox >Fiction</Checkbox>
      </Flex>
    </Flex>
    </Sider>
  );
};

export default App;