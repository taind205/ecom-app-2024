'use client'

import { useContext } from "react"
import { LangContext } from "../../../client_layout"
import Word from "@/app/language";
import { Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import Link from "next/link";
import { darkmode_text_config_cln } from "@/app/component/css_classname";

const CompletePage: React.FC = () => {
    const lang = useContext(LangContext);

    return(
        <div className={darkmode_text_config_cln+"flex justify-center px-2 py-4 sm:px-4 lg:px-6 xl:px-8"}>
            <div className="flex flex-col items-center gap-2 max-w-[500px]">
                <div><CheckCircleOutlined className="text-[40px] text-green text-green-500	" /></div>
                <div className="text-xl bold">{Word.order_complete_title[lang]}</div>
                <p>{Word.order_complete_msg[lang]}</p>
                <Button ><Link href="/shop/all">{Word.continue_shopping[lang]}</Link></Button>
            </div>

        </div>
    )
}

export default CompletePage;