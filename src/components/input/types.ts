

export interface InputProps {
    loading? : boolean
    startIcon? : React.ReactNode,
    endIcon? : React.ReactNode,
    placeholder:string,
    value : string,
    validationMessage?:string | React.ReactNode,
    onChange? : React.ChangeEventHandler<HTMLInputElement>
}

