import React, {useContext, useReducer} from 'react'

const AlertContext = React.createContext()

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
    switch (action.type) {
        case SHOW_ALERT:
            return {...state, visible: true, text: action.text}
        case HIDE_ALERT:
            return {...state, visible: false, text: ''}

        default:
            return state
    }
}

export const useAlert = () => {
    return useContext(AlertContext)
}

export const AlertProvider = ({children}) => {
    // инициируем редюсер
    const [state, dispatch] = useReducer(reducer, {
        visible: false,
        text: ''
    })

    // открытые get-свойства/функции контекста
    const valuesProvider = {
        visible: state.visible,
        text: state.text,
        show: (text) => dispatch({type: SHOW_ALERT, text}),
        hide: () => dispatch({type: HIDE_ALERT})
    }

    return (
        <AlertContext.Provider value={valuesProvider}>
            {children}
        </AlertContext.Provider>
    )
}