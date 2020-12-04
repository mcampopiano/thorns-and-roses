import React, { useState } from "react"

export const DistributorContext = React.createContext()

export const DistributorProvider = () => {
    const [distributors, setDistributors] = useState([])

    const getDistributors = () => {
        return fetch("http://localhost:8088/distributors")
        .then(r => r.json())
        .then(setDistributors)
    }

    return (
        <DistributorContext.Provider value={{distributors, setDistributors, getDistributors}}>
            {props.children}
        </DistributorContext.Provider>
    )
}