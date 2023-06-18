import { CartContext } from "../../context/CartContext"
import { useContext } from "react"
import CartItem from "../CartItem/CartItem"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, clearCart, total, totalAmount } = useContext(CartContext)

    if (totalAmount === 0) {
        return (
            <>
                <h2> There are no products in the cart</h2>

                <Link to="/"> See Products </Link>
            </>
        )
    }

    return (
        <div>
            {cart.map((product) => (
                <CartItem key={product.item.id} {...product} />
            ))}
            <h3>Total: ${total} </h3>
            <h3>Total amount: {totalAmount} </h3>
            <button className="myBtn" onClick={() => clearCart()}>
                Clear cart
            </button>
            <Link className="myBtn" to="/checkout">
                Pay{" "}
            </Link>
        </div>
    )
}

export default Cart
