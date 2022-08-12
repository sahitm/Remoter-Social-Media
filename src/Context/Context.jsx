import React from 'react'

const Context = React.createContext()

function ContextProvider(props) {

    const [userData , SetUserData] = React.useState('')
    const [postData , SetPostData] = React.useState([])
    

    return (
        <Context.Provider value={{userData, SetUserData, postData , SetPostData}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}