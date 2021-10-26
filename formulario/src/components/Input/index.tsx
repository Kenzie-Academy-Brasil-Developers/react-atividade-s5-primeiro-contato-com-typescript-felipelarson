import { InputHTMLAttributes } from "react"
import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder: string;
    label?: string;
}

export const Input = ({placeholder, label, ...rest}:InputProps) => {
    return (
        <div>
            {label && <label>{label}</label>}
            <input placeholder={placeholder} {...rest} />
        </div>
    )
}
