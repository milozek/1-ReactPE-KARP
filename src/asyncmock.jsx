//"./assets/img/elepants.jpg"

const products = [
    {
        name: "Elepants",
        price: 500,
        id: "1",
        img: "../assets/img/elepants.jpg",
        idCat: "2",
    },
    {
        name: "T-Shirts",
        price: 180,
        id: "2",
        img: "../assets/img/tshirts.avif",
        idCat: "2",
    },
    {
        name: "Jackets",
        price: 200,
        id: "3",
        img: "../assets/img/jackets.webp",
        idCat: "3",
    },
    {
        name: "Shoes",
        price: 400,
        id: "4",
        img: "../assets/img/shoes.webp",
        idCat: "3",
    },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getAProduct = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const product = products.find((prod) => prod.id === id)
            resolve(product)
        }, 2000)
    })
}

export const getProductsByCategory = (idCategory) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productsCategory = products.filter((prod) => prod.idCat === idCategory)
            resolve(productsCategory)
        }, 2000)
    })
}
