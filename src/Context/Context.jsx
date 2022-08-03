import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [state , SetState] = React.useState([])

    return (
        <Context.Provider value={{state , SetState}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}