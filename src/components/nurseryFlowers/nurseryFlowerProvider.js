import React, { useState } from "react"

export const NurseryFlowerContext = React.createContext()

export const NurseryFlowerProvider = (props) => {
    const [nurseryFlowers, setNurseryFlowers] = useState([])

    const getNurseryFlowers = () => {
        return fetch("http://localhost:8088/nurseryFlowers?_expand=flower&_expand=nursery")
        .then(r => r.json())
        .then(setNurseryFlowers)
    }

    return (
        <NurseryFlowerContext.Provider value={{nurseryFlowers, getNurseryFlowers}}>
            {props.children}
        </NurseryFlowerContext.Provider>
    )
}