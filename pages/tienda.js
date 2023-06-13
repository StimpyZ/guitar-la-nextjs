import Layout from '../components/layout'
import Guitarras from '../components/guitarras'
import styles from '../styles/grid.module.css'
import { getGuitars } from '../services/getGuitars'

export async function getServerSideProps () {

    const guitarras = await getGuitars()

    return {
        props: { guitarras }
    }

}

export default function Tienda ({ guitarras }) {

    return (
        <Layout
            title={'Tienda'}
            description={'Tienda de guitarras, bajos, teclados, baterías y más'}
        >
            <main className="contenedor">
                <h1 className="heading">Nuestra Coleccion</h1>
                {guitarras?.length > 0 && (
                    <div className={styles.grid}>
                        {guitarras?.map(guitars => (
                            <Guitarras key={guitars.id} guitarras={guitars}/>
                        ))}
                    </div>
                )}
            </main>
        </Layout>
    )

}
