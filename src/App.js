import React, {useState, useCallback} from 'react'
import ItemsList from "./ItemsList";

function App() {
    const [colored, setColored] = useState(false)
    const [count, setCount] = useState(1)

    const styles = {
        color: colored ? 'darkred' : 'black'
    }

    const generateItemsFromAPI = useCallback( (indexNumber) => {
        return new Array(count).fill('').map((_, i) => `Элемент ${i + indexNumber}`)
    }, [count])


    return (
        <>
            <h1 style={styles}>Количество элементов: {count}</h1>
            <button onClick={() => setCount(prev => prev + 1)} className="btn btn-success">Добавить</button>

            <button onClick={() => setColored(prev => !prev)} className="btn btn-warning">Изменить</button>

            <ItemsList getItems={generateItemsFromAPI}/>
        </>
    )
}

export default App;
