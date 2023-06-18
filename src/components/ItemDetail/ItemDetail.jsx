import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"
import { useState } from "react"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({ id, name, price, description, img, stock }) => {
    const [addAmount, setAddAmount] = useState(0)
    const { addProduct } = useContext(CartContext)

    const amountHandler = (amount) => {
        setAddAmount(amount)
        const item = { id, name, price }
        addProduct(item, amount)
    }

    return (
        <div className="itemContainer">
            <h2>Name: {name} </h2>
            <h3>Price: {price} </h3>
            <h3>ID: {id} </h3>
            <img src={img} alt={name} />
            <h3>Description: {description}</h3>

            {addAmount > 0 ? (
                <Link to="/cart" className="myBtn">
                    Pay
                </Link>
            ) : (
                <ItemCount initial={1} stock={stock} addFunction={amountHandler} />
            )}
        </div>
    )
}

export default ItemDetail
