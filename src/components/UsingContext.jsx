import React, { createContext, useContext, useState } from 'react'

export const Context = createContext();

const injectContext = Component => {
    const UserContext = (props) => {

        const [user, setUser] = useState(null)

        const login = () => {
            setUser({ email: 'lrodriguez@4geeks.co' })
        }

        const logout = () => {
            setUser(null)
        }

        return (
            <Context.Provider value={{ user, login, logout }}>
                <Component {...props} />
            </Context.Provider>
        )

    }
    return UserContext
}

const UsingContext = () => {
    const { user, login, logout } = useContext(Context);

    return (
        <>
            <div>Using useContext</div>
            <div>
                {
                    !!user ?
                        (
                            <>
                                <p>{user.email}</p>
                                <button className='btn btn-primary btn-sm' onClick={logout}>Logout</button>
                            </>
                        ) : (
                            <>
                                <button className='btn btn-primary btn-sm' onClick={login}>Login</button>
                            </>
                        )
                }

            </div>
        </>
    )
}

export default injectContext(UsingContext)