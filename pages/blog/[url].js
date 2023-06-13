import React from 'react'
import Layout from '../../components/layout'
import Image from 'next/image'
import { formatDate } from '../../utils/helpers'
import styles from '../../styles/blog.module.css'
import { getPostPaths, getSinglePost } from '../../services/getPosts'

export async function getStaticPaths () {

    const paths = await getPostPaths()

    return {
        paths,
        fallback: false
    }

}

export async function getStaticProps ({ params }) {

    const { url } = params

    const posts = await getSinglePost(url)

    return {
        props: { posts }
    }

}

export default function PostUrl ({ posts }) {

    const { image, title, content, publishedAt } = posts[0]

    return (
        <Layout
            title={'Blog'}
            description={'Blog de música, venta de guitarras y más'}
        >
            <main className={`contenedor ${styles['post-single']}`}>
                <Image
                    className={styles['imagen-post']}
                    src={image}
                    width={600}
                    height={400}
                    alt={`Imagen del post ${title}`}
                />
                <div className={styles.contenido}>
                    <h3>{title}</h3>
                    <p className={styles.fecha}>{formatDate(publishedAt)}</p>
                    {content.split('\n').map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                </div>
            </main>
        </Layout>
    )

}
