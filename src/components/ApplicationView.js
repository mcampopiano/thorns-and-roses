import React from "react"
import { Route } from "react-router-dom"
import { NurseryList } from "./nurseries/NurseryList"
import { NurseryProvider } from "./nurseries/NurseryProvider"
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

            <Route exact path="/distributors">
                <></>
            </Route>
            <Route exact path="/retailers">
                <></>
            </Route>
        </>
    )
}