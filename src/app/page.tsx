import { redirect } from "next/navigation";

const App: React.FC = () => {

  redirect('/shop/all');
  return (
    <p>Hello, world</p>
  );
};

export default App;

// const Custom_Brcr:React.FC = () =>  { return (
//     <Breadcrumb style={{ margin: '16px 0' }} items={[
//       {
//         title: 'Home',
//       },
//       {
//         title: <a href="">Application Center</a>,
//       },
//       {
//         title: <a href="">Application List</a>,
//       },
//       {
//         title: 'An Application'
//       },
//       ]}>
//     </Breadcrumb>
//   ) }


{/* <Layout>
        <TopBar darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage}/>
        <Layout>
          <SideBar/>
          <Layout style={{ padding: '0 24px 24px' }}>
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  <Breadcrumb.Item>User</Breadcrumb.Item>
                  <Breadcrumb.Item>Bill</Breadcrumb.Item>
                </Breadcrumb>
              <div
                style={{
                  padding: 24,
                  minHeight: 360
                }}
              >
                Bill is a cat.
              </div>
            </Content>
            </Layout>
          </Layout>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
    </Layout> */}

      {/* <Layout>
      <TopBar darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage}/>
      <Layout style={{ minHeight: '100vh' }}>
        <SideBar/>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280
            }}
          >
            Content
            <p>Main content here</p>
          </Content>
        </Layout>
      </Layout>
    </Layout> */}


      {/* <Layout style={{ minHeight: '100vh' }}>
      <SideBar/>
      <Layout>
        <TopBar darkMode={darkMode} setDarkMode={setDarkMode} language={language} setLanguage={setLanguage}/>
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360
            }}
          >
            Bill is a cat.
            <p>Main content here</p>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
      </Layout>
    </Layout> */}