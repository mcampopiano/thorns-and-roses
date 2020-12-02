import React, { useContext, useEffect } from "react"
import { NurseryFlowerContext } from "../nurseryFlowers/nurseryFlowerProvider"
import { Nursery } from "./Nursery"
import { NurseryContext } from "./NurseryProvider"

export const NurseryList = () => {
    const {nurseries, getNurseries} = useContext(NurseryContext)
    const {nurseryFlowers, getNurseryFlowers} = useContext(NurseryFlowerContext)

    useEffect(() => {
        getNurseryFlowers()
        .then(getNurseries)
    }, [])

    return (
        <div className="nurseryList">
            {
                nurseries.map(nursery => {
                    const filteredFlowers = nurseryFlowers.filter(nf => nf.nurseryId === nursery.id)
                    return <Nursery key={nursery.id} Nursery={nursery} flowers={filteredFlowers} />
                }
                )
            }
        </div>
    )
}