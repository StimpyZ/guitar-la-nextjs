import Image from 'next/image'
import React, { useId, useState } from 'react'
import styles from '../../styles/tienda.module.css'
import Layout from '../../components/layout'
import { getGuitarsPaths, getSingleGuitar } from '../../services/getGuitars'
import { useRouter } from 'next/router'

export async function getStaticPaths () {

    const paths = await getGuitarsPaths()

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps ({ params: { uuid } }) {

    const guitars = await getSingleGuitar(uuid)

    return {
        props: { guitars }
    }

}

export default function Producto ({ guitars, addToCart }) {

    const navigate = useRouter()
    const selectId = useId()
    const [quantity, setQuantity] = useState(0)
    const { name, description, price, image, id } = guitars[0]

    const handleSubmit = e => {

        e.preventDefault()

        if (quantity < 1) {

            alert('La cantidad debe ser mayor a 0')
            return

        }

        const selectedGuitar = {
            id,
            name,
            price,
            quantity,
            image
        }

        addToCart(selectedGuitar)
        navigate.push('/cart')

    }
    return (
        <Layout
            title={`${name}`}
            description={`Guitarra electrica ${name}`}
        >
            <div className={styles.guitarra}>
                <div className={styles['guitarra-img']}>
                    <Image
                        width={333}
                        height={750}
                        src={image}
                        alt={`Guitarra ${name}`}
                    />
                </div>
                <div className={styles.contenido}>
                    <h3>{name}</h3>
                    <p className={styles.description}>
                        {description}
                    </p>
                    <p className={styles.precio}>{price}</p>

                    <form
                        onSubmit={handleSubmit}
                        className={styles.formulario}>
                        <label htmlFor={selectId}>Cantidad</label>
                        <select
                            onChange={e => setQuantity(Number(e.target.value))}
                            id={selectId}>
                            <option value=''>-- Seleccione --</option>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                            <option value='4'>4</option>
                            <option value='5'>5</option>
                        </select>

                        <input
                            type="submit"
                            value='Agregar al carrito'
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )

}
