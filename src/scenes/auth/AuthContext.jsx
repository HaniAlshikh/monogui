import React, {useState} from 'react'

const M8_AUTH_INFO_KEY = 'm8-user-auth-info';

const AuthContext = React.createContext({
    hostname: "",
    callbackUrl: "",
    username: "",
    accessToken: "",
    expiry: null,
    isLoggedIn: false,
    login: (authInfo) => {
    },
    logout: () => {
    },
})

const getTimeToExpiration = (expiry) => {
    const current = new Date().getTime() / 1000
    return expiry - current // in seconds
}

export const AuthContextProvider = (props) => {
    let authInfo = JSON.parse(localStorage.getItem(M8_AUTH_INFO_KEY))
    const remainingToExpiry = getTimeToExpiration(Number(authInfo?.expiry) || 0)
    console.log(`remaining for token to expiry: ${remainingToExpiry}`)
    if (remainingToExpiry <= 0) {
        authInfo = null
    }

    const [userName, setUserName] = useState(authInfo?.username)
    const [accessToken, setAccessToken] = useState(authInfo?.accessToken)
    const [expiry, setExpiry] = useState(authInfo?.expiry)

    const userIsLoggedIn = !!accessToken
    console.log(`updating is logged in status: ${userIsLoggedIn}`)

    const logoutHandler = () => {
        setAccessToken(null)
        localStorage.removeItem(M8_AUTH_INFO_KEY)
    }

    const loginHandler = (authInfo) => {
        setUserName(authInfo.username)
        setAccessToken(authInfo.accessToken)
        setExpiry(authInfo.expiry) // in seconds
        authInfo.expiry = authInfo.expiry.toString() // TODO: JSON.stringify can't handle bigInt -> move to cookies should help
        console.log(`logging user in: ${JSON.stringify(authInfo)}`)
        localStorage.setItem(M8_AUTH_INFO_KEY, JSON.stringify(authInfo))
    }

    const contextValue = {
        hostname: window._env_.MONOGUI_M8_API,
        username: userName,
        accessToken: accessToken,
        expiry: expiry,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    }

    return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>
}

export default AuthContext