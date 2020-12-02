import React, { useContext, useEffect } from "react"
import { FlowerContext } from "../flowers/FlowerProvider"
import { Nursery } from "./Nursery"
import { NurseryContext } from "./NurseryProvider"

export const NurseryList = () => {
    const {nurseries, getNurseries} = useContext(NurseryContext)
    const {flowers, getFlowers} = useContext(FlowerContext)

    useEffect(() => {
        getFlowers()
        .then(getNurseries)
    }, [])

    return (
        <div className="nurseryList">
            {
                nurseries.map(nursery => {
                    return <Nursery key={nursery.id} Nursery={nursery} Flowers={flowers} />
                }
                )
            }
        </div>
    )
}