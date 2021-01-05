import React, {useContext, useState} from 'react'

const AlertContext = React.createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

// const AlertContextToggle = React.createContext()
// export const useAlertToggle = () => {
//     return useContext(AlertContextToggle)
// }

export const AlertProvider = ({children}) => {
    const [alert, setAlert] = useState(false)

    const toggle = () => {
        setAlert(prev => !prev)
    }

    return (
        <AlertContext.Provider value={{
            visible: alert,
            toggle
        }}>
            {/*<AlertContextToggle.Provider value={toggle}>*/}
            {/*</AlertContextToggle.Provider>*/}


            {children}
        </AlertContext.Provider>
    )
}