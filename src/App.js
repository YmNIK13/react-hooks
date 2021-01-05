import React, {useEffect, useMemo, useState} from 'react'

function complexCompute(num) {
    console.log('complexCompute')
    let i = 0
    while (i < 1000000000) i++

    return num * 2
}

function App() {
    const [number, setNumber] = useState(42)
    const [colored, setColored] = useState(false)

    // по сути кеширет значение, и вызовет рендер только когда значение будет изменено
    const styles = useMemo(() => ({
        color: colored ? 'darkred' : 'black'
    }), [colored])

    // помещаем выполнение в ассинхронный поток, чтоб не тормозить общий рендер
    const computed = useMemo(() => complexCompute(number), [number])

    useEffect(() => {
        console.log('Styles changed')
    }, [styles])

    return (
        <>
            <h1 style={styles}>Вычисляемое свойство: {computed}</h1>
            <button onClick={() => setNumber(prev => prev + 1)} className="btn btn-success">Добавить</button>
            <button onClick={() => setNumber(prev => prev - 1)} className="btn btn-danger">Убрать</button>

            <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">Изменить</button>
        </>
    )
}

export default App;
