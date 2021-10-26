import { ReactNode } from "react"
import './styles.css'

interface CardProps {
    children ?: ReactNode
}

export const Card = ({children}: CardProps) => {
    return (
        <div className="card">
            {children}
        </div>
    )
}
