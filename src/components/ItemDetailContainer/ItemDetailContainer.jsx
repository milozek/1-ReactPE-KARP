import { useState, useEffect } from "react"
import { getAProduct } from "../../asyncmock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { idItem } = useParams()

    useEffect(() => {
        getAProduct(idItem).then((res) => setProduct(res))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...product} />
        </div>
    )
}

export default ItemDetailContainer
