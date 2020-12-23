
import React from 'react';
import { InputProps } from './types';
import styled from "styled-components";
import tw from "twin.macro";
import {Spinner} from '../spinner';

const InputContainer = styled.div<{ loading: boolean }>`
      ${tw`
        flex
        items-center
        border-2
        border-gray-300
        border-solid
        px-2
        py-2
        rounded-md
      `}
`;

const InputField = styled.input`
     ${tw`
         border-0
         focus:outline-none
         w-full
         mx-2
         bg-transparent
     `}
`;

const IconWrap = styled.div`
   ${tw`
      flex-auto
      flex-shrink-0      
   `}
`

const Input: React.FC<InputProps> = (props) => {

    const {
        startIcon,
        endIcon,
        loading,
        onChange,
        placeholder
    } = props;


    return <InputContainer
        loading
    >
        {
            startIcon && <IconWrap>{startIcon}</IconWrap>
        }
        <InputField 
            onChange={onChange}
            placeholder={placeholder}/>
        {
            loading && <Spinner/>
        }
        {
            (endIcon && ! loading) && <IconWrap>{endIcon}</IconWrap>
        }
    </InputContainer>
}


Input.defaultProps = {
    loading: false
}

export {
    Input
}