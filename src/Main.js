import React from 'react'
import {useAlert} from './Alert/AlertContext'

export default function Main() {
    const {show} = useAlert()

    return (
        <>
            <h1>Привет в примере с Context</h1>
            <button onClick={() => show('Это очень и очень важное сообщение из Main.js')} className="btn btn-success">Показать alert</button>
        </>
    )
}