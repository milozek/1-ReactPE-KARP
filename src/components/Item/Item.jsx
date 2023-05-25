import "./Item.css"
import { Link } from "react-router-dom"

const Item = ({ id, name, price, img }) => {
    return (
        <div className="productCard">
            <img className="productImg" src={img} alt={name} />
            <h3>Name: {name}</h3>
            <p>Price: {price} </p>
            <p>ID: {id} </p>
            <Link to={`/item/${id}`}>See details</Link>
        </div>
    )
}

export default Item

/* <button className="productBtn">See details</button> */
