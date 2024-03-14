// export default function Sever_ProductLayout({
//   children, // will be a page or nested layout
// }: {
//   children: React.ReactNode
// }) {
//   return (
//   <section>
//     {/* Include shared UI here e.g. a header or sidebar */}
//     <Content style={{ paddingLeft: '48px'}}>
//     <Custom_Brcr category={category}/>
//         <Layout className={bg_color_className} 
//         style={{ padding: '12px 0',}}
//         ><SideBar available_path={available_path[category]||[]}/>
        
//         <Content style={{ paddingLeft: '', minHeight: 280 }}>
//         {children}
//         </Content>
//         </Layout>
//     </Content>
//     <nav></nav>

//   </section>
//         {children}
//   )
// }