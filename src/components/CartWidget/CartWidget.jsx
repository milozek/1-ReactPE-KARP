import "./CartWidget.css"
import cartImg from "../../../public/assets/img/cart-widget.png"

const CartWidget = () => {
    return (
        <div>
            <img className="cart" src={cartImg} alt="cart image" />
            <b>2</b>
        </div>
    )
}

export default CartWidget
