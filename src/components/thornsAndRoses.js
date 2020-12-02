import React from "react"
import { Route } from "react-router-dom"
import { ApplicationViews } from "./ApplicationView"
import { NavBar } from "./nav/NavBar"


export const ThornsAndRoses = () => (
    <>
        <Route >
            <NavBar />            
            <ApplicationViews />
        </Route>
    </>
)