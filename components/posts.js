import Image from 'next/image'
import React from 'react'
import { formatDate } from '../utils/helpers'
import Link from 'next/link'
import styles from '../styles/blog.module.css'

export default function Posts ({ posts }) {

    const { image, title, content, publishedAt, url } = posts

    return (
        <article className={styles.post}>
            <Image src={image} width={600} height={400} alt={`Imagen del post ${title}`}/>
            <div className={styles.contenido}>
                <h2>{title}</h2>
                <p className={styles.fecha}>{formatDate(publishedAt)}</p>
                <p className={styles.resumen}>{content}</p>
                <Link href={`/blog/${url}`} className='enlace'>Leer mas</Link>
            </div>
        </article>
    )

}
