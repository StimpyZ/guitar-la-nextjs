import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/tienda.module.css'

export default function Guitarras ({ guitarras }) {

    const { uuid, name, description, image, price } = guitarras
    return (
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
                <p className={styles.precio}>${price}</p>
                <Link
                    href={`/guitarras/${uuid}`}
                    className='enlace'
                >
                                Ver mas
                </Link>
            </div>
        </div>

    )

}
