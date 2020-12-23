import React from "react";
import {Input} from "./input";
import {
    PriceTag as PriceTagIcon
} from '@styled-icons/icomoon/PriceTag';
import {
    Dollar as DollarIcon
} from '@styled-icons/boxicons-regular/Dollar';
import styled from 'styled-components';

 

export default{
    title : "Input",
    component : Input
}

export const DefaultFlavor = () => (
    <Input 
       loading
       onChange={(e)=>alert(e.target.value)}
       placeholder="Type something here"
       startIcon={<PriceTagIcon color="gray" size="24" />}
       endIcon={<DollarIcon size="24"/>}
     />
)