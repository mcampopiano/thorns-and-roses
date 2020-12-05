import React, { useState } from "react"

export const NurseryDistributorContext = React.createContext()

export const NurseryDistributorProvider = (props) => {
    const [nurseryDistributors, setNurseryDistributors] = useState([])

    const getNurseryDistributors = () => {
        return fetch("http://localhost:8088/NurseryDistributors?_expand=nursery&_expand=distributor")
        .then(r => r.json())
        .then(setNurseryDistributors)
    }

    return (
        <NurseryDistributorContext.Provider value={{nurseryDistributors, setNurseryDistributors, getNurseryDistributors}}>
            {props.children}
        </NurseryDistributorContext.Provider>
    )
}