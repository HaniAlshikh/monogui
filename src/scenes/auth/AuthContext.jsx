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

const getTimeToExpiration = (expire) => {
    const current = new Date().getTime() / 1000
    console.log(`calculating access token expiration: ${expire} - ${current}`)
    return expire - current // in seconds
}

export const AuthContextProvider = (props) => {
    let authInfo = JSON.parse(localStorage.getItem(M8_AUTH_INFO_KEY))
    const remainingToExpire = getTimeToExpiration(authInfo?.expiry || 0)
    console.log(`remaining for token to expire: ${remainingToExpire}`)
    if (remainingToExpire <= 0) {
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
        setExpiry(authInfo.expiry)
        console.log(`logging user in: ${JSON.stringify(authInfo)}`)
        localStorage.setItem(M8_AUTH_INFO_KEY, JSON.stringify(authInfo))
    }

    const contextValue = {
        hostname: "https://api.monoskope.dev:8443", // TODO config
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