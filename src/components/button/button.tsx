import React from 'react'
import styled from 'styled-components'
import tw from 'twin.macro'
import Spinner from './spinner'

export interface ButtonProps {
    content: string,
    color: string,
    loading: boolean,
    background : string
}

const ButtonBase = styled.button<Pick<ButtonProps, 'color' | 'background'>>`
    color : ${(props) => props.color ?? props.theme.colors?.button?.color ?? "#000"};
    background : ${(props)=> props.background ?? props.theme.colors?.button?.bgColor ?? "#fff"};
    ${tw`
       cursor-pointer
       p-2
       px-5
       border-2
       border-blue-500
       rounded
       flex
    `}
`;

const Button: React.FC<ButtonProps> = (props: ButtonProps) => {

    const { content, loading ,background } = props;

    return <ButtonBase color={props.color} background={background}>
        {
            loading && <Spinner></Spinner>
        }
        {content}
    </ButtonBase>
}

export {
    Button
}