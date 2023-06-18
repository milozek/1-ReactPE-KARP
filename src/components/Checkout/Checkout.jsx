import { useState, useContext, useEffect } from "react"
import { CartContext } from "../../context/CartContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import "./Checkout.css"
import Swal from "sweetalert2"

const Checkout = () => {
    const { cart, clearCart, total } = useContext(CartContext)
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [phone, setPhone] = useState("")
    const [email, setEmail] = useState("")
    const [emailConfirmation, setEmailConfirmation] = useState("")
    const [error, setError] = useState("")
    const [orderId, setOrderId] = useState("")

    const formHandler = (event) => {
        event.preventDefault()
        if (!name || !lastname || !phone || !email || !emailConfirmation) {
            setError("Please complete all the fields")
            return
        }
        if (email !== emailConfirmation) {
            setError("The emails don't match")
            return
        }
        const order = {
            items: cart.map((product) => ({
                id: product.item.id,
                name: product.item.name,
                amount: product.amount,
            })),
            total: cart.reduce((total, product) => total + product.item.price * product.amount, 0),
            name,
            lastname,
            phone,
            email,
            date: new Date(),
        }

        Promise.all(
            order.items.map(async (productOrder) => {
                const productRef = doc(db, "products", productOrder.id)
                const productDoc = await getDoc(productRef)
                const currentStock = productDoc.data().stock
                await updateDoc(productRef, {
                    stock: currentStock - productOrder.amount,
                })
            })
        )
            .then(() => {
                addDoc(collection(db, "orders"), order)
                    .then((docRef) => {
                        setOrderId(docRef.id)
                        clearCart()
                    })
                    .catch((error) => {
                        console.error("Error while creating the order", error)
                        setError("An error occurred while creating the order")
                    })
            })
            .catch((error) => {
                console.error("Error while updating the stock", error)
                setError("An error occurred while updating the stock, please try again later")
            })
    }

    useEffect(() => {
        if (orderId) {
            Swal.fire({
                position: "center",
                icon: "success",
                title: `Thanks for your purchase! Your order number is: ${orderId}`,
            })
        }
    }, [orderId])

    return (
        <div>
            <h2>Checkout</h2>
            <form onSubmit={formHandler} className="form">
                {cart.map((product) => (
                    <div key={product.item.id}>
                        <p>
                            {product.item.name} x {product.amount}
                        </p>
                        <p> Price $: {product.item.price} </p>
                        <hr />
                    </div>
                ))}
                <p>Total Purchase: ${total} </p>
                <hr />

                <div className="form-group">
                    <label htmlFor=""> Name </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Lastname </label>
                    <input
                        type="text"
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Phone </label>
                    <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email </label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> Email Confirmation </label>
                    <input
                        type="email"
                        value={emailConfirmation}
                        onChange={(e) => setEmailConfirmation(e.target.value)}
                    />
                </div>

                {error && <p style={{ color: "red" }}> {error} </p>}
                <button className="myBtn" type="submit">
                    Pay{" "}
                </button>
            </form>
            {orderId && (
                <strong className="orderId">
                    Thanks for your purchase! Your order number is: {orderId}
                </strong>
            )}
        </div>
    )
}

export default Checkout
