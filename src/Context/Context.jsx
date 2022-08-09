import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [userData , SetUserData] = React.useState('')

    return (
        <Context.Provider value={{userData , SetUserData}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}