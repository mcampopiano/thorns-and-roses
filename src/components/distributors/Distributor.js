import React from "react"

export const Distributor = ({distributor, filteredFlowers}) => {
    return (
        <div className="distributor">
            <h2>{distributor.name}</h2>
            <ul>
                {
                    filteredFlowers.map(ff => {
                        debugger
                    return <li key={ff.id}>{ff.flower.species}</li> 
                    })
                }
            </ul>
        </div>
    )
}