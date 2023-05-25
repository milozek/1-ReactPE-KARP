import { useState } from "react"

const ItemCount = () => {
    const [counter, setCounter] = useState(1)
    let maxStock = 10

    const increment = () => {
        if (counter < maxStock) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > 1) {
            setCounter(counter - 1)
        }
    }

    return (
        <div>
            <button onClick={decrement}> - </button>
            <p> {counter} </p>
            <button onClick={increment}> + </button>
        </div>
    )
}

export default ItemCount
