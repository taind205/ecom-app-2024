import Client_ShopTopbarLayout from "./client_layout"

export default function Sever_ShopTopBarLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode
}) {
  return (
    <Client_ShopTopbarLayout>
        {children}
    </Client_ShopTopbarLayout>
  )
}