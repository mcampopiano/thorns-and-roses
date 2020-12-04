import React, { useContext, useEffect } from "react"
import { FlowerContext } from "../flowers/FlowerProvider"
import { NurseryDistributorContext } from "../NurseryDistributor/NurseryDistributorProvider"
import { NurseryFlowerContext } from "../nurseryFlowers/nurseryFlowerProvider"
import { Distributor } from "./Distributor"
import { DistributorContext } from "./DistributorDataProvider"

export const DistributorList = () => {
    const {distributors, getDistributors} = useContext(DistributorContext)
    const {nurseryDistributors, getNurseryDistributors} = useContext(NurseryDistributorContext)
    const {nurseryFlowers, getNurseryFlowers} = useContext(NurseryFlowerContext)

    useEffect(() => {
        getNurseryDistributors()
        .then(getNurseryFlowers)
        .then(getDistributors)
    }, [])

    return (
        <div className="distributorList">
            {
                distributors.map(distributor => {
                    // debugger
                    const relatedNurseries = nurseryDistributors.filter(nd => nd.distributorId === distributor.id)
                    const reducer = relatedNurseries.map(rn => )
                    const filteredFlowers = relatedNurseries.map(rn => {
                        return nurseryFlowers.filter(nf => nf.nurseryId === rn.id)
                    })
                    return <Distributor key={distributor.id} distributor={distributor} filteredFlowers={filteredFlowers} />
                })
            }
        </div>
    )
}