import { useState } from "react"
import "./ItemCount.css"
import { Link } from "react-router-dom"

const ItemCount = ({ initial, stock, addFunction }) => {
    const [counter, setCounter] = useState(initial)

    const increment = () => {
        if (counter < stock) {
            setCounter(counter + 1)
        }
    }

    const decrement = () => {
        if (counter > initial) {
            setCounter(counter - 1)
        }
    }

    return (
        <>
            <div>
                <button className="myBtn" onClick={decrement}>
                    {" "}
                    -{" "}
                </button>
                <strong> {counter} </strong>
                <button className="myBtn" onClick={increment}>
                    {" "}
                    +{" "}
                </button>
            </div>
            {stock > 0 && (
                <button className="myBtn" onClick={() => addFunction(counter)}>
                    {" "}
                    Add to Cart{" "}
                </button>
            )}
            <Link to="/" className="myBtn">
                {" "}
                Keep buying{" "}
            </Link>
        </>
    )
}

export default ItemCount
