import "./CartWidget.css";
import cartImg from "../../assets/cart-widget.png";

const CartWidget = () => {
  return (
    <div>
      <img src={cartImg} alt="cart image" />
      <b>2</b>
    </div>
  );
};

export default CartWidget;
