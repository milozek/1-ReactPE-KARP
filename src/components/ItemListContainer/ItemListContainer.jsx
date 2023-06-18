import "./ItemListContainer.css"
import ItemList from "../ItemList/ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, where, query } from "firebase/firestore"
import { db } from "../../services/config"

const ItemListContainer = () => {
    const [products, setProducts] = useState([])

    const { idCategory } = useParams()

    useEffect(() => {
        const myProducts = idCategory
            ? query(collection(db, "products"), where("idCat", "==", idCategory))
            : collection(db, "products")

        getDocs(myProducts)
            .then((res) => {
                const newProducts = res.docs.map((doc) => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(newProducts)
            })
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
