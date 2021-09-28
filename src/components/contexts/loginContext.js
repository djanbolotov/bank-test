import React, {useContext, useState, useEffect} from 'react'
import {auth} from '../../base'

const LoginContext = React.createContext()

export function useLogin(){
    return useContext(LoginContext)
}

export function LoginProvider({children}) {
    const [user, setUser] = useState()
    

    const value = {
        user,
        SignIn,
        SignUp, 
        logOut,
    }


    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
                setUser(user)
        })

        return unsubscribe
    },[])
    function logOut(){
        localStorage.token = ""
        return auth.signOut();
    }
    function SignUp(email, password) {
        return auth.createUserWithEmailAndPassword(email, password)
    }

    async function SignIn(email, password) {
        let data = await auth.signInWithEmailAndPassword(email, password)
        localStorage.setItem("token", JSON.stringify(data.user._delegate.accessToken))
        return data;
    }
    return (
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
}
