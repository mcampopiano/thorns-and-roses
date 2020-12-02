import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/NavBar"


export const ThornsAndRoses = () => (
    <>
        <Route exact path="/">
            <NavBar />            
        </Route>
    </>
)