import React from "react"

export const Distributor = ({distributor, filteredFlowers}) => {
    return (
        <div className="distributor">
            <h2>{distributor.businessName}</h2>
            <ul>
                {
                    filteredFlowers[0].map(ff => {
                        // debugger
                    return <li key={ff.id}>{ff.flower.species} ${(ff.price * (distributor.priceMarkupPercentage/100) + ff.price)}</li> 
                    })
                }
            </ul>
        </div>
    )
}