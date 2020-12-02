import React from "react"

export const Nursery = ({Nursery, flowers}) => (
    <div className="nursery">
        <h2>{Nursery.businessName}</h2>
        <ul>
            {
                flowers.map(flower => {
                return <li key={flower.flowerId}>{flower.flower.species} ${flower.price}</li>
                })
            }
        </ul>
    </div>
)