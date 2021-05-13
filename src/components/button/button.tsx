import React, { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import tw from 'twin.macro'
import Spinner from './spinner'
import { generateBgColor } from './color-gen'

export enum ButtonColor {
    black = "red",
    white = "white",
    gray = "gray",
    red = "red",
    yellow = "yellow",
    green = "green",
    blue = "blue",
    indigo = "indigo",
    purple = "purple",
    pink = "pink",
}

export interface ButtonProps {
    content?: ReactNode,
    children: ReactNode,
    color?: string,
    loading?: boolean,
    backgroundTint?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900,
    background?: ButtonColor | string
}

const ButtonBase = styled.button<Pick<ButtonProps, 'color' | 'background'>>`
    color : ${(props) => props.color ?? props.theme.colors?.button?.color ?? "#000"};
    ${(props) => props.background};
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

    let { content, loading, background, backgroundTint, children } = props;
    const bgColor = generateBgColor(background ?? "", backgroundTint ?? 500);

    return <ButtonBase color={props.color} background={bgColor}>
        {
            loading && <Spinner></Spinner>
        }
        {content ?? children}
    </ButtonBase>
}

Button.defaultProps = {
    background: "White",
    backgroundTint: 500
}

export {
    Button
}
