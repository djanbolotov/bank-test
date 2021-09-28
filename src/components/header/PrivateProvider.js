import React from 'react'
import {Route, Redirect } from 'react-router-dom'

export default function PrivateProvider({component: Component, ...rest}) {
    const token = localStorage.token
    return (
        <Route
        {...rest}
        render={props => {
           return  token?  <Component{...props} /> : <Redirect to="/login"/>
        }}
        >
           
            
        </Route>
    )
}
