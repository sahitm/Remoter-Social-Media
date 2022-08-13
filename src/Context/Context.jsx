import React from 'react'
import InitialPosts from '../helpers/InitialPosts'

const Context = React.createContext()

function ContextProvider(props) {

    const [userData , SetUserData] = React.useState('')
    const [postData , SetPostData] = React.useState(JSON.parse(localStorage.getItem('postdata')))
    console.log(postData)
    const [initialData, SetInitialData] = React.useState([...InitialPosts]) 
    const [loggedIn, SetLoggedIn] = React.useState('')

    return (
        <Context.Provider value={{userData, SetUserData, postData , SetPostData, initialData, SetInitialData, loggedIn, SetLoggedIn}}>
            {props.children}
        </Context.Provider>
    )
}

export {ContextProvider,Context}