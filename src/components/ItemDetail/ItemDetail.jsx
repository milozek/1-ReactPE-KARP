import "./ItemDetail.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ id, name, price, img }) => {
    return (
        <div className="itemContainer">
            <h2>Name: {name} </h2>
            <h3>Price: {price} </h3>
            <h3>ID: {id} </h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga odio eveniet facere
                maiores quo tempore quisquam! Consectetur dolores quos ducimus maiores quam quae,
                eveniet voluptatibus beatae, nemo cumque tempore modi?
            </p>
            <img src={img} alt={name} />
            <ItemCount />
        </div>
    )
}

export default ItemDetail
