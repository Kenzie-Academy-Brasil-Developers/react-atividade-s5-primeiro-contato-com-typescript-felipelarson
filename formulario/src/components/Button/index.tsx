import { ReactNode } from "react"
import './styles.css'

interface ButtonProps {
    children: ReactNode;
}

export const Button = ({children, ...rest}: ButtonProps) => {
    return (
        <>
            <button {...rest}>{children}</button>
        </>
    )
}
