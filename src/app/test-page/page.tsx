'use client'

import { Button } from "@mui/material";
import { useState } from "react"
import Test from "../components/Test";
import List from "../components/List";

export default function TestPage() {
    const [url, setUrl] = useState<string>('https://www.standart-bk.ru/doc/20210628/doc023.pdf');

    const [text, setText] = useState('');

    const fetchStudy = async () => {
        //fetch data...
        setUrl('https://www.standart-bk.ru/doc/20210628/blok54s.pdf')
        setText('')
    }

    const fuckBack = () => {
        setUrl('https://www.standart-bk.ru/doc/20210628/doc023.pdf')
        setText('')
    }

    const fetchText = () => {
        setUrl('');
        //fetch data
        setText("text biba boba")
    } 

    const comboVombo = () => {
        //fetch data
        setUrl('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj0Yrx17n1drkMYpW55ZQkkXegIynoji4hJA&s');
        setText("cat")
    }

    return(
        <div>
            <div style={{
                // width: "100px"
            }}>
                <List>
                    <Button onClick={fetchStudy}>Open another doc</Button>
                    <Button onClick={fuckBack}>Fuck back</Button>
                    <List>
                        <Button onClick={fetchText}>Fetch Text</Button>
                        <Button onClick={comboVombo}>Combo</Button>
                    </List>
                </List>
            </div>
            { url && <Test urlDoc={url} />}
            { text && <>{text}</> }
        </div>
    )
}