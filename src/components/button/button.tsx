import React from 'react'
import styled from 'styled-components'

export interface ButtonProps {
    content : string,
    color: string
}

const ButtonBase = styled.button<{color : string}>`
    color : ${(props)=> props.color ?? props.theme.colors.buttonColor};
`;

const Button : React.FC<ButtonProps> = (props : ButtonProps)=>{

    const {content} = props;

    return <ButtonBase color={props.color}>
        {content}
    </ButtonBase>
}

export {
    Button 
}