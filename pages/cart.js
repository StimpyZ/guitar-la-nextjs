import React, { useEffect, useState } from 'react'
import Layout from '../components/layout'
import styles from '../styles/cart.module.css'
import Image from 'next/image'

export default function Cart ({ cart, updateQuantity, deleteGuitar }) {

    const [total, setTotal] = useState(0)

    useEffect(() => {

        const total = cart.reduce((acc, guitar) => {

            return acc + (guitar.price * guitar.quantity)

        }, 0)
        setTotal(total)

    }, [cart])

    return (
        <Layout
            title='Carrito de compras'
            description='Administra tu carrido de compras'
        >
            <main className='contenedor'>
                <h1 className='heading'>
                    Carrito de compras
                </h1>

                <div className={styles.contenido}>
                    <div className={styles.carrito}>
                        <h2>Resumen del pedido</h2>
                        {cart.length === 0
                            ? 'No hay productos en el carrito'
                            : (
                                cart.map(guitar => (
                                    <div key={guitar.id} className={styles.producto}>
                                        <div>
                                            <Image width={250} height={480} src={guitar.image} alt={`Imagen de la guitarra ${guitar.name}`} />
                                        </div>
                                        <div className={styles.content}>
                                            <p className={styles.nombre}>{guitar.name}</p>
                                            <p className={styles.quantity}>Cantidad</p>
                                            <select
                                                value={guitar.quantity}
                                                onChange={(e) => updateQuantity({
                                                    quantity: Number(e.target.value),
                                                    id: guitar.id
                                                })}
                                            >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <p className={styles.precio}>
                                                $<span>{guitar.price}</span>
                                            </p>
                                            <p className={styles.subtotal}>
                                                Subtotal: $<span>{(guitar.price * guitar.quantity).toFixed(2)}</span>
                                            </p>
                                        </div>
                                        <button
                                            onClick={() => deleteGuitar(guitar.id)}
                                            type='button'
                                            className={styles['btn-eliminar']}
                                        >Eliminar</button>
                                    </div>
                                ))
                            )}
                    </div>

                    <aside className={styles.resumen}>
                        <h3>Resumen del pedido</h3>
                        <p>Total a pagar: ${(total.toFixed(2))}</p>
                    </aside>
                </div>
            </main>
        </Layout>
    )

}
