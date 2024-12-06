import { Button } from "@mui/material";
import { ReactNode, useState } from "react"

type Props = {
    children: ReactNode;
}

export default function List({ children }: Props) {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <div style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            width: "100px"
        }}>
            <Button onClick={() => setIsOpen(!isOpen)}>
                Open
            </Button>
            { isOpen && children }
        </div>
    );
}