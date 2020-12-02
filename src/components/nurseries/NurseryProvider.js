import React, { useState } from "react"

export const NurseryContext = React.createContext()

export const NurseryProvider = (props) => {
    const [nurseries, setNurseries] = useState([])

    const getNurseries = () => {
        return fetch("http://localhost:8088/nurseries")
        .then(r => r.json())
        .then(setNurseries)
    }

    return (
        <NurseryContext.Provider value={{nurseries, getNurseries}}>
            {props.children}
        </NurseryContext.Provider>
    )
}