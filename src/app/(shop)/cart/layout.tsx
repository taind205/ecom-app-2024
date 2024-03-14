'use client'

import { Dispatch, SetStateAction, createContext, useContext, useState } from "react"

export const UseState_SelectedItemsContext = createContext<[number[],Dispatch<SetStateAction<number[]>>]>([[],()=>false]);

export default function PaymentLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    
    const [selectedItems,setSelectedItem] = useState<number[]>([]);

    return (
      <section>
        <UseState_SelectedItemsContext.Provider value={[selectedItems,setSelectedItem]}>
        {children}
        </UseState_SelectedItemsContext.Provider>
      </section>
    )
  }