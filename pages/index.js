import Course from '../components/course'
import Guitarras from '../components/guitarras'
import Layout from '../components/layout'
import Posts from '../components/posts'
import { getCourse } from '../services/getCourse'
import { getGuitars } from '../services/getGuitars'
import { getPosts } from '../services/getPosts'
import styles from '../styles/grid.module.css'

export async function getStaticProps () {

    const [guitarras, posts, course] = await Promise.all([
        getGuitars(),
        getPosts(),
        getCourse()
    ])

    return {
        props: {
            guitarras,
            posts,
            course
        }
    }

}

export default function Home ({ guitarras, posts, course }) {

    return (
        <>
            <Layout
                title={'Inicio'}
                description={'Blog de música, venta de guitarras y más'}
            >
                <main>
                    <h1 className='heading'>Nuestra Coleccion</h1>
                    {guitarras?.length > 0 && (
                        <div className={styles.grid}>
                            {guitarras?.map(guitars => (
                                <Guitarras key={guitars.id} guitarras={guitars}/>
                            ))}
                        </div>
                    )}
                </main>
                <Course course={course}/>
                <section className='contenedor'>
                    <div className={styles.grid}>
                        {posts?.map(post => (
                            <Posts key={post.id} posts={post} />
                        ))}
                    </div>
                </section>
            </Layout>
        </>
    )

}
