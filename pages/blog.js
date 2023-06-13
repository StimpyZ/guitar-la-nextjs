import Layout from '../components/layout'
import Posts from '../components/posts'
import { getPosts } from '../services/getPosts'
import styles from '../styles/grid.module.css'

export async function getStaticProps () {

    const posts = await getPosts()

    return {
        props: {
            posts
        }
    }

}

export default function Blog ({ posts }) {

    console.log(posts)
    return (
        <Layout
            title={'Blog'}
            description={'Blog de música, venta de guitarras y más'}
        >
            <main className='contenedor'>
                <h1 className='heading'>Blog</h1>
                <div className={styles.grid}>
                    {posts?.map(post => (
                        <Posts key={post.id} posts={post} />
                    ))}
                </div>
            </main>
        </Layout>
    )

}
