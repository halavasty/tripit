import { Children } from "react"
import "./NewTripButton.css"

export const NewTripButton = ({children, ...props}) => {
    return(
        <button {...props} className="NewTripButton">{children}</button>
    )
}