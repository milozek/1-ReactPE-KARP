import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "./components/Navbar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { CartProvider } from "./context/CartContext"
import Cart from "./components/Cart/Cart"
import Checkout from "./components/Checkout/Checkout"

function App() {
    return (
        <>
            <BrowserRouter>
                <CartProvider>
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:idCategory" element={<ItemListContainer />} />
                        <Route path="/item/:idItem" element={<ItemDetailContainer />} />
                        <Route path="*" element={<h2> Not found </h2>} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </>
    )
}

export default App
