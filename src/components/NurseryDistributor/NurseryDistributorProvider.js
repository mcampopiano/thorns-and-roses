import React, { useState } from "react"

export const NurseryDistributorContext = React.createContext()

export const NurseryDistributorProvider = () => {
    const [nurseryDistributors, setNurseryDistributors] = useState([])

    const getNurseryDistributors = () => {
        return fetch("http://localhost:8088/NurseryDistributors?_expand=nursery&_expand=distributor")
    }

    return (
        <NurseryDistributorContext.Provider value={{nurseryDistributors, setNurseryDistributors, getNurseryDistributors}}>
            {props.children}
        </NurseryDistributorContext.Provider>
    )
}