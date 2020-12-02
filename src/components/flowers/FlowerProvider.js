import React, { useState } from "react"

export const FlowerContext = React.createContext()

export const FlowerProvider = (props) => {
    const [flowers, setFlowers] = useState([])

    const getFlowers = () => {
        return fetch("http://localhost:8088/flowers")
        .then(r => r.json())
        .then(setFlowers)
    }

    return (
        <FlowerContext.Provider value={{flowers, getFlowers}}>
            {props.children}
        </FlowerContext.Provider>
    )
}