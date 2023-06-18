import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ item, amount }) => {
    const { deleteProduct } = useContext(CartContext)
    return (
        <div>
            <h4> {item.name} </h4>
            <p>Amount: {amount} </p>
            <p>Price: {item.price} </p>
            <button className="myBtn" onClick={() => deleteProduct(item.id)}>
                Delete
            </button>
            <hr />
        </div>
    )
}

export default CartItem
