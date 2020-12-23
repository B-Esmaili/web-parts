import React, { ChangeEvent, useEffect, useState } from "react";
import { Input } from "./input";
import {
    PriceTag as PriceTagIcon
} from '@styled-icons/icomoon/PriceTag';
import {
    Dollar as DollarIcon
} from '@styled-icons/boxicons-regular/Dollar';
import styled from 'styled-components';
import { Button } from "../button";



export default {
    title: "Input",
    component: Input
}

export const DefaultFlavor = () => {

    const [validationMessage,setValidationMessage] = useState("");
    const [value,setValue] = useState("");
    const [loading,setLoading] = useState(false);

    useEffect(()=>{        
        let msg = value ? "" : "This field is required";
        setValidationMessage(msg);
    },[value]);

    const handleChange = (e : ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value);
    }

    useEffect(()=>{
        let handle = setInterval(()=>{
            setLoading(l=>!l);
        },2000);

        return ()=> clearInterval(handle);
    },[]);

   return <div>
        <Input
            loading={loading}
            value={value}
            onChange={handleChange}
            validationMessage={validationMessage}
            placeholder="Type something here"
            startIcon={<PriceTagIcon color="gray" size="24" />}
            endIcon={<DollarIcon size="24" />}
        /> 
    </div>
}