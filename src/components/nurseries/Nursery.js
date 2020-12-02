import React from "react"

export const Nursery = ({Nursery, Flowers}) => (
    <div className="nursery">
        <h2>{Nursery.businessName}</h2>
        <ul>
            {
                Flowers.map(flower => {
                return <li key={flower.id}>{flower.species}</li>
                })
            }
        </ul>
    </div>
)