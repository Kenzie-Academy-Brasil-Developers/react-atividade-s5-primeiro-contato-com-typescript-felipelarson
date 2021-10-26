import { ButtonHTMLAttributes, ReactNode } from "react"
import './styles.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
}

export const Button = ({children, ...rest}: ButtonProps) => {
    return (
        <>
            <button className="button" {...rest}>{children}</button>
        </>
    )
}
