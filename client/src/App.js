import React from 'react'
import { Loader } from './components/Loader/Loader'

function App() {
    const { login, logout, token, userId, ready } = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return <Loader />
    }

    return (
        <AuthContext.Provider value={{
            login, logout, token, userId, isAuthenticated
        }}>
            <Router>
                <div className="container">
                    { isAuthenticated ? <Navbar /> : null }
                    { routes }
                </div>
            </Router>
        </AuthContext.Provider>
    )
}


export default App
