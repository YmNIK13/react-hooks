import React, {useEffect, useRef, useState} from 'react'

let renderCount = 1

function App() {
    // const [renderCount, setRenderCount] = useState(1)
    // eslint-disable-next-line no-undef
    const [value, setValue] = useState('initial')
    const renderCountRef = useRef(1)
    const inputRef = useRef(null)
    const prevValue = useRef('')

    useEffect(() => {
        // setRenderCount(prev => prev + 1)

        renderCount++;

        renderCountRef.current++;

        console.log(inputRef.current)
    })

    useEffect(() => {
        // сработает до изменения
        prevValue.current = value
    }, [value])

    const focus = () => inputRef.current.focus()

    return (
        <div>
            <h1>Количество рендеров: {renderCount} ==> {renderCountRef.current}</h1>
            <hr/>
            <h2>Прошлое состояние: {prevValue.current}</h2>
            <input ref={inputRef} type="text" onChange={e => setValue(e.target.value)} value={value}/>
            <button className='btn btn-success' onClick={focus}>Фокус</button>
        </div>
    )
}

export default App;
