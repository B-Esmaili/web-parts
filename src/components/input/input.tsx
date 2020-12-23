
import React, { useEffect, useState } from 'react';
import { InputProps } from './types';
import styled from "styled-components";
import tw from "twin.macro";
import { Spinner } from '../spinner';
import { motion, AnimatePresence } from 'framer-motion';

const ControlWrap = styled.div`
  ${tw`
     flex
     flex-col
  `}
`;

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

const ValidationMessage = styled(motion.span).attrs({
    animate: {
        opacity: 1,
        y: "0%"
    },
    exit: {
        opacity: 0,
        y: "-20%"
    },
    initial: {
        opacity: 0,
        y: "-20%"
    }
})`
   ${tw`
     p-1 
   `}
`



const Input: React.FC<InputProps> = React.forwardRef((props, ref : React.Ref) => {

    const {
        startIcon,
        endIcon,
        loading,
        onChange,
        validationMessage,
        ...rest
    } = props;

    return <ControlWrap>
        <InputContainer
            loading
        >
            {
                startIcon && <IconWrap>{startIcon}</IconWrap>
            }
            <InputField
                onChange={onChange}
                ref={ref}
                {...rest} />
            {
                loading && <Spinner />
            }
            {
                (endIcon && !loading) && <IconWrap>{endIcon}</IconWrap>
            }
        </InputContainer>
        <AnimatePresence>{
            validationMessage && (
                <ValidationMessage children={validationMessage}
                />
            )
        }
        </AnimatePresence>
    </ControlWrap>
});


Input.defaultProps = {
    loading: false
}

export {
    Input
}