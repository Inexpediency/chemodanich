import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { AuthPage, MainPage } from './pages'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                {/*<Route path="/create" exact>*/}
                {/*    <CreatePage />*/}
                {/*</Route>*/}
                {/*<Route path="/detail/:id">*/}
                {/*    <DetailPage />*/}
                {/*</Route>*/}
                <Redirect to="/" />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <AuthPage />
            </Route>
            <Redirect to="/" />
        </Switch>
    )
}
