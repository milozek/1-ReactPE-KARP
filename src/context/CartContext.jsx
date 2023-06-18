import { useState, createContext } from "react"

export const CartContext = createContext({
    cart: [],
    total: 0,
    totalAmount: 0,
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    const addProduct = (item, amount) => {
        const productInStock = cart.find((prod) => prod.item.id === item.id)

        if (!productInStock) {
            setCart((prev) => [...prev, { item, amount }])
            setTotalAmount((prev) => prev + amount)
            setTotal((prev) => prev + item.price * amount)
        } else {
            const updatedCart = cart.map((prod) => {
                if (prod.item.id === item.id) {
                    return { ...prod, amount: prod.amount + amount }
                } else {
                    return prod
                }
            })
            setCart(updatedCart)
            setTotalAmount((prev) => prev + amount)
            setTotal((prev) => prev + item.price * amount)
        }
    }

    const deleteProduct = (id) => {
        const deletedProduct = cart.find((prod) => prod.item.id === id)
        const updatedCart = cart.filter((prod) => prod.item.id !== id)
        setCart(updatedCart)
        setTotalAmount((prev) => prev - deletedProduct.amount)
        setTotal((prev) => prev - deletedProduct.item.price * deletedProduct.amount)
    }

    const clearCart = () => {
        setCart([])
        setTotalAmount(0)
        setTotal(0)
    }

    return (
        <CartContext.Provider
            value={{
                cart,
                addProduct,
                deleteProduct,
                clearCart,
                total,
                totalAmount,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}
