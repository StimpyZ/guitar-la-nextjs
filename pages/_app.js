import { useEffect, useState } from 'react'
import '../styles/globals.css'

function MyApp ({ Component, pageProps }) {

    const cartLs = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : []

    const [cart, setCart] = useState(cartLs)
    const [paginaLista, setPaginaLista] = useState(false)

    useEffect(() => {

        setPaginaLista(true)

    }, [])

    useEffect(() => {

        localStorage.setItem('cart', JSON.stringify(cart))

    }, [cart])

    const addToCart = guitar => {

        const guitarInCart = cart.findIndex(item => item.id === guitar.id)

        if (guitarInCart >= 0) {

            const newCart = cart.slice()
            newCart[guitarInCart].quantity = guitar.quantity
            setCart(newCart)

        } else {

            setCart(prevState => [
                ...prevState,
                {
                    ...guitar,
                    quantity: guitar.quantity
                }
            ])

        }

    }

    const updateQuantity = (guitar) => {

        const updateCart = cart.map(guitarraState => {

            if (guitarraState.id === guitar.id) {

                guitarraState.quantity = guitar.quantity

            }
            return guitarraState

        })

        setCart(updateCart)

    }

    const deleteGuitar = id => {

        if (confirm('¿Desea eliminar el producto?')) {

            const updateCart = cart.filter(guitar => guitar.id !== id)
            setCart(updateCart)

        }

    }

    return paginaLista
        ? <Component {...pageProps}
            cart={cart}
            addToCart={addToCart}
            updateQuantity={updateQuantity}
            deleteGuitar={deleteGuitar}
        />
        : 'Cargando'

}

export default MyApp
