import React from "react"
import { Route } from "react-router-dom"
import { DistributorProvider } from "./distributors/DistributorDataProvider"
import { DistributorList } from "./distributors/DistributorList"
import { NurseryList } from "./nurseries/NurseryList"
import { NurseryProvider } from "./nurseries/NurseryProvider"
import { NurseryDistributorProvider } from "./NurseryDistributor/NurseryDistributorProvider"
import { NurseryFlowerProvider } from "./nurseryFlowers/nurseryFlowerProvider"

export const ApplicationViews = (props) => {
    return (
        <>
            <NurseryFlowerProvider>
                <NurseryProvider>
                    <Route exact path="/nurseries">
                        <NurseryList />
                    </Route>
                </NurseryProvider>
            </NurseryFlowerProvider>

            <NurseryDistributorProvider>
                <NurseryFlowerProvider>
                    <DistributorProvider>
                        <Route exact path="/distributors">
                            <DistributorList />
                        </Route>
                    </DistributorProvider>
                </NurseryFlowerProvider>
            </NurseryDistributorProvider>


            <Route exact path="/retailers">
                <></>
            </Route>
        </>
    )
}