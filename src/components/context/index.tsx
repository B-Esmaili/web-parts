import React, { createContext, ReactNode, useReducer } from "react";
import { GlobalStyles } from 'twin.macro'

export interface WPContextProps {
    children?: ReactNode,
    options: WPOptions
}

export interface WPOptions {

}

export interface WPAction {
    type: string,
    payload: any
}

const WPContext = createContext(null);

const WPContextProvider: React.FC<WPContextProps> = (props) => {

    const { children, options } = props;

    const _options: WPOptions = {

        ...options
    }

    const reducer = (state: WPOptions, action: WPAction) => {

        return state;
    };

    const _value: any = useReducer(reducer, _options);

    return <WPContext.Provider value={_value} >
        <GlobalStyles/>
        {
            children
        }
    </WPContext.Provider>
}


export {
    WPContextProvider
}