import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../asyncmock"
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { idCategory } = useParams()

    useEffect(() => {
        const productsFunction = idCategory ? getProductsByCategory : getProducts

        productsFunction(idCategory)
            .then((res) => setProducts(res))
            .catch((error) => console.error(error))
    }, [idCategory])
    return (
        <header>
            <h1>Regen.</h1>
            <h2>benvenuti tutti</h2>
            <h5>-clothing brand-</h5>
            <ItemList products={products} />
        </header>
    )
}

export default ItemListContainer
