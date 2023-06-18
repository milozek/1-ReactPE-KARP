import "./CartWidget.css"
import cartImg from "../../../public/assets/img/cart-widget.png"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartWidget = () => {
    const { totalAmount } = useContext(CartContext)

    return (
        <div>
            <Link style={{ textDecoration: "none" }} to="/cart">
                <img className="cart" src={cartImg} alt="cart image" />
                {totalAmount > 0 && <strong className="itemsIndex"> {totalAmount} </strong>}
            </Link>
        </div>
    )
}

export default CartWidget
