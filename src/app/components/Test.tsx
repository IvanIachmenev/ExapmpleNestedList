'use client'

import { Button, Input } from "@mui/material";
import { useState } from "react";
import { schedule } from "../../../public/data";

type Props = {
  urlDoc: string;
}

export default function Test({ urlDoc }: Props) {

  return (
    <div style={{
      width: "100%",
      height: "100vh"
    }}>
      <iframe style={{
      width: "100%",
      height: "100%"
    }} src={urlDoc}/>
    </div>
  );
}
