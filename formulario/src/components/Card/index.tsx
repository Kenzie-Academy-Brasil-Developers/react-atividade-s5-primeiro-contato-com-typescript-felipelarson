import { ReactNode } from "react"
import './styles.css'

interface CardProps {
    children ?: ReactNode;
    title ?: string;
}

export const Card = ({children, title}: CardProps) => {
    return (
        <div className="card">
            <p>{title}</p>
            {children}
        </div>
    )
}
