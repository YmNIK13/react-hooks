import React, {useEffect, useState} from 'react'

function App() {
    const [type, setType] = useState('users')
    const [data, setData] = useState([])
    const [pos, setPos] = useState({
        x: 0, y: 0
    })

    const mouseMoveHandler = event => {
        setPos({
            x: event.clientX,
            y: event.clientY
        })
    }

    console.log('Component render')

    // useEffect(() => {
    //     console.log('render')
    // })

    useEffect(() => {
        console.log(`type change ${type}`)

        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(response => response.json())
            .then(json => setData(json))

        return () => {
            console.log('clean type')
        }
    }, [type])

    useEffect(() => {
        console.log('Component did mount')

        // подписываемся на событие
        window.addEventListener('mousemove', mouseMoveHandler)

        // будет вызвано только когда компонент удалится
        return () => {
            // отписываемся от события
            window.removeEventListener('mousemove', mouseMoveHandler)
        }
    }, [])

    return (
        <div>
            <h1>Ресурс: {type}</h1>

            <button onClick={() => setType('users')}>Пользователи</button>
            <button onClick={() => setType('todos')}>Todos</button>
            <button onClick={() => setType('posts')}>Посты</button>

            {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
            <pre>{JSON.stringify(pos, null, 2)}</pre>
        </div>
    )
}

export default App;
